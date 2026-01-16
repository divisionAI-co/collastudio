'use client';

import React from 'react';
import styles from './Star.module.css';

// Figma asset URLs (valid for 7 days)
const imgStarBig = 'https://www.figma.com/api/mcp/asset/542557a8-0299-404d-a1a2-14bf035dbc22';
const imgStarVariant2 = 'https://www.figma.com/api/mcp/asset/3f748347-bbc8-41ab-8c77-c7e84d47556e';

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
