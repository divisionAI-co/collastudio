'use client';

import React from 'react';
import styles from './Vector.module.css';

// Figma asset URL
const imgVector = 'https://www.figma.com/api/mcp/asset/2ee629ad-2b7c-473c-8118-ccb11a538fed';

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
