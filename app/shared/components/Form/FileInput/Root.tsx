'use client'

import React, {
  ComponentProps,
  useId,
  createContext,
  useContext,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>

interface FileInputContextProps {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextProps)

export const Root = (props: RootProps) => {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
