'use client';

import React from 'react';
import styles from './FilterButton.module.css';

export type FilterState = 'Off' | 'On' | 'Disabled';

export interface FilterButtonProps {
  label?: string;
  showIcon?: boolean;
  state?: FilterState;
  onClick?: () => void;
  className?: string;
}

// Star icon component
const StarIcon: React.FC<{ filled?: boolean }> = ({ filled = false }) => (
  <svg width="6.462" height="7" viewBox="0 0 6.462 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.231 0L4.001 2.5L6.462 2.5L4.616 4.083L5.386 6.583L3.231 5L1.076 6.583L1.846 4.083L0 2.5L2.461 2.5L3.231 0Z"
      fill={filled ? '#2b2a26' : '#262622'}
    />
  </svg>
);

const StarRating: React.FC = () => (
  <div className={styles.starRating}>
    <StarIcon filled />
    <StarIcon filled={false} />
    <StarIcon filled={false} />
  </div>
);

export const FilterButton: React.FC<FilterButtonProps> = ({
  label = 'Easy',
  showIcon = true,
  state = 'On',
  onClick,
  className = '',
}) => {
  const classes = [
    styles.filterButton,
    styles[`state${state}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={state === 'Disabled'}
    >
      {showIcon && <StarRating />}
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default FilterButton;
