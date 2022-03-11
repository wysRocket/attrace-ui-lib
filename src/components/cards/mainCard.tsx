import { ReactNode, forwardRef, HTMLAttributes, CSSProperties, ReactChild } from 'react'

import { Card, CardContent, CardHeader } from '@mui/material'

import Button from 'components/button'

interface Props extends HTMLAttributes<HTMLElement> {
  headerElement?: ReactChild | undefined
  elevation?: number
  buttonText?: string
  children?: ReactNode | boolean
  classes?: CSSProperties
}

export type Ref = HTMLDivElement

const MainCard = forwardRef<Ref, Props>(
  ({ classes = {}, elevation, children, buttonText, headerElement, ...rest }, Ref) => (
    <Card elevation={elevation || 0} ref={Ref} {...rest} classes={classes}>
      {/* card header  */}

      {headerElement && (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <CardHeader component={headerElement} />
      )}

      {/* card content */}
      {children && <CardContent>{children}</CardContent>}

      {/* card footer and action  */}
      {buttonText && <Button variant="tertiary">{buttonText}</Button>}
    </Card>
  )
)

MainCard.displayName = 'MainCard'

export default MainCard
