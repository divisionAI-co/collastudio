'use client';

import React from 'react';
import styles from './Livello.module.css';

// Figma asset URLs for different Livello variants
const imgLivello1 = 'https://www.figma.com/api/mcp/asset/0ba534b4-0666-4530-87bf-a77d7afcd742';
const imgLivello2 = 'https://www.figma.com/api/mcp/asset/8ec6b766-acc9-4d6f-a971-fff568192b3e';
const imgLivello3 = 'https://www.figma.com/api/mcp/asset/5f402ef0-5b9d-41d5-874f-fce36d8e680b';

export type LivelloVariant = '1' | '2' | '3';

export interface LivelloProps {
  variant?: LivelloVariant;
  className?: string;
}

export const Livello: React.FC<LivelloProps> = ({ 
  variant = '1',
  className = '' 
}) => {
  const classes = [styles.livello, className].filter(Boolean).join(' ');

  const getImageSrc = (): string => {
    switch (variant) {
      case '1':
        return imgLivello1;
      case '2':
        return imgLivello2;
      case '3':
        return imgLivello3;
      default:
        return imgLivello1;
    }
  };

  return (
    <div className={classes}>
      <img 
        className={styles.image} 
        alt={`Livello ${variant}`} 
        src={getImageSrc()} 
      />
    </div>
  );
};

export default Livello;
