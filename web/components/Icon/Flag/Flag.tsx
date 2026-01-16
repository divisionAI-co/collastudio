'use client';

import React from 'react';
import styles from './Flag.module.css';

// Local icon assets
const imgFlagITA = '/assets/icons/figma/Flag/imgFlagITA.svg';
const imgFlagFRA = '/assets/icons/figma/Flag/imgFlagFRA.svg';
const imgFlagDEUContents = '/assets/icons/figma/Flag/imgFlagDEUContents.svg';
const imgFlagDEUContents1 = '/assets/icons/figma/Flag/imgFlagDEUContents1.svg';
const imgFlagESPBackground = '/assets/icons/figma/Flag/imgFlagESPBackground.svg';
const imgFlagESPBackground1 = '/assets/icons/figma/Flag/imgFlagESPBackground1.svg';
const imgFlagESPTop = '/assets/icons/figma/Flag/imgFlagESPTop.svg';
const imgFlagESPTop1 = '/assets/icons/figma/Flag/imgFlagESPTop1.svg';
const imgFlagESPPillars = '/assets/icons/figma/Flag/imgFlagESPPillars.svg';
const imgFlagESPCrown = '/assets/icons/figma/Flag/imgFlagESPCrown.svg';
const imgFlagESPShield = '/assets/icons/figma/Flag/imgFlagESPShield.svg';
const imgFlagENGVector = '/assets/icons/figma/Flag/imgFlagENGVector.svg';
const imgFlagENGVector1 = '/assets/icons/figma/Flag/imgFlagENGVector1.svg';
const imgFlagENGGroup = '/assets/icons/figma/Flag/imgFlagENGGroup.svg';
const imgFlagENGGroup1 = '/assets/icons/figma/Flag/imgFlagENGGroup1.svg';

export type Language = 'ITA' | 'ENG' | 'FRA' | 'DEU' | 'ESP';

export interface FlagProps {
  language?: Language;
  className?: string;
}

export const Flag: React.FC<FlagProps> = ({ language = 'ITA', className = '' }) => {
  const classes = [styles.flag, className].filter(Boolean).join(' ');

  const renderFlag = () => {
    switch (language) {
      case 'ITA':
        return (
          <div className={styles.flagImage}>
            <img src={imgFlagITA} alt="Italy flag" className={styles.flagImg} />
          </div>
        );
      case 'FRA':
        return (
          <div className={styles.flagImage}>
            <img src={imgFlagFRA} alt="France flag" className={styles.flagImg} />
          </div>
        );
      case 'DEU':
        return (
          <div className={styles.flagImageDEU}>
            <div
              className={styles.flagMask}
              style={{ maskImage: `url("${imgFlagDEUContents}")` }}
            >
              <img src={imgFlagDEUContents1} alt="Germany flag" className={styles.flagImg} />
            </div>
          </div>
        );
      case 'ESP':
        return (
          <div className={styles.flagImageESP}>
            <div className={styles.flagESPWrapper}>
              <div className={styles.flagESPContents}>
                <div
                  className={styles.flagESPBackground}
                  style={{ maskImage: `url("${imgFlagESPBackground}")` }}
                >
                  <img src={imgFlagESPBackground1} alt="Spain flag background" className={styles.flagImg} />
                </div>
                <div
                  className={styles.flagESPTop}
                  style={{ maskImage: `url("${imgFlagESPBackground}"), url("${imgFlagESPTop}")` }}
                >
                  <img src={imgFlagESPTop1} alt="Spain flag top" className={styles.flagImg} />
                </div>
                <div
                  className={styles.flagESPBottom}
                  style={{ maskImage: `url("${imgFlagESPBackground}"), url("${imgFlagESPTop}")` }}
                >
                  <img src={imgFlagESPTop1} alt="Spain flag bottom" className={styles.flagImg} />
                </div>
                <div className={styles.flagESPMark}>
                  <div
                    className={styles.flagESPPillars}
                    style={{ maskImage: `url("${imgFlagESPBackground}"), url("${imgFlagESPTop}")` }}
                  >
                    <img src={imgFlagESPPillars} alt="Spain flag pillars" className={styles.flagImg} />
                  </div>
                  <div
                    className={styles.flagESPCrown}
                    style={{ maskImage: `url("${imgFlagESPBackground}"), url("${imgFlagESPTop}")` }}
                  >
                    <img src={imgFlagESPCrown} alt="Spain flag crown" className={styles.flagImg} />
                  </div>
                  <div
                    className={styles.flagESPShield}
                    style={{ maskImage: `url("${imgFlagESPBackground}"), url("${imgFlagESPTop}")` }}
                  >
                    <img src={imgFlagESPShield} alt="Spain flag shield" className={styles.flagImg} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'ENG':
      default:
        return (
          <div className={styles.flagImageENG}>
            <div className={styles.flagENGWrapper}>
              <div
                className={styles.flagENGVector}
                style={{ maskImage: `url("${imgFlagENGVector}")` }}
              >
                <img src={imgFlagENGVector1} alt="UK flag vector" className={styles.flagImg} />
              </div>
              <div
                className={styles.flagENGGroup}
                style={{ maskImage: `url("${imgFlagENGVector}"), url("${imgFlagENGGroup}"), url("${imgFlagENGVector}")` }}
              >
                <img src={imgFlagENGGroup1} alt="UK flag group" className={styles.flagImg} />
              </div>
            </div>
          </div>
        );
    }
  };

  return <div className={classes}>{renderFlag()}</div>;
};

export default Flag;
