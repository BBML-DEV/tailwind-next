import React, { ComponentProps } from 'react'

type TextAreaProps = ComponentProps<'textarea'>

export const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-500 focus:ring focus:ring-violet-100"
    />
  )
}
