'use client'

import React, { ComponentProps, useId, createContext, useContext } from 'react'

export type RootProps = ComponentProps<'div'>

interface FileInputContextProps {
  id: string
}

const FileInputContext = createContext({} as FileInputContextProps)

export const Root = (props: RootProps) => {
  const id = useId()

  return (
    <FileInputContext.Provider value={{ id }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
