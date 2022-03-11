import { ReactNode, FC } from 'react';
import classNames from 'classnames';

import { Modal, Backdrop, Fade, Typography, Box } from '@mui/material';

import CloseIcon from 'components/icons/close';

import styles from './styles.module.css';

interface Props {
  open: boolean;
  title?: string | ReactNode;
  footer?: JSX.Element;
  children: ReactNode;
  onClose?: () => void;
  classNameBody?: string;
}

const style = {
  padding: '28px 32px 32px',
  boxShadow: '0px 6px 20px rgba(63, 108, 168, 0.15)',
  color: '#FFFFFF',
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: ' #1F1C29',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: 10,
};

const TransitionsModal: FC<Props> = ({ open, title, footer, children, onClose, classNameBody }) => (
  <Modal
    aria-labelledby="spring-modal-title"
    aria-describedby="spring-modal-description"
    open={open}
    onClose={onClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{ timeout: 500 }}
    disableAutoFocus
  >
    <Fade in={open}>
      <Box sx={style}>
        <div className={classNames(styles.modalBody, classNameBody, styles.animateBottom)}>
          <div className={`flex-space-between ${styles.modalHeader}`}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {title}
            </Typography>

            <button type="submit" onClick={onClose}>
              <CloseIcon />
            </button>
          </div>

          <div className={styles.modalContent}>{children}</div>
          <div className={`flex-space-between ${styles.modalFooter}`}>{footer}</div>
        </div>
      </Box>
    </Fade>
  </Modal>
);

export default TransitionsModal;
