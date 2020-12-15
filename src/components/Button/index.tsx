import React, { FocusEvent, MouseEvent } from 'react'
import styled from 'styled-components'

import { FormSizes } from 'types/forms'
import { selectFormSize } from 'styled/forms'
import {
  commonButtonStyle,
  selectButtonVariant,
  ButtonVariants
} from './styled'

export interface StyledButtonProps {
  variant: ButtonVariants
  size?: FormSizes
  fullWidth?: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
  ${commonButtonStyle}
  ${({ variant }) => selectButtonVariant(variant)}
  ${({ size }) => selectFormSize(size)}

  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`

export interface ButtonProps extends StyledButtonProps {
  type?: 'button' | 'submit' | 'reset'
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

export const Button = ({
  type = 'button',
  variant,
  size = 'medium',
  fullWidth = false,
  onClick,
  onMouseUp,
  onMouseDown,
  onBlur,
  disabled = false,
  name,
  value,
  className,
  children
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      onBlur={onBlur}
      disabled={disabled}
      name={name}
      value={value}
      className={className}
    >
      {children}
    </StyledButton>
  )
}
