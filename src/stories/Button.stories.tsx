import { Meta } from '@storybook/react/types-6-0'

import { Button } from '../components'
import { createThemedTemplate } from './utils/theme'

const { Template, themeArgType } = createThemedTemplate(Button)

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    size: { control: 'inline-radio' },
    variant: { control: 'select' },
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
  children: 'Button label'
}

export const Ghost = Template.bind({})
Ghost.args = {
  variant: 'ghost',
  children: 'Button label'
}

export const Dark = Template.bind({})
Dark.args = {
  variant: 'dark',
  children: 'Button label'
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
  children: 'Button label'
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
  children: 'Button label'
}

export const Blue = Template.bind({})
Blue.args = {
  variant: 'blue',
  children: 'Button label'
}

export const Yellow = Template.bind({})
Yellow.args = {
  variant: 'yellow',
  children: 'Button label'
}
