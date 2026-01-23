'use client';

import React from 'react';
import { SpecsTravel } from '../../Labels';
import { ServiceIcon } from '../../Icon';
import styles from './CardTravel.module.css';

// Figma image assets
const imgIconLable1 = '/assets/Card/figma/CardTravel/imgIconLable1.jpg';
const img = '/assets/Card/figma/CardTravel/img.svg';

export interface CardTravelProps {
  title?: string;
  destination?: string;
  price?: string;
  property1?: boolean;
  className?: string;
}

export function CardTravel({
  title = 'The Portuguese Way: From Vigo to Santiago and back',
  destination = 'ST.JAMES WAY ',
  price = '515',
  property1 = true,
  className,
}: CardTravelProps) {
  const isNotProperty1 = !property1;
  const isProperty1 = property1;

  return (
    <div
      id={isNotProperty1 ? 'node-2084_4132' : isProperty1 ? 'node-2084_4393' : ''}
      className={`${styles.cardTravel} ${className || ''}`}
    >
      <div
        id={isNotProperty1 ? 'node-2084_4133' : isProperty1 ? 'node-2084_4394' : ''}
        className={`${styles.image} ${isNotProperty1 ? styles.imageBlurOff : ''}`}
        data-name="Image"
      >
        <div className={styles.imageOverlay} aria-hidden="true">
          <img className={styles.imageElement} alt="" src={imgIconLable1} />
          <div className={styles.gradientOverlay} />
        </div>
      </div>
      <div
        id={isNotProperty1 ? 'node-2084_4134' : isProperty1 ? 'node-2084_4395' : ''}
        className={styles.topContainer}
        data-name="Container"
      >
        {isNotProperty1 && (
          <SpecsTravel
            days="8 Days"
            km="102 km"
            showEasy={false}
            className={styles.specsTravel}
            variant="dark"
          />
        )}
        {isProperty1 && (
          <SpecsTravel
            days="8 Days"
            km="102 km"
            showEasy={false}
            className={styles.specsTravel}
          />
        )}
      </div>
      <div
        id={isNotProperty1 ? 'node-2084_4342' : isProperty1 ? 'node-2084_4397' : ''}
        className={styles.bottomContainer}
        data-name="Container"
      >
        <div
          id={isNotProperty1 ? 'node-2084_4354' : isProperty1 ? 'node-2084_4398' : ''}
          className={styles.title}
          data-name="Title"
        >
          <div
            id={isNotProperty1 ? 'node-2580_36558' : isProperty1 ? 'node-2580_36557' : ''}
            className={styles.destinationBadge}
          >
            <p
              className={styles.destinationText}
              data-node-id="2084:4355"
            >
              {destination}
            </p>
          </div>
          <p
            className={styles.titleText}
            data-node-id="2084:4356"
          >
            {title}
          </p>
        </div>
        <div
          id={isNotProperty1 ? 'node-2084_4357' : isProperty1 ? 'node-2084_4401' : ''}
          className={`${styles.priceContainer} ${isNotProperty1 ? styles.priceContainerOff : styles.priceContainerOn}`}
          data-name="Container"
        >
          {isNotProperty1 && (
            <div
              data-node-id="2084:4358"
              className={`${styles.favoriteIcon} ${styles.favoriteIconOff}`}
              data-name="Animation/Favorite icon"
            >
              <ServiceIcon type="HeartOff" size={17} />
            </div>
          )}
          {isProperty1 && (
            <div
              data-node-id="2084:4402"
              className={styles.favoriteIcon}
              data-name="Animation/Favorite icon"
            >
              <ServiceIcon type="HeartOff" size={17} />
            </div>
          )}
          <div
            id={isNotProperty1 ? 'node-2084_4359' : isProperty1 ? 'node-2084_4403' : ''}
            className={`${styles.pricing} ${isNotProperty1 ? styles.pricingOff : styles.pricingOn}`}
            data-name="Container"
          >
            <p
              id={isNotProperty1 ? 'node-2084_4360' : isProperty1 ? 'node-2084_4404' : ''}
              className={styles.startingFrom}
            >
              Starting from
            </p>
            <div
              id={isNotProperty1 ? 'node-2084_4361' : isProperty1 ? 'node-2084_4405' : ''}
              className={styles.price}
              data-name="Pricing"
            >
              <p className={styles.priceAmount} data-node-id="2084:4362">
                {price}
              </p>
              <p
                id={isNotProperty1 ? 'node-2084_4363' : isProperty1 ? 'node-2084_4407' : ''}
                className={styles.priceCurrency}
              >
                €
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTravel;
