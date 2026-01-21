'use client';

import React from 'react';
import styles from './ReviewScore.module.css';

// Local icon asset
const imgStar = '/assets/icons/figma/ServiceIcon/Star.svg';

export interface ReviewScoreProps {
  score?: string;
  reviews?: string;
  className?: string;
}

export function ReviewScore({
  score = '4.8',
  reviews = '489',
  className,
}: ReviewScoreProps) {
  return (
    <div
      data-name="Review score"
      data-node-id="2008:949"
      className={`${styles.reviewScore} ${className || ''}`}
    >
      <div
        data-name="Reviews"
        data-node-id="2008:907"
        className={styles.reviews}
      >
        <p
          data-node-id="2008:908"
          className={styles.score}
        >
          {score}
        </p>
        <p
          data-node-id="2008:909"
          className={styles.reviewsText}
        >
          <span className={styles.outOf}>out of </span>
          <span className={styles.reviewsCount}>{reviews} reviews </span>
        </p>
      </div>
      <div
        data-node-id="2008:903"
        className={styles.starsContainer}
      >
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            data-name="Service icon/Star"
            data-node-id={`2008:${930 + (index - 1) * 3}`}
            className={styles.star}
          >
            <div
              data-name="Icon lable"
              data-node-id={`I2008:${930 + (index - 1) * 3};2419:28948`}
              className={styles.iconLabel}
            >
              <img
                alt=""
                className={styles.starImage}
                src={imgStar}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewScore;
