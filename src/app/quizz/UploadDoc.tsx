"use client";
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';

type Props = {}

const UploadDoc = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [document, setDocument] = useState<string | Blob | File | undefined>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    console.log("document", document);
    formData.append("pdf", document as Blob);
    try {
      const res = await fetch("/api/quizz/generate", {
        method: "POST",
        body: formData,
      });
      if (res.status === 200) {
        const data = await res.json();
        const quizzId = data.quizzId;

        router.push(`/quizz/${quizzId}`);
        console.log("Quizz generated successfully");
      }
    } catch (e) {
      console.error("Error generating quizz", e);
    }
    setIsLoading(false);
  }

  return (
    <div className="w-full">
      <form className="w-full" onSubmit={handleSubmit}>
        <label htmlFor="document" className="bg-secondary w-full flex h-20 rounded-md border-4 border-dashed border-blue-900 relative"><div className="absolute inset-0 m-auto flex justify-center items-center">{document && document?.name ? document.name : "Drag a file"}</div><input
          // value={document}
          type="file"
          id="document"
          className="relative block w-full h-full z-50 opacity-0"
          onChange={(e) => setDocument(e?.target?.files?.[0])}
        /></label>
        <Button size="lg" className="mt-2" type="submit">Generate Quizz 🪄</Button>
      </form>
    </div>
  )
}

export default UploadDoc