import { db } from '@/db';
import { quizzes } from '@/db/schema';
import { eq } from 'drizzle-orm';
import QuizzQuestions from '../QuizzQuestions';

const page = async ({ params }: {
  params: {
    quizzId: string
  }
}) => {
  const quizzId = params.quizzId;
  const quizz = await db.query.quizzes.findFirst({
    where: eq(quizzes.id, parseInt(quizzId)),
    with: {
      questions: {
        with: {
          answers: true
        }
      }
    }
  })

  console.log("quizz", quizz);

  if (!quizzId) {
    return <div>quizz not found</div>
  };

  return (
    <div><QuizzQuestions quizz={quizz} /></div>
  )
}

export default page