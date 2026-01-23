'use client';

import React from 'react';
import styles from './DestinationCard.module.css';

// Figma image asset
const img = '/assets/Card/figma/DestinationCard/img.png';

export interface DestinationCardProps {
  text?: string;
  number?: string;
  property1?: boolean;
  className?: string;
}

export function DestinationCard({
  text = 'Ireland',
  number = '6',
  property1 = false,
  className,
}: DestinationCardProps) {
  const isNotProperty1 = !property1;
  const isProperty1 = property1;

  return (
    <div
      id={isNotProperty1 ? 'node-2014_613' : isProperty1 ? 'node-2014_612' : ''}
      className={`${styles.destinationCard} ${className || ''}`}
      data-name="Destination card"
    >
      <div
        id={isNotProperty1 ? 'node-2014_577' : isProperty1 ? 'node-2014_601' : ''}
        className={`${styles.image} ${isNotProperty1 ? styles.imageOff : styles.imageOn}`}
        data-name="Image"
      >
        <div className={styles.imageOverlay} aria-hidden="true">
          <img className={styles.imageElement} alt="" src={img} />
          <div className={styles.gradientOverlay} />
        </div>
      </div>
      <div
        id={isNotProperty1 ? 'node-2014_578' : isProperty1 ? 'node-2014_602' : ''}
        className={`${styles.destinationInfoContainer} ${isProperty1 ? styles.destinationInfoContainerOn : ''}`}
        data-name="Destination Info Container"
      >
        <div
          id={isNotProperty1 ? 'node-2014_579' : isProperty1 ? 'node-2014_603' : ''}
          className={styles.destinationNameContainer}
          data-name="Destination Name Container"
        >
          <div className={styles.starWrapper}>
            <div className={styles.starWrapperInner}>
              <div
                id={isNotProperty1 ? 'node-2014_580' : isProperty1 ? 'node-2014_604' : ''}
                className={styles.star}
                data-name="Star"
              />
            </div>
          </div>
          <p
            className={styles.destinationText}
            data-node-id="2014:581"
          >
            {text}
          </p>
          <div className={styles.starWrapper}>
            <div className={styles.starWrapperInner}>
              <div
                id={isNotProperty1 ? 'node-2014_582' : isProperty1 ? 'node-2014_606' : ''}
                className={styles.star}
                data-name="Star"
              />
            </div>
          </div>
        </div>
        {isProperty1 && (
          <div
            data-node-id="2014:607"
            className={styles.trailInfo}
            data-name="Trail Info"
          >
            <p className={styles.trailNumber} data-node-id="2014:608">
              {number}
            </p>
            <p className={styles.trailLabel} data-node-id="2014:609">
              TRAILS
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DestinationCard;
