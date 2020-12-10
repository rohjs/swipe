import React, { FocusEvent, MouseEvent } from 'react'
import styled from 'styled-components'

import {
  ButtonSizes,
  ButtonVariants,
  StyledButtonProps
} from '../../types/button'
import {
  commonButtonStyle,
  selectButtonVariant,
  selectButtonSize
} from './style'

const StyledButton = styled.button<StyledButtonProps>`
  ${commonButtonStyle}
  ${({ variant }) => selectButtonVariant(variant)}
  ${({ size }) => selectButtonSize(size)}

  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  variant: ButtonVariants
  size?: ButtonSizes
  fullWidth?: boolean
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
  type,
  variant,
  size,
  fullWidth,
  onClick,
  onMouseUp,
  onMouseDown,
  onBlur,
  disabled,
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
