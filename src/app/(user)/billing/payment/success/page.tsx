import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

const page = () => {
  return (
    <Alert variant="default">
      <AlertTitle className="mb-3 text-xl text-green-400">Success</AlertTitle>
      <AlertDescription>
        Your account has been updated.
        <br />
        <Link href="/dashboard" className="underline">Go to the dashboard</Link> to generate more quizzes.
      </AlertDescription>
    </Alert>
  )
};

export default page;