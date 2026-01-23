'use client';

import React from 'react';
import { ServiceIcon } from '../../Icon';
import styles from './CardGiftCard.module.css';

// Figma image assets
const imgBagShopping1 = '/assets/Card/figma/CardGiftCard/imgBagShopping1.jpg';
const img = '/assets/Card/figma/CardGiftCard/img.svg';

export interface CardGiftCardProps {
  title?: string;
  body?: string;
  status?: boolean;
  className?: string;
}

export function CardGiftCard({
  title = '200€ Gift Card',
  body = 'Best for someone who keeps saying "I\'ll go next year."',
  status = true,
  className,
}: CardGiftCardProps) {
  const isNotStatus = !status;
  const isStatus = status;

  return (
    <div
      id={isNotStatus ? 'node-2784_77245' : isStatus ? 'node-2784_77261' : ''}
      className={`${styles.cardGiftCard} ${className || ''}`}
    >
      <div
        id={isNotStatus ? 'node-2784_77246' : isStatus ? 'node-2784_77262' : ''}
        className={`${styles.image} ${isNotStatus ? styles.imageOff : styles.imageOn}`}
        data-name="Image"
      >
        <div className={styles.imageOverlay} aria-hidden="true">
          <img className={styles.imageElement} alt="" src={imgBagShopping1} />
          <div className={styles.gradientOverlay} />
        </div>
      </div>
      <div
        id={isNotStatus ? 'node-2784_77249' : isStatus ? 'node-2784_77265' : ''}
        className={styles.container}
        data-name="Container"
      >
        <div
          id={isNotStatus ? 'node-2784_77250' : isStatus ? 'node-2784_77266' : ''}
          className={styles.title}
          data-name="Title"
        >
          {isNotStatus && (
            <p className={styles.titleTextUnderline} data-node-id="2784:77253">
              {title}
            </p>
          )}
          {isStatus && (
            <p className={styles.titleText} data-node-id="2784:77269">
              {title}
            </p>
          )}
          <p className={styles.bodyText} data-node-id="2784:77317">
            {body}
          </p>
        </div>
        <div
          id={isNotStatus ? 'node-2784_77254' : isStatus ? 'node-2784_77270' : ''}
          className={`${styles.priceContainer} ${isNotStatus ? styles.priceContainerOff : styles.priceContainerOn}`}
          data-name="Container"
        >
          {isNotStatus && (
            <div
              data-node-id="2784:77255"
              className={`${styles.shopIcon} ${styles.shopIconOff}`}
              data-name="Service icon/shop"
            >
              <ServiceIcon type="Shop" size={17} />
            </div>
          )}
          {isStatus && (
            <div
              data-node-id="2784:77271"
              className={styles.shopIcon}
              data-name="Service icon/shop"
            >
              <ServiceIcon type="Shop" size={17} />
            </div>
          )}
          <div
            id={isNotStatus ? 'node-2784_77256' : isStatus ? 'node-2784_77272' : ''}
            className={`${styles.buyNow} ${isNotStatus ? styles.buyNowOff : styles.buyNowOn}`}
            data-name="Container"
          >
            <p
              id={isNotStatus ? 'node-2784_77257' : isStatus ? 'node-2784_77273' : ''}
              className={styles.buyNowText}
            >
              Buy now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardGiftCard;
