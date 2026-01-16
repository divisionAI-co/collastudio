'use client';

import React from 'react';
import styles from './FatMenuVoice.module.css';

export interface FatMenuVoiceProps {
  number?: string;
  label?: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const FatMenuVoice: React.FC<FatMenuVoiceProps> = ({
  number = '(13)',
  label = 'Easy',
  isActive = false,
  onClick,
  className = '',
}) => {
  const classes = [
    styles.fatMenuVoice,
    isActive ? styles.active : styles.inactive,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} onClick={onClick}>
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <span className={styles.number}>{number}</span>
      </div>
      {isActive && <div className={styles.underline} />}
    </button>
  );
};

export default FatMenuVoice;
