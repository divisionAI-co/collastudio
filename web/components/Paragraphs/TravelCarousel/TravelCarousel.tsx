'use client';

import React from 'react';
import styles from './TravelCarousel.module.css';
import { Illustration } from '../../BackgroundGraphics/Illustration';

// Local asset paths for remaining manual illustrations
const img7 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello3.svg';
const img8 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello5.svg';
const img9 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello7.svg';
const img10 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello9.svg';
const img11 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello11.svg';
const img12 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello13.svg';
const img13 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello14.svg';
const img14 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello2.svg';

export interface TravelCarouselFeature {
  title: string;
  body: string;
  illustration: React.ReactNode;
}

export interface TravelCarouselProps {
  className?: string;
  features?: TravelCarouselFeature[];
}

export function TravelCarousel({
  className,
  features,
}: TravelCarouselProps) {
  const defaultFeatures: TravelCarouselFeature[] = [
    {
      title: 'Proved itineraries',
      body: "We've walked every trail we offer. Choose from our tested routes or let us tailor one just for you, a unique journey, shaped around your interests and experience level",
      illustration: (
        <Illustration variant="Itineraries" />
      ),
    },
    {
      title: '24/7 assistance',
      body: "You'll never really walk alone. Chat with our support team anytime, and count on a concierge service that takes care of every detail, even your luggage.",
      illustration: (
        <div className={styles.illustration} data-name="Illustration" data-node-id="I2145:11266;2151:12178">
          <div className={styles.vector} data-name="Vector" data-node-id="I2145:11266;2151:12178;2151:12030" style={{ inset: '33.23% 39.34% 32.25% 39.35%' }}>
            <img alt="" className={styles.vectorImage} src={img7} />
          </div>
          <div className={styles.vector} data-name="Vector" data-node-id="I2145:11266;2151:12178;2151:12031" style={{ inset: '0.19%' }}>
            <div className={styles.vectorInner}>
              <img alt="" className={styles.vectorImage} src={img8} />
            </div>
          </div>
          <div className={styles.vector} data-name="Vector" data-node-id="I2145:11266;2151:12178;2151:12032" style={{ inset: '12.03%' }}>
            <div className={styles.vectorInner}>
              <img alt="" className={styles.vectorImage} src={img9} />
            </div>
          </div>
          <div className={styles.vector} data-name="Vector" data-node-id="I2145:11266;2151:12178;2151:12033" style={{ inset: '9.49% 47.46% 85.43% 47.46%' }}>
            <img alt="" className={styles.vectorImage} src={img10} />
          </div>
          <div className={styles.vector} data-name="Vector" data-node-id="I2145:11266;2151:12178;2151:12034" style={{ inset: '46.75% 9.49% 48.17% 85.43%' }}>
            <img alt="" className={styles.vectorImage} src={img11} />
          </div>
          <div className={styles.vector} data-name="Vector" data-node-id="I2145:11266;2151:12178;2151:12035" style={{ inset: '46.75% 85.43% 48.17% 9.49%' }}>
            <img alt="" className={styles.vectorImage} src={img12} />
          </div>
          <div className={styles.vector} data-name="Vector" data-node-id="I2145:11266;2151:12178;2151:12036" style={{ inset: '85.43% 47.46% 9.49% 47.46%' }}>
            <img alt="" className={styles.vectorImage} src={img13} />
          </div>
        </div>
      ),
    },
    {
      title: 'Exploring freedom',
      body: 'Enjoy total freedom, both on the path and in planning. No fixed dates, no rigid plans, we design your trip together, exactly the way you want it.',
      illustration: (
        <div className={styles.illustration} data-name="Illustration" data-node-id="I2145:11271;2151:12178">
          <div className={styles.vector} data-name="Livello 2" data-node-id="I2145:11271;2151:12178;2151:12015" style={{ inset: '0.19% 1.15% 0.29% 3.45%' }}>
            <div className={styles.vectorInner}>
              <img alt="" className={styles.vectorImage} src={img14} />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <div
      data-name="Travel carousel Comp"
      data-node-id="2151:11338"
      className={`${styles.travelCarousel} ${className || ''}`}
    >
      <div
        data-name="Container"
        data-node-id="2145:11276"
        className={styles.container}
      >
        {displayFeatures.map((feature, index) => (
          <div
            key={index}
            data-name="Feature"
            data-node-id={index === 0 ? '2145:11260' : index === 1 ? '2145:11266' : '2145:11271'}
            className={styles.feature}
          >
            {feature.illustration}
            <div
              data-name="Title + paragraph"
              data-node-id="I2145:11260;2145:10693"
              className={styles.content}
            >
              <p
                data-node-id={index === 0 ? 'I2145:11260;2145:10694' : index === 1 ? 'I2145:11266;2145:10694' : 'I2145:11271;2145:10694'}
                className={styles.title}
              >
                {feature.title}
              </p>
              <p
                data-node-id={index === 0 ? 'I2145:11260;2145:10695' : index === 1 ? 'I2145:11266;2145:10695' : 'I2145:11271;2145:10695'}
                className={styles.body}
              >
                {feature.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
