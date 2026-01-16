'use client';

import React from 'react';
import styles from './UnderlinedLink.module.css';

export interface UnderlinedLinkProps {
  text?: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const UnderlinedLink: React.FC<UnderlinedLinkProps> = ({
  text = 'CAI Partnership',
  isActive = true,
  onClick,
  className = '',
}) => {
  const classes = [
    styles.underlinedLink,
    isActive ? styles.active : styles.inactive,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} onClick={onClick}>
      <span className={styles.text}>{text}</span>
      <div className={styles.underline} />
    </button>
  );
};

export default UnderlinedLink;
