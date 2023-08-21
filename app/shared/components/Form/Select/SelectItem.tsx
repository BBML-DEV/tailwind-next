'use client'

import React from 'react'
import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelectItemProps = Select.SelectItemProps & {
  text: string
}

export const SelectItem = ({ text, ...props }: SelectItemProps) => {
  return (
    <Select.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none dark:text-zinc-100 dark:data-[highlighted]:bg-zinc-700"
      {...props}
    >
      <Select.ItemText className="text-black">{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500 dark:text-zinc-100" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
