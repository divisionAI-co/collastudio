'use client';

import React from 'react';
import styles from './Frame.module.css';

// Local asset path from Illustration Freedom variant
const imgIllustration = '/assets/BackgroundGraphics/figma/Illustration/imgLivello2.svg';

export interface FrameProps {
  className?: string;
  title?: string;
  body?: string;
}

export function Frame({
  className,
  title = 'Proved itineraries',
  body = "We've walked every trail we offer. Choose from our tested routes or let us tailor one just for you, a unique journey, shaped around your interests and experience level",
}: FrameProps) {
  return (
    <div
      data-node-id="2145:10697"
      className={`${styles.frame} ${className || ''}`}
    >
      <div
        data-name="Illustration"
        data-node-id="2151:12178"
        className={styles.illustration}
      >
        <div
          data-name="Livello 2"
          data-node-id="I2151:12178;2151:12015"
          className={styles.livello2}
        >
          <div className={styles.livello2Inner}>
            <img
              alt=""
              className={styles.illustrationImage}
              src={imgIllustration}
            />
          </div>
        </div>
      </div>
      <div
        data-name="Title + paragraph"
        data-node-id="2145:10693"
        className={styles.content}
      >
        <p
          data-node-id="2145:10694"
          className={styles.title}
        >
          {title}
        </p>
        <p
          data-node-id="2145:10695"
          className={styles.body}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
