'use client';

import React from 'react';
import styles from './Illustration.module.css';

// Local asset paths
const imgLivello2 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello2.svg';
const imgLivello3 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello3.svg';
const imgLivello4 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello4.svg';
const imgLivello5 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello5.svg';
const imgLivello6 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello6.svg';
const imgLivello7 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello7.svg';
const imgLivello8 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello8.svg';
const imgLivello9 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello9.svg';
const imgLivello10 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello10.svg';
const imgLivello11 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello11.svg';
const imgLivello12 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello12.svg';
const imgLivello13 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello13.svg';
const imgLivello14 = '/assets/BackgroundGraphics/figma/Illustration/imgLivello14.svg';
const imgVector = '/assets/BackgroundGraphics/figma/Illustration/imgVector.svg';

export type IllustrationVariant = 'Freedom' | 'Itineraries' | '24H';

export interface IllustrationProps {
  variant?: IllustrationVariant;
  className?: string;
}

export const Illustration: React.FC<IllustrationProps> = ({ 
  variant = 'Freedom',
  className = '' 
}) => {
  const classes = [styles.illustration, className].filter(Boolean).join(' ');
  const is24H = variant === '24H';
  const isFreedom = variant === 'Freedom';
  const isItineraries = variant === 'Itineraries';

  const getContainerStyles = (): React.CSSProperties => {
    if (isFreedom) {
      return { width: '87px', height: '80px' };
    } else if (is24H) {
      return { width: '80.3px', height: '80.3px' };
    } else if (isItineraries) {
      return { width: '81.49px', height: '78.41px' };
    }
    return {};
  };

  return (
    <div className={classes} style={getContainerStyles()}>
      {isFreedom && (
        <div className={styles.livello2}>
          <div className={styles.livello2Inner}>
            <img className={styles.image} alt="" src={imgLivello2} />
          </div>
        </div>
      )}
      {['24H', 'Itineraries'].includes(variant) && (
        <>
          <div className={is24H ? styles.vector24H : styles.vectorItineraries}>
            {is24H && <img className={styles.image} alt="" src={imgLivello3} />}
            {isItineraries && (
              <div className={styles.vectorItinerariesInner}>
                <img className={styles.image} alt="" src={imgLivello4} />
              </div>
            )}
          </div>
          <div className={is24H ? styles.vector24H2 : styles.vectorItineraries2}>
            <div className={is24H ? styles.vector24H2Inner : styles.vectorItineraries2Inner}>
              <img className={styles.image} alt="" src={is24H ? imgLivello5 : imgLivello6} />
            </div>
          </div>
          <div className={is24H ? styles.vector24H3 : styles.vectorItineraries3}>
            <div className={is24H ? styles.vector24H3Inner : styles.vectorItineraries3Inner}>
              <img className={styles.image} alt="" src={is24H ? imgLivello7 : imgLivello8} />
            </div>
          </div>
          <div className={is24H ? styles.vector24H4 : styles.vectorItineraries4}>
            {is24H && <img className={styles.image} alt="" src={imgLivello9} />}
            {isItineraries && (
              <div className={styles.vectorItineraries4Inner}>
                <img className={styles.image} alt="" src={imgLivello10} />
              </div>
            )}
          </div>
          <div className={is24H ? styles.vector24H5 : styles.vectorItineraries5}>
            {is24H && <img className={styles.image} alt="" src={imgLivello11} />}
            {isItineraries && (
              <div className={styles.vectorItineraries5Inner}>
                <img className={styles.image} alt="" src={imgLivello12} />
              </div>
            )}
          </div>
          <div className={is24H ? styles.vector24H6 : styles.vectorItineraries6}>
            {is24H && <img className={styles.image} alt="" src={imgLivello13} />}
            {isItineraries && (
              <div className={styles.vectorItineraries6Inner}>
                <img className={styles.image} alt="" src={imgLivello14} />
              </div>
            )}
          </div>
        </>
      )}
      {is24H && (
        <div className={styles.vector24H7}>
          <img className={styles.image} alt="" src={imgVector} />
        </div>
      )}
    </div>
  );
};

export default Illustration;
