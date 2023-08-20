'use client'

import React from 'react'
import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './FileItem'

export const FilesList = () => {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-6 space-y-4">
      {files.map((file) => (
        <FileItem name={file.name} size={file.size} key={file.name} />
      ))}
    </div>
  )
}
