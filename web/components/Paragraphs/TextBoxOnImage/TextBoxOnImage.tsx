'use client';

import React from 'react';
import styles from './TextBoxOnImage.module.css';

export interface TextBoxOnImageProps {
  className?: string;
  date?: string;
  title?: string;
}

export function TextBoxOnImage({
  className,
  date = '18 - 24 April 2026',
  title = 'Japan Expedition through the Nakasendo Trail - The samurai way',
}: TextBoxOnImageProps) {
  return (
    <div
      data-name="Text box on image"
      data-node-id="2105:4881"
      className={`${styles.textBoxOnImage} ${className || ''}`}
    >
      <div
        data-name="Date"
        data-node-id="2105:4853"
        className={styles.date}
      >
        <p
          data-node-id="2105:4856"
          className={styles.dateText}
        >
          {date}
        </p>
        <p
          data-node-id="2105:4857"
          className={styles.title}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
