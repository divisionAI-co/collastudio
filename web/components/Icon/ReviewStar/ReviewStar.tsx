'use client';

import React from 'react';
import styles from './ReviewStar.module.css';

// Local icon assets
const imgReviewStarOn = '/assets/icons/figma/ReviewStar/imgReviewStarOn.svg';
const imgReviewStarOff = '/assets/icons/figma/ReviewStar/imgReviewStarOff.svg';

export interface ReviewStarProps {
  isFilled?: boolean;
  className?: string;
}

export const ReviewStar: React.FC<ReviewStarProps> = ({ isFilled = true, className = '' }) => {
  const classes = [styles.reviewStar, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.starWrapper}>
        <div className={styles.starContainer}>
          <img
            src={isFilled ? imgReviewStarOn : imgReviewStarOff}
            alt={isFilled ? 'Filled review star' : 'Outline review star'}
            className={styles.starImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewStar;
