'use client';

import React from 'react';
import styles from './LanguageButton.module.css';

export interface LanguageButtonProps {
  text?: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

// Simple flag icon placeholder
const FlagIcon: React.FC = () => (
  <div className={styles.flagIcon}>
    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="19" height="14" rx="1" fill="#BD0000" />
      <rect x="0" y="0" width="19" height="4.67" fill="#FFFFFF" />
      <rect x="0" y="9.33" width="19" height="4.67" fill="#FFFFFF" />
    </svg>
  </div>
);

export const LanguageButton: React.FC<LanguageButtonProps> = ({
  text = 'ENG | $',
  isActive = false,
  onClick,
  className = '',
}) => {
  const classes = [
    styles.languageButton,
    isActive ? styles.active : styles.inactive,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (isActive) {
    return (
      <div className={classes}>
        <FlagIcon />
        <span className={styles.text}>{text}</span>
      </div>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      <FlagIcon />
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default LanguageButton;
