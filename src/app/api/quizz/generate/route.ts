import { NextRequest, NextResponse } from "next/server";

import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { JsonOutputFunctionsParser } from "langchain/output_parsers";

import saveQuizz from "./saveToDb";

export async function POST(req: NextRequest) {
  // const body = await req.json();
  const body = await req.formData();
  // const text = body.text;
  const document = body.get("pdf");

  try {
    const pdfLoader = new PDFLoader(document as Blob, {
      parsedItemSeparator: " ",
    });
    const docs = await pdfLoader.load();

    const selectedDocuments = docs.filter((doc) => doc.pageContent !== undefined);
    // console.log("selectedDocuments", selectedDocuments);
    const texts = selectedDocuments.map((doc) => doc.pageContent);
    // console.log("texts", texts);
    const metadatas = selectedDocuments.map((doc) => doc.metadata);
    // console.log("metadatas", metadatas);

    const prompt =
      "given the text which is a summary of the document, generate a quiz based on the text. Return json only that contains a quizz object with fields: name, description and questions. The questions is an array of objects with fields: questionText, answers. The answers is an array of objects with fields: answerText, isCorrect.";

    const model = new ChatOpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      modelName: "gpt-4-1106-preview",
    });

    // const message = new HumanMessage({
    //   content: [
    //     {
    //       type: "text",
    //       text: prompt + "\n" + texts.join("\n"),
    //     },
    //   ],
    // });

    // const res = await model.invoke([message]);
    // console.log(res.lc_kwargs.content);
    // Instantiate the parser
    const parser = new JsonOutputFunctionsParser();
    // Define the function schema
    const extractionFunctionSchema = {
      name: "extractor",
      description: "Extracts fields from the input.",
      parameters: {
        type: "object",
        properties: {
          quizz: {
            type: "object",
            properties: {
              name: { type: "string" },
              description: { type: "string" },
              questions: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    questionText: { type: "string" },
                    answers: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          answerText: { type: "string" },
                          isCorrect: { type: "boolean" },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    };

    // Create a new runnable, bind the function to the model, and pipe the output through the parser
    const runnable = model
      .bind({
        functions: [extractionFunctionSchema],
        function_call: { name: "extractor" },
      })
      .pipe(parser);

    const message = new HumanMessage({
      content: [
        {
          type: "text",
          text: prompt + "\n" + texts.join("\n"),
        },
      ],
    });

    // Invoke the runnable with an input
    const result = await runnable.invoke([message]);

    // Store the Quizz Data in the database
    const { quizzId } = await saveQuizz(result.quizz);

    return NextResponse.json({ quizzId }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
