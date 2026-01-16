'use client';

import React from 'react';
import styles from './PrivateAreaMenuVoice.module.css';

export interface PrivateAreaMenuVoiceProps {
  label?: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

// Backpack icon placeholder
const BackpackIcon: React.FC = () => (
  <svg width="11.375" height="13" viewBox="0 0 11.375 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.6875 2.5C6.5 2.5 7.1875 3.1875 7.1875 4V5.5H4.1875V4C4.1875 3.1875 4.875 2.5 5.6875 2.5Z"
      fill="#2b2a26"
    />
    <path
      d="M2.1875 5.5V10.5C2.1875 11.1875 2.75 11.75 3.4375 11.75H7.9375C8.625 11.75 9.1875 11.1875 9.1875 10.5V5.5H2.1875Z"
      fill="#2b2a26"
    />
  </svg>
);

export const PrivateAreaMenuVoice: React.FC<PrivateAreaMenuVoiceProps> = ({
  label = 'Tommasocarapelli',
  isActive = false,
  onClick,
  className = '',
}) => {
  const classes = [
    styles.privateAreaMenuVoice,
    isActive ? styles.active : styles.inactive,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} onClick={onClick}>
      <span className={styles.icon}>
        <BackpackIcon />
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default PrivateAreaMenuVoice;
