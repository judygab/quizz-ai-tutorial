import React from 'react'
import { Upload } from "lucide-react";

type Props = {}

const FileUpload = (props: Props) => {
  return (
    <div className="flex items-center justify-center w-full">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-secondary dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload />
          <p className="mb-2 text-sm dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs dark:text-gray-400">Txt or PDF</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>

  )
}

export default FileUpload