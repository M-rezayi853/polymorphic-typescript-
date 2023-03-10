import React from 'react'

type Rainbow =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'voilet'

type AsProps<C extends React.ElementType> = {
  as?: C
}

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProps<C> & P)

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProps<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

type TextProps = {
  color?: Rainbow | 'black'
}

export const Text = <C extends React.ElementType = 'span'>({
  as,
  color,
  style,
  children,
  ...restProps
}: PolymorphicComponentProps<C, TextProps>) => {
  const Component = as || 'span'

  const internalStyles = color ? { style: { ...style, color } } : {}

  return (
    <Component {...restProps} {...internalStyles}>
      {children}
    </Component>
  )
}
