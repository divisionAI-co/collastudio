'use client';

import React from 'react';
import styles from './Vector.module.css';

// Local asset path
const imgVector = '/assets/BackgroundGraphics/figma/Vector/imgVector.svg';

export interface VectorProps {
  className?: string;
}

export const Vector: React.FC<VectorProps> = ({ 
  className = '' 
}) => {
  const classes = [styles.vector, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.vectorInner}>
        <img 
          className={styles.image} 
          alt="" 
          src={imgVector} 
        />
      </div>
    </div>
  );
};

export default Vector;
