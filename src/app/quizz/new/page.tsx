import React from 'react'
import UploadDoc from '../UploadDoc'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col flex-1">
      <main className='py-11 flex flex-col text-center gap-4 items-center flex-1 mt-24'>
        <h2 className='text-3xl font-bold mb-4'>What do you want to be quizzed about today?</h2>
        <UploadDoc />
      </main>
    </div>
  )
}

export default page