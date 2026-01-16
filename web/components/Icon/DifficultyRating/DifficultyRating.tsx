'use client';

import React from 'react';
import styles from './DifficultyRating.module.css';

// Figma asset URLs (valid for 7 days)
const imgStarFilled = 'https://www.figma.com/api/mcp/asset/2437c246-4129-477a-a1cb-dded2c8e5ca4';
const imgStarEmpty = 'https://www.figma.com/api/mcp/asset/4cb733dc-79a6-446f-a0bc-ed2db5ed7999';
const imgStarEasy = 'https://www.figma.com/api/mcp/asset/2982537b-d43f-4c25-a0f1-ab655a94ef07';
const imgStarEasyEmpty = 'https://www.figma.com/api/mcp/asset/b3605a4f-657a-4224-9c69-f324bcd7b148';

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
