'use client';

import React from 'react';
import styles from './Livello.module.css';

// Local asset paths for different Livello variants
const imgLivello1 = '/assets/BackgroundGraphics/figma/Livello/imgLivello1.svg';
const imgLivello2 = '/assets/BackgroundGraphics/figma/Livello/imgLivello2.svg';
const imgLivello3 = '/assets/BackgroundGraphics/figma/Livello/imgLivello3.svg';

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
