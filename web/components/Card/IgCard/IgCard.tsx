'use client';

import React from 'react';
import styles from './IgCard.module.css';

// Figma image assets
const img = '/assets/Card/figma/IgCard/img.jpg';
const img1 = '/assets/Card/figma/IgCard/img1.jpg';

export interface IgCardProps {
  copy?: string;
  typology?: 'Reel' | 'Post';
  className?: string;
}

export function IgCard({
  copy = 'Ieri 17 Aprile abbiamo ritirato, a Santiago de Compostela, il premio 🏅 "Calidad Turistica" che ci certifica come Tour Operator che offre servizi di qualità in Spagna.',
  typology = 'Post',
  className,
}: IgCardProps) {
  const isPost = typology === 'Post';
  const isReel = typology === 'Reel';

  return (
    <div
      id={isPost ? 'node-2631_6638' : isReel ? 'node-2631_6640' : ''}
      className={`${styles.igCard} ${className || ''}`}
    >
      <div
        id={isPost ? 'node-2619_42067' : isReel ? 'node-2631_6641' : ''}
        className={`${styles.visual} ${isPost ? styles.visualPost : styles.visualReel}`}
        data-name="Visual"
      >
        <img
          className={styles.imageElement}
          alt=""
          src={isPost ? img : isReel ? img1 : ''}
        />
      </div>
      <div
        id={isPost ? 'node-2619_42068' : isReel ? 'node-2631_6642' : ''}
        className={styles.title}
        data-name="Title"
      >
        <p className={styles.copyText} data-node-id="2619:42069">
          {copy}
        </p>
      </div>
    </div>
  );
}

export default IgCard;
