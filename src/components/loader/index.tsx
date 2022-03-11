import { FC, HTMLAttributes, CSSProperties } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

interface Props extends HTMLAttributes<HTMLElement> {
  className?: string;
  classNameWrapper?: CSSProperties;
}

const Loader: FC<Props> = ({ classNameWrapper, className }) => (
  <div className={classNames(styles.wrapper, classNameWrapper)}>
    <div className={classNames(styles.circle, className)}>
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30.5" stroke="url(#paint0_angular_108_3846)" strokeWidth="3" />
        <defs>
          <radialGradient
            id="paint0_angular"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(32 32) rotate(90) scale(32)"
          >
            <stop stopColor="white" stopOpacity="0.9" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
);

export default Loader;
