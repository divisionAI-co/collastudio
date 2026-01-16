'use client';

import React from 'react';
import styles from './MenuVoice.module.css';

export type MenuVoiceState = 'Off' | 'Over' | 'On';

export interface MenuVoiceProps {
  labelText?: string;
  showIcon?: boolean;
  state?: MenuVoiceState;
  onClick?: () => void;
  className?: string;
}

// External link icon component
const ExternalLinkIcon: React.FC = () => (
  <svg width="8.138" height="8.125" viewBox="0 0 8.138 8.125" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.138 0.125H4.138C3.862 0.125 3.638 0.349 3.638 0.625C3.638 0.901 3.862 1.125 4.138 1.125H6.033L2.966 4.192C2.773 4.385 2.773 4.701 2.966 4.894C3.159 5.087 3.475 5.087 3.668 4.894L6.735 1.827V3.722C6.735 3.998 6.959 4.222 7.235 4.222C7.511 4.222 7.735 3.998 7.735 3.722V0.722C7.735 0.349 7.511 0.125 7.138 0.125Z"
      fill="#f7fdfb"
    />
    <path
      d="M1.138 1.125C0.862 1.125 0.638 1.349 0.638 1.625V7.125C0.638 7.401 0.862 7.625 1.138 7.625H6.638C6.914 7.625 7.138 7.401 7.138 7.125C7.138 6.849 6.914 6.625 6.638 6.625H1.638V1.625C1.638 1.349 1.414 1.125 1.138 1.125Z"
      fill="#f7fdfb"
    />
  </svg>
);

export const MenuVoice: React.FC<MenuVoiceProps> = ({
  labelText = 'DESTINATION',
  showIcon = true,
  state = 'Off',
  onClick,
  className = '',
}) => {
  const baseClass = styles.menuVoice;
  const stateClass = styles[`state${state}`];
  const classes = [baseClass, stateClass, className].filter(Boolean).join(' ');

  if (state === 'Off') {
    return (
      <div className={classes}>
        <span className={styles.label}>{labelText}</span>
        {showIcon && (
          <span className={styles.icon}>
            <ExternalLinkIcon />
          </span>
        )}
      </div>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      <span className={styles.label}>{labelText}</span>
      {showIcon && (
        <span className={styles.icon}>
          <ExternalLinkIcon />
        </span>
      )}
    </button>
  );
};

export default MenuVoice;
