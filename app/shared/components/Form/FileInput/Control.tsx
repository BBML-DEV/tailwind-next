import React, { ComponentProps } from 'react'

export type ControlProps = ComponentProps<'input'>

export const Control = (props: ControlProps) => {
  return <input type="file" className="sr-only" id="photo" {...props} />
}
