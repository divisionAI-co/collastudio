'use client';

import React from 'react';
import { Plus } from '../../Labels';
import styles from './CardTravelServiceClasses.module.css';

// Figma image assets
const imgCardTravelCardServiceClasses = '/assets/Card/figma/CardTravelServiceClasses/imgCardTravelCardServiceClasses.png';

export interface CardTravelServiceClassesProps {
  type?: string;
  title?: string;
  showPlus1?: boolean;
  showPlus2?: boolean;
  showPlus3?: boolean;
  showPlus4?: boolean;
  className?: string;
}

export function CardTravelServiceClasses({
  type = 'ESSENCE',
  title = 'The Portuguese Way: From Vigo to Santiago and back',
  showPlus1 = true,
  showPlus2 = true,
  showPlus3 = true,
  showPlus4 = true,
  className,
}: CardTravelServiceClassesProps) {
  return (
    <div
      className={`${styles.cardTravelServiceClasses} ${className || ''}`}
      data-name="Card travel/Card Service classes"
      data-node-id="2121:6044"
    >
      <div className={styles.imageOverlay} aria-hidden="true">
        <img
          alt=""
          className={styles.imageElement}
          src={imgCardTravelCardServiceClasses}
        />
        <div className={styles.darkOverlay} />
      </div>
      <div
        className={styles.topContainer}
        data-name="Container"
        data-node-id="2121:6018"
      >
        <div
          className={styles.titleContainer}
          data-name="Title"
          data-node-id="2121:6019"
        >
          <p className={styles.typeText} data-node-id="2121:6020">
            {type}
          </p>
          <p className={styles.titleText} data-node-id="2121:6021">
            {title}
          </p>
        </div>
      </div>
      <div
        className={styles.bottomContainer}
        data-name="Container"
        data-node-id="2121:6022"
      >
        {showPlus1 && (
          <Plus
            className={styles.plus}
            text="Private room "
          />
        )}
        {showPlus2 && (
          <Plus
            className={styles.plus}
            text="Private bathrom"
          />
        )}
        {showPlus3 && (
          <Plus
            className={styles.plus}
            text="Breakfast"
          />
        )}
        {showPlus4 && (
          <Plus
            className={styles.plus}
            text="Dinner included"
          />
        )}
      </div>
    </div>
  );
}

export default CardTravelServiceClasses;
