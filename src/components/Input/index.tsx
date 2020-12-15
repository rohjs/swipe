import React, { ChangeEvent, FocusEvent } from 'react'
import styled from 'styled-components'

import { FormSizes } from 'types/forms'
import { selectFormSize } from 'styled/forms'
import { commonInputStyle, InputVariants, selectInputVariant } from './styled'

export interface StyledInputProps {
  variant: InputVariants
  size?: FormSizes
  fullWidth?: boolean
}

const StyledInput = styled.input<StyledInputProps>`
  ${commonInputStyle}
  ${({ variant }) => selectInputVariant(variant)}
  ${({ size }) => selectFormSize(size)}

  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`

export interface InputProps extends StyledInputProps {
  type?: string
  id: string
  onChange?: (e: ChangeEvent) => void
  onBlur?: (e: FocusEvent) => void
  disabled?: boolean
  name?: string
  value?: string
  className?: string
  placeholder?: string
  children?: React.ReactNode
}

export const Input = ({
  type = 'text',
  variant,
  size = 'medium',
  fullWidth = false,
  id,
  onChange,
  onBlur,
  disabled,
  name,
  value,
  className,
  placeholder
}: InputProps) => {
  return (
    <StyledInput
      id={id}
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      name={name}
      value={value}
      className={className}
      placeholder={placeholder}
    />
  )
}
