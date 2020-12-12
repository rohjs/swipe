import { Meta } from '@storybook/react/types-6-0'

import { Button } from '../components/Button'
import { createThemedTemplate } from './utils/theme'

const { Template, themeArgType } = createThemedTemplate(Button)

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: { control: 'inline-radio' },
    variant: { control: 'inline-radio' },
    type: { control: 'inline-radio' },
    onClick: { table: { disable: true } },
    onMouseUp: { table: { disable: true } },
    onMouseDown: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    name: { table: { disable: true } },
    value: { table: { disable: true } },
    className: { table: { disable: true } },
    theme: themeArgType
  }
} as Meta

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  size: 'big',
  children: 'Button label'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  children: 'Button label'
}

export const Ghost = Template.bind({})
Ghost.args = {
  variant: 'ghost',
  size: 'medium',
  children: 'Button label'
}
