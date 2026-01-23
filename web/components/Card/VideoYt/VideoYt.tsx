'use client';

import React from 'react';
import styles from './VideoYt.module.css';

// Figma image assets
const imgVisual = '/assets/Card/figma/VideoYt/imgVisual.png';

export interface VideoYtProps {
  videoTitle?: string;
  showTitle?: boolean;
  className?: string;
}

export function VideoYt({
  videoTitle = 'Come Scegliere la scarpa per il tuo cammino di Santiago e non solo',
  showTitle = true,
  className,
}: VideoYtProps) {
  return (
    <div
      className={`${styles.videoYt} ${className || ''}`}
      data-name="Video YT"
      data-node-id="2181:5285"
    >
      <div
        className={styles.visual}
        data-name="Visual"
        data-node-id="2181:4344"
      >
        <img
          alt=""
          className={styles.visualImage}
          src={imgVisual}
        />
      </div>
      {showTitle && (
        <div
          className={styles.title}
          data-name="Title"
          data-node-id="2181:4350"
        >
          <p
            className={styles.titleText}
            data-node-id="2181:4351"
          >
            {videoTitle}
          </p>
        </div>
      )}
    </div>
  );
}
