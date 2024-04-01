import React from 'react'
import { FileSvg } from './fileSvg'

type Props = {}

const LoadingAnimation = (props: Props) => {
  return (
    <div>
      <h2>Your quizz is being generated...</h2>
      <div className="bg-secondary mt-6 p-2 rounded-lg">
        <FileSvg />
      </div>
    </div>
  )
}

export default LoadingAnimation