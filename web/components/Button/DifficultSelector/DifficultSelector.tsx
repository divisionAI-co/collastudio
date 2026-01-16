'use client';

import React from 'react';
import styles from './DifficultSelector.module.css';

export type Difficulty = 'Easy' | 'Mild' | 'Hard';

export interface DifficultSelectorProps {
  selected?: Difficulty;
  showStars?: boolean;
  onSelect?: (difficulty: Difficulty) => void;
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

const StarRating: React.FC<{ count: number }> = ({ count }) => (
  <div className={styles.starRating}>
    {[1, 2, 3].map((i) => (
      <StarIcon key={i} filled={i <= count} />
    ))}
  </div>
);

export const DifficultSelector: React.FC<DifficultSelectorProps> = ({
  selected = 'Easy',
  showStars = true,
  onSelect,
  className = '',
}) => {
  const difficulties: Difficulty[] = ['Easy', 'Mild', 'Hard'];

  const handleClick = (difficulty: Difficulty) => {
    if (difficulty !== selected) {
      onSelect?.(difficulty);
    }
  };

  const classes = [styles.difficultSelector, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {difficulties.map((difficulty, index) => {
        const isSelected = difficulty === selected;
        const isFirst = index === 0;
        const isLast = index === difficulties.length - 1;

        return (
          <button
            key={difficulty}
            className={`${styles.difficultyButton} ${isSelected ? styles.selected : styles.unselected} ${
              isFirst ? styles.first : ''
            } ${isLast ? styles.last : ''}`}
            onClick={() => handleClick(difficulty)}
          >
            {showStars && (
              <StarRating
                count={difficulty === 'Easy' ? 1 : difficulty === 'Mild' ? 2 : 3}
              />
            )}
            <span className={styles.label}>{difficulty}</span>
          </button>
        );
      })}
    </div>
  );
};

export default DifficultSelector;
