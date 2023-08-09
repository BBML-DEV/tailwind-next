'use client'

import { UploadCloud } from 'lucide-react'
import React from 'react'
import { useFileInput } from './Root'

export const Trigger = () => {
  const { id } = useFileInput()

  return (
    <label
      className="hover: group flex flex-1 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
      htmlFor={id}
    >
      <div className="border-6 rounded-full border-4 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="group-hover: h-5 w-5 text-violet-600 text-zinc-600" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span>
          <span className="font-semibold text-violet-700">Click to upload</span>{' '}
          or drag and drop
        </span>
        <span className="text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
