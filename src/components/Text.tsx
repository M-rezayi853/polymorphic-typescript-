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

type Props<C extends React.ElementType, P> = PolymorphicComponentProps<C, P>

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref']

type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  P
> = PolymorphicComponentProps<C, P> & { ref?: PolymorphicRef<C> }

type TextComponent = <C extends React.ElementType>(
  props: PolymorphicComponentPropsWithRef<C, TextProps>
) => React.ReactElement | null

export const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType = 'span'>(
    { as, color, style, children, ...restProps }: Props<C, TextProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'span'

    const internalStyles = color ? { style: { ...style, color } } : {}

    return (
      <Component {...restProps} {...internalStyles} ref={ref}>
        {children}
      </Component>
    )
  }
)
