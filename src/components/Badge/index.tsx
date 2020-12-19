import React from 'react'
import styled from 'styled-components'

import {
  commonBadgeStyle,
  selectBadgeStyle,
  BadgeVariants,
  BadgeTypes
} from './styled'

export interface StyledBadgeProps {
  variant: BadgeVariants
  type: BadgeTypes
}

const StyledBadge = styled.strong<StyledBadgeProps>`
  ${commonBadgeStyle}
  ${({ variant, type }) => selectBadgeStyle(variant, type)}
`

export interface BadgeProps extends StyledBadgeProps {
  className?: string
  children?: React.ReactNode
}

export const Badge = ({ variant, type, className, children }: BadgeProps) => {
  return (
    <StyledBadge
      variant={variant}
      type={type}
      className={className}
      children={children}
    />
  )
}
