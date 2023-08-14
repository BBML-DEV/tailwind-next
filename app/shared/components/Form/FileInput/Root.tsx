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
  onFilesSelected: (files: File[], multiple: boolean) => void
  deleteFiles: (name: string) => void
}

const FileInputContext = createContext({} as FileInputContextProps)

export const Root = (props: RootProps) => {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  function deleteFiles(name: string) {
    const newList = files.filter((file) => {
      return file.name !== name
    })

    setFiles(newList)
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected, deleteFiles }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
