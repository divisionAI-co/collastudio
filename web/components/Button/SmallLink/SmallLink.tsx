'use client';

import React from 'react';
import styles from './SmallLink.module.css';

export interface SmallLinkProps {
  text?: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const SmallLink: React.FC<SmallLinkProps> = ({
  text = 'CAI Partnership',
  isActive = true,
  onClick,
  className = '',
}) => {
  const classes = [
    styles.smallLink,
    isActive ? styles.active : styles.inactive,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} onClick={onClick}>
      <span className={styles.text}>{text}</span>
      {!isActive && <div className={styles.underline} />}
    </button>
  );
};

export default SmallLink;
