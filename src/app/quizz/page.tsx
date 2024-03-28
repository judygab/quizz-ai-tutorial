"use client";
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from "lucide-react";
import { X } from "lucide-react";
import ProgressBar from '@/components/progressBar'
import ResultCard from './ResultCard'
import Bar from './Bar';
import QuizzSubmission from './QuizzSubmission';
import UploadDoc from './UploadDoc';

type Props = {}

const questions = [
  {
    question: 'What is the capital of France?',
    correctAnswer: 'Paris',
    answers: [
      { id: 1, answer: 'Paris' },
      { id: 2, answer: 'London' },
      { id: 3, answer: 'Madrid' },
      { id: 4, answer: 'Berlin' },
    ]
  },
  {
    question: 'What is the capital of Spain?',
    correctAnswer: 'Madrid',
    answers: [
      { id: 1, answer: 'Paris' },
      { id: 2, answer: 'London' },
      { id: 3, answer: 'Madrid' },
      { id: 4, answer: 'Berlin' },
    ]
  },
  {
    question: 'What is the capital of Germany?',
    correctAnswer: 'Berlin',
    answers: [
      { id: 1, answer: 'Paris' },
      { id: 2, answer: 'London' },
      { id: 3, answer: 'Madrid' },
      { id: 4, answer: 'Berlin' },
    ]
  },
]

const page = (props: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [started, setStarted] = useState(true);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    if (!started) {
      setStarted(true)
      return;
    }

    if (currentQuestion === questions.length - 1) {
      setSubmitted(true);
      return;
    }

    setSelectedAnswer(null);
    setIsCorrect(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setCurrentQuestion(0)
    }
  }

  const handleAnswer = (answerId: number) => {
    setSelectedAnswer(answerId);
    const correctAnswer = questions[currentQuestion].answers.find(answer => answer.id === answerId).answer;
    const isCurrentCorrect = correctAnswer === questions[currentQuestion].correctAnswer;
    if (isCurrentCorrect) {
      setScore(score + 1)
    }
    setIsCorrect(correctAnswer === questions[currentQuestion].correctAnswer)
  }

  const scorePercentage: number = Math.round((score / questions.length) * 100);

  if (submitted) {
    return (
      <QuizzSubmission score={score} scorePercentage={scorePercentage} totalQuestions={questions.length} />
    )
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="position-sticky top-0 z-10 shadow-md py-4 w-full">
        <header className='grid grid-cols-[auto,1fr,auto]	grid-flow-col items-center justify-between py-2 gap-2'>
          <Button size="icon" variant="outline"><ChevronLeft /></Button>
          <ProgressBar value={(currentQuestion / questions.length) * 100} />
          <Button size="icon" variant="outline"><X /></Button>
        </header>
      </div>
      <main className='py-11 flex justify-center flex-1'>
        {
          !started ? (
            <h2 className='text-3xl font-bold'>Welcome to the quizz page</h2>
          ) : (
            <div>
              <h2 className='text-3xl font-bold'>{questions[currentQuestion].question}</h2>
              <div className='grid grid-cols-1 gap-6 mt-6'>
                {
                  questions[currentQuestion].answers.map(answer => {
                    const variant = selectedAnswer === answer.id ? (isCorrect ? "neoSuccess" : "neoDanger") : "neoOutline";
                    return (
                      <Button key={`${currentQuestion}_${answer.id}`} variant={variant} onClick={() => handleAnswer(answer.id)} size="xl">{answer.answer}</Button>
                    )
                  })
                }
              </div>
            </div>
          )
        }
      </main>
      <div className="footer pb-9 px-6 relative mb-0">
        <ResultCard isCorrect={isCorrect} correctAnswer={questions[currentQuestion].correctAnswer} />
        <Button variant="neo" size="lg" className="mt-3" onClick={handleNext}>{
          !started ? 'Start' : (currentQuestion === questions.length - 1) ? 'Submit' : 'Next'
        }</Button>
      </div>
    </div>
  )
}

export default page