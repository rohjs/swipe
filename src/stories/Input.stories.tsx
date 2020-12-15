import { Meta } from '@storybook/react/types-6-0'

import { Input } from '../components'
import { createThemedTemplate } from './utils/theme'

const { Template, themeArgType } = createThemedTemplate(Input)

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    theme: themeArgType
  }
} as Meta

export const DefaultInput = Template.bind({})
DefaultInput.args = {
  variant: 'default',
  size: 'big',
  placeholder: 'Placeholder'
}

export const FilledInput = Template.bind({})
FilledInput.args = {
  variant: 'filled',
  size: 'medium',
  placeholder: 'Placeholder'
}
