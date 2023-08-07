import { Search } from 'lucide-react'
import React, { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export const InputPrefix = (props: InputPrefixProps) => {
  return <div {...props} />
}

type InputControllerProps = ComponentProps<'input'>

export const InputController = (props: InputControllerProps) => {
  return (
    <input
      type="text"
      className="flex-1 border-0 p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export const InputRoot = (props: InputRootProps) => {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    ></div>
  )
}
