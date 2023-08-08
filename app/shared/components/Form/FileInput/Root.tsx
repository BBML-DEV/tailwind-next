import React, { ComponentProps } from 'react'

export type RootProps = ComponentProps<'div'>

export const Root = (props: RootProps) => {
  return <div {...props} />
}
