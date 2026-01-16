'use client';

import React from 'react';
import styles from './ReviewStar.module.css';

// Figma asset URLs (valid for 7 days)
const imgReviewStarOn = 'https://www.figma.com/api/mcp/asset/bef1d434-45e1-4493-b1b8-7c3763455267';
const imgReviewStarOff = 'https://www.figma.com/api/mcp/asset/04521057-1d43-48d3-b559-4e9e74993df1';

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
