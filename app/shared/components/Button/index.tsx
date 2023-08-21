import React, { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-nome shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary: 'bg-violet-600 text-white hover:bg-violet-700',
      outline:
        'border border-zinc-300 dark:hover:bg-zinc-800 text-zinc-700 hover:bg-zinc-50 dark:text-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700',
      ghost:
        'rounded-md p-2 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800',
    },
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = ({ variant, ...props }: ButtonProps) => {
  return <button className={button({ variant })} {...props} />
}
