'use client'

import React, { ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

export const Control = (props: ControlProps) => {
  const { id } = useFileInput()
  return <input type="file" className="sr-only" id={id} {...props} />
}
