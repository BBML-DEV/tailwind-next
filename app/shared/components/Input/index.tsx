import React from 'react'

interface InputProps {
  placeholderText: string
}

export const Input = ({ placeholderText }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholderText}
      className="flex-1 border-0 p-0 text-zinc-900 placeholder-zinc-600 outline-none"
    />
  )
}
