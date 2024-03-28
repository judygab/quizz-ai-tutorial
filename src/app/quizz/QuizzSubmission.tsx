import React, { useEffect } from 'react'
import Bar from './Bar'
import { useReward } from 'react-rewards';
import Image from 'next/image';

type Props = {
  scorePercentage: number,
  score: number,
  totalQuestions: number
}

const QuizzSubmission = (props: Props) => {
  const { scorePercentage, score, totalQuestions } = props;
  const { reward, isAnimating } = useReward('rewardId', 'confetti');

  useEffect(() => {
    if (scorePercentage === 100) {
      reward();
    }
  }, [scorePercentage, reward])

  return (
    <div className="flex flex-col flex-1">
      <main className='py-11 flex flex-col gap-4 items-center flex-1 mt-24'>
        <h2 className='text-3xl font-bold'>Quizz Complete!</h2>
        <p>You scored: {scorePercentage}%</p>
        {
          scorePercentage === 100 ?
            <div>
              <p>Congratulations! 🎉</p>
              <div className="flex justify-center">
                <Image src="/images/owl-smiling.png" alt="Smiling Owl Image" width={100} height={100} />
              </div>
              <span id="rewardId" />
            </div> :
            <>
              <div className="flex flex-row gap-8 mt-6">
                <Bar percentage={scorePercentage} color="green" />
                <Bar percentage={100 - scorePercentage} color="red" />
              </div>
              <div className="flex flex-row gap-8">
                <p>{score} Correct</p>
                <p>{totalQuestions - score} Incorrect</p>
              </div>
            </>
        }
      </main>
    </div>
  )
}

export default QuizzSubmission