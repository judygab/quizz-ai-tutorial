"use server";

import { db } from "@/db";
import { quizzSubmissions } from "@/db/schema";
import { auth } from "@/auth";
import { InferInsertModel, eq } from "drizzle-orm";

type Submission = InferInsertModel<typeof quizzSubmissions>;

export async function saveSubmission(sub: Submission, quizzId: number) {
  const { score } = sub;

  const newSubmission = await db
    .insert(quizzSubmissions)
    .values({
      score,
      quizzId,
    })
    .returning({ insertedId: quizzSubmissions.id });
  const submissionId = newSubmission[0].insertedId;
  return submissionId;
}
