'use client';

import React from 'react';
import styles from './ValueCard.module.css';

// Figma image assets
const img = '/assets/Card/figma/ValueCard/img.png';
const img1 = '/assets/Card/figma/ValueCard/img1.png';
const img2 = '/assets/Card/figma/ValueCard/img2.png';
const img3 = '/assets/Card/figma/ValueCard/img3.png';

export interface ValueCardProps {
  headline?: string;
  body?: string;
  status?: boolean;
  className?: string;
}

export function ValueCard({
  headline = 'Modern life obsesses over shortcuts; we choose the curve',
  body = 'We value the winding path over the efficient route, because we know that nature and personal growth does not move in straight lines. We celebrate the detour, for that is often where the most transformative moments are found.',
  status = true,
  className,
}: ValueCardProps) {
  const isNotStatus = !status;
  const isStatus = status;

  return (
    <div
      id={isStatus ? 'node-2615_39509' : isNotStatus ? 'node-2615_39574' : ''}
      className={`${styles.valueCard} ${isStatus ? styles.valueCardOn : styles.valueCardOff} ${className || ''}`}
    >
      <div
        id={isStatus ? 'node-2615_39569' : isNotStatus ? 'node-2615_39575' : ''}
        className={`${styles.visual} ${isStatus ? styles.visualOn : styles.visualOff}`}
        data-name="Visual"
      >
        <img
          className={styles.imageElement}
          alt=""
          src={isStatus ? img : isNotStatus ? img1 : ''}
        />
        <div
          id={isStatus ? 'node-2615_39778' : isNotStatus ? 'node-2615_39768' : ''}
          className={`${styles.colorBg} ${isStatus ? styles.colorBgHidden : ''}`}
          data-name="Color bg"
        />
        <img
          className={styles.imageOverlay}
          alt=""
          src={isStatus ? img2 : isNotStatus ? img3 : ''}
        />
      </div>
      <div
        id={isStatus ? 'node-2615_39510' : isNotStatus ? 'node-2615_39576' : ''}
        className={`${styles.valueContent} ${isStatus ? styles.valueContentOn : styles.valueContentOff}`}
        data-name="Value content"
      >
        {isStatus && (
          <>
            <p className={styles.headline} data-node-id="2615:39515">
              {headline}
            </p>
            <p className={styles.body} data-node-id="2615:39571">
              {body}
            </p>
          </>
        )}
        {isNotStatus && (
          <>
            <p className={`${styles.headline} ${styles.hidden}`} data-node-id="2615:39577">
              {headline}
            </p>
            <p className={`${styles.body} ${styles.hidden}`} data-node-id="2615:39578">
              {body}
            </p>
          </>
        )}
      </div>
      {isNotStatus && (
        <img
          className={styles.fallbackImage}
          alt=""
          src={img}
        />
      )}
    </div>
  );
}

export default ValueCard;
