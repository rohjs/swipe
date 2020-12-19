import { Meta } from '@storybook/react/types-6-0'

import { Badge } from '../components/Badge'
import { createThemedTemplate } from './utils/theme'

const { Template, themeArgType } = createThemedTemplate(Badge)

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    variant: { control: 'inline-radio' },
    type: { control: 'inline-radio' },
    theme: themeArgType
  }
} as Meta

export const Solid = Template.bind({})
Solid.args = {
  variant: 'blue',
  type: 'solid',
  children: 'Badge'
}

export const Subtle = Template.bind({})
Subtle.args = {
  variant: 'blue',
  type: 'subtle',
  children: 'Badge'
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'blue',
  type: 'outlined',
  children: 'Badge'
}
