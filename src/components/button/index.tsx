import { CSSProperties, FC, ReactNode, HTMLAttributes } from 'react'
import { cx, css } from '@emotion/css'

import { buttonSizes } from './button.config'
import styles from './styles.module.css'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'secondary' | 'primary' | 'tertiary'
  className?: string
  children?: ReactNode
  style?: CSSProperties
  size?: keyof typeof buttonSizes
}

const Button: FC<Props> = ({
  children,
  className = '',
  variant = 'primary',
  onClick,
  style,
  size = 'def',
  ...rest
}) => {
  const btnClass = cx(styles?.[variant] || '', className)
  const $size = buttonSizes[size] || {}

  return (
    <button className={css([btnClass, $size])} onClick={onClick} style={style} type="button" {...rest}>
      {children}
    </button>
  )
}

export default Button
