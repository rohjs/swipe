import React, { FC, PropsWithChildren, ComponentType } from 'react'
import { ThemeProvider } from 'styled-components'
import { Story } from '@storybook/react/types-6-0'

import { selectTheme } from 'styled/theme'
import { ThemeTypes } from 'types/theme'

export type ThemedStory<P> = Story<{ theme: ThemeTypes } & PropsWithChildren<P>>

export type ThemedWrapperProps = {
  theme?: ThemeTypes
}

export const ThemedWrapper: FC<ThemedWrapperProps> = ({
  theme = 'light',
  children
}) => {
  return <ThemeProvider theme={selectTheme(theme)}>{children}</ThemeProvider>
}

export function createThemedTemplate<P>(
  Component: ComponentType<P>
): {
  Template: ThemedStory<P>
  themeArgType: Record<string, unknown>
} {
  return {
    Template: ({ theme, ...args }: any) => {
      return (
        <ThemedWrapper theme={theme}>
          <Component {...args} />
        </ThemedWrapper>
      )
    },
    themeArgType: {
      defaultValue: 'light',
      control: {
        type: 'inline-radio',
        options: ['light', 'dark']
      }
    }
  }
}
