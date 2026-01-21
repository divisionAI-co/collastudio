'use client';

import React from 'react';
import { DifficultyRating } from '../../Icon';
import styles from './SpecsTravel.module.css';

export interface SpecsTravelProps {
  days?: string;
  km?: string;
  showEasy?: boolean;
  className?: string;
}

export function SpecsTravel({
  days = '8 Days',
  km = '102 km ',
  showEasy = true,
  className,
}: SpecsTravelProps) {
  return (
    <div
      className={`${styles.specsTravel} ${className || ''}`}
      data-name="Specs Travel"
      data-node-id="2084:3977"
    >
      <div
        className={styles.difficulty}
        data-name="Difficulty"
        data-node-id="2084:3967"
      >
        <DifficultyRating
          difficulty="Easy"
          className={styles.difficultyRatingWrapper}
        />
        {showEasy && (
          <p
            data-node-id="2167:1760"
            className={styles.difficultyText}
          >
            Easy
          </p>
        )}
      </div>
      <div
        className={styles.duration}
        data-name="Duration"
        data-node-id="2084:3969"
      >
        <p
          data-node-id="2084:3970"
          className={styles.specText}
        >
          {days}
        </p>
      </div>
      <div
        className={styles.distance}
        data-name="Distance"
        data-node-id="2084:3971"
      >
        <p
          data-node-id="2084:3972"
          className={styles.specText}
        >
          {km}
        </p>
      </div>
    </div>
  );
}

export default SpecsTravel;
