import { ReactNode, FC, useCallback } from 'react'
import { cx } from '@emotion/css'

import { Modal as MuiModal, Backdrop, Fade, Typography, Box } from '@mui/material'

import { CloseIcon } from 'components/icons'

import styles from './styles.module.css'

interface Props {
  open: boolean
  title?: string | ReactNode
  footer?: JSX.Element
  children: ReactNode
  onClose?: () => void
  classNameBody?: string
  hideClose?: boolean
}

const boxStyle = {
  padding: '28px 32px 32px',
  boxShadow: 'none',
  color: '#FFFFFF',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#1F1C29',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '10px',
}

const Modal: FC<Props> = ({ open, title, footer, children, onClose, hideClose = false, classNameBody }) => {
  const handleClose = useCallback(
    () => (!hideClose && typeof onClose === 'function' ? onClose() : false),
    [hideClose, onClose]
  )

  return (
    <MuiModal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        sx: {
          background: 'rgba(11, 9, 16, 0.85)',
          backdropFilter: 'blur(8px)',
        },
      }}
      disableAutoFocus
      className={styles.modal}
    >
      <Fade in={open}>
        <Box sx={boxStyle} className={styles.box}>
          <div className={cx(styles.modalBody, classNameBody, styles.animateBottom)}>
            <div className={`flex-space-between ${styles.modalHeader}`}>
              <Typography id="transition-modal-title" variant="h6" component="h2" className={styles.modalTitle}>
                {title}
              </Typography>

              {!hideClose && (
                <button type="submit" onClick={onClose}>
                  <CloseIcon />
                </button>
              )}
            </div>

            <div className={styles.modalContent}>{children}</div>
            <div className={`flex-space-between ${styles.modalFooter}`}>{footer}</div>
          </div>
        </Box>
      </Fade>
    </MuiModal>
  )
}

export default Modal
