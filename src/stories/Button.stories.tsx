import { Meta } from '@storybook/react/types-6-0'

import { Button } from '../components/Button'
import { createThemedTemplate } from './utils/theme'

const { Template, themeArgType } = createThemedTemplate(Button)

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    theme: themeArgType
  }
} as Meta

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  size: 'big',
  fullWidth: true,
  children: 'hi'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  children: 'hi'
}
