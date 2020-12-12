export type ButtonVariants = 'primary' | 'secondary' | 'ghost'
export type ButtonSizes = 'big' | 'medium' | 'small'

export interface StyledButtonProps {
  variant: ButtonVariants
  size?: ButtonSizes
  fullWidth?: boolean
}

export interface ButtonProps extends StyledButtonProps {
  type: 'button' | 'submit' | 'reset'
  onClick?: (e: MouseEvent) => void
  onMouseUp?: (e: MouseEvent) => void
  onMouseDown?: (e: MouseEvent) => void
  onBlur?: (e: FocusEvent) => void
  disabled?: boolean
  name?: string
  value?: string
  className?: string
  children?: React.ReactNode
}
