'use client';

import React from 'react';
import styles from './DifficultyRating.module.css';

// Local icon assets
const imgStarFilled = '/assets/icons/figma/DifficultyRating/imgStarFilled.svg';
const imgStarEmpty = '/assets/icons/figma/DifficultyRating/imgStarEmpty.svg';
const imgStarEasy = '/assets/icons/figma/DifficultyRating/imgStarEasy.svg';
const imgStarEasyEmpty = '/assets/icons/figma/DifficultyRating/imgStarEasyEmpty.svg';

export type Difficulty = 'Easy' | 'Mid' | 'Hard';

export interface DifficultyRatingProps {
  difficulty?: Difficulty;
  className?: string;
}

export const DifficultyRating: React.FC<DifficultyRatingProps> = ({
  difficulty = 'Hard',
  className = '',
}) => {
  const classes = [styles.difficultyRating, className].filter(Boolean).join(' ');

  const renderStars = () => {
    switch (difficulty) {
      case 'Hard':
        return (
          <>
            <div className={styles.star}>
              <img src={imgStarFilled} alt="Filled star" className={styles.starImage} />
            </div>
            <div className={styles.star}>
              <img src={imgStarFilled} alt="Filled star" className={styles.starImage} />
            </div>
            <div className={styles.star}>
              <img src={imgStarFilled} alt="Filled star" className={styles.starImage} />
            </div>
          </>
        );
      case 'Mid':
        return (
          <>
            <div className={styles.star}>
              <img src={imgStarFilled} alt="Filled star" className={styles.starImage} />
            </div>
            <div className={styles.star}>
              <img src={imgStarFilled} alt="Filled star" className={styles.starImage} />
            </div>
            <div className={styles.star}>
              <div className={styles.starEmpty}>
                <img src={imgStarEmpty} alt="Empty star" className={styles.starImage} />
              </div>
            </div>
          </>
        );
      case 'Easy':
        return (
          <>
            <div className={styles.star}>
              <img src={imgStarEasy} alt="Filled star" className={styles.starImage} />
            </div>
            <div className={styles.star}>
              <div className={styles.starEmpty}>
                <img src={imgStarEasyEmpty} alt="Empty star" className={styles.starImage} />
              </div>
            </div>
            <div className={styles.star}>
              <div className={styles.starEmpty}>
                <img src={imgStarEasyEmpty} alt="Empty star" className={styles.starImage} />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return <div className={classes}>{renderStars()}</div>;
};

export default DifficultyRating;
