'use client';

import React from 'react';
import styles from './Illustration.module.css';

// Figma asset URLs
const imgLivello2 = 'https://www.figma.com/api/mcp/asset/509ac9d5-7732-49ec-a6fb-c32725c39f32';
const imgLivello3 = 'https://www.figma.com/api/mcp/asset/77d441b5-4340-4a33-af28-87cc4ac135f1';
const imgLivello4 = 'https://www.figma.com/api/mcp/asset/cd22ba70-ef56-4b84-8f66-b1a1c267d363';
const imgLivello5 = 'https://www.figma.com/api/mcp/asset/61151145-8950-48c0-8124-bf4598acce02';
const imgLivello6 = 'https://www.figma.com/api/mcp/asset/912031e5-3144-4d37-a29d-847418a1f3b9';
const imgLivello7 = 'https://www.figma.com/api/mcp/asset/c49180f9-ba59-4bd0-a95f-4e57ab156636';
const imgLivello8 = 'https://www.figma.com/api/mcp/asset/837ee630-742c-4fc2-8372-40629648841a';
const imgLivello9 = 'https://www.figma.com/api/mcp/asset/8be71fc5-166d-49d7-94f4-527e70c2ccc9';
const imgLivello10 = 'https://www.figma.com/api/mcp/asset/9487bb66-575e-4feb-be37-4e6823864050';
const imgLivello11 = 'https://www.figma.com/api/mcp/asset/948a1754-24c9-4ccf-bc29-2c8d06d6db88';
const imgLivello12 = 'https://www.figma.com/api/mcp/asset/f9cfaae0-9a87-45a9-9ffb-96b665a634ce';
const imgLivello13 = 'https://www.figma.com/api/mcp/asset/17b2a356-74bc-4acd-b316-e65b0dcfb518';
const imgLivello14 = 'https://www.figma.com/api/mcp/asset/590a3e48-95c3-4305-859a-2b201487be0a';
const imgVector = 'https://www.figma.com/api/mcp/asset/ac9b3ac3-bd33-40ed-aacc-851480591f00';

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
