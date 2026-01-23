'use client';

import React from 'react';
import styles from './CardImage.module.css';

// Figma image asset
const imgCardImage = '/assets/Card/figma/CardImage/imgCardImage.png';

export interface CardImageProps {
  className?: string;
}

export function CardImage({ className }: CardImageProps) {
  return (
    <div
      className={`${styles.cardImage} ${className || ''}`}
      data-name="Card image"
      data-node-id="2084:4072"
    >
      <div className={styles.imageOverlay} aria-hidden="true">
        <img alt="" className={styles.imageElement} src={imgCardImage} />
        <div className={styles.gradientOverlay} />
      </div>
    </div>
  );
}

export default CardImage;
