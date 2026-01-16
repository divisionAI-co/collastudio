'use client';

import React from 'react';
import styles from './Star.module.css';

// Local icon assets
const imgStarBig = '/assets/icons/figma/Star/imgStarBig.svg';
const imgStarVariant2 = '/assets/icons/figma/Star/imgStarVariant2.svg';

export type StarSize = 'big' | 'Variant2';

export interface StarProps {
  size?: StarSize;
  className?: string;
}

export const Star: React.FC<StarProps> = ({ size = 'big', className = '' }) => {
  const classes = [styles.star, styles[`size${size}`], className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <img
        src={size === 'big' ? imgStarBig : imgStarVariant2}
        alt={size === 'big' ? 'Big star' : 'Small star'}
        className={styles.starImage}
      />
    </div>
  );
};

export default Star;
