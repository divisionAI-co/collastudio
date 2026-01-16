'use client';

import React from 'react';
import styles from './RoundedCTA.module.css';

export type RoundedCTASize = 'Big' | 'Mid';
export type RoundedCTAColor = 'Black' | 'White';

export interface RoundedCTAProps {
  icon?: React.ReactNode | null;
  size?: RoundedCTASize;
  color?: RoundedCTAColor;
  onClick?: () => void;
  className?: string;
}

// Chevron right icon component
const ChevronRightIcon: React.FC<{ color?: string }> = ({ color = '#f7fdfb' }) => (
  <svg width="5.881" height="10.925" viewBox="0 0 5.881 10.925" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.176 0.176L5.705 5.463L1.176 10.749"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RoundedCTA: React.FC<RoundedCTAProps> = ({
  icon = null,
  size = 'Big',
  color = 'Black',
  onClick,
  className = '',
}) => {
  const classes = [
    styles.roundedCTA,
    styles[`size${size}`],
    styles[`color${color}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const iconColor = color === 'Black' ? '#2b2a26' : '#f7fdfb';

  return (
    <button className={classes} onClick={onClick}>
      {icon || <ChevronRightIcon color={iconColor} />}
    </button>
  );
};

export default RoundedCTA;
