import { Meta } from '@storybook/react/types-6-0'

import { Input } from '../components/Input'
import { createThemedTemplate } from './utils/theme'

const { Template, themeArgType } = createThemedTemplate(Input)

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    variant: { control: 'select' },
    type: { control: 'inline-radio' },
    name: { table: { disable: true } },
    value: { table: { disable: true } },
    className: { table: { disable: true } },
    theme: themeArgType
  }
} as Meta

export const Default = Template.bind({})
Default.args = {
  size: 'big',
  placeholder: 'Placeholder'
}

export const Filled = Template.bind({})
Filled.args = {
  variant: 'filled',
  size: 'medium',
  placeholder: 'Placeholder'
}
