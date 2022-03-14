import { useSwitch, UseSwitchProps } from '@mui/base/SwitchUnstyled'
import { cx } from '@emotion/css'

import styles from './styles.module.css'

function MUISwitch(props: UseSwitchProps): JSX.Element {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props)

  const stateClasses = {
    checked,
    disabled,
    focusVisible,
  }

  return (
    <span className={cx(styles.switchRoot, stateClasses)}>
      <span>
        <span className={cx(styles.switchThumb, stateClasses)} />
      </span>
      <input {...getInputProps()} aria-label="Demo switch" />
    </span>
  )
}

export default function UseSwitchesCustom(): JSX.Element {
  return <MUISwitch defaultChecked />
}
