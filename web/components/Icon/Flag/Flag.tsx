'use client';

import React from 'react';
import styles from './Flag.module.css';

// Figma asset URLs (valid for 7 days)
const imgFlagITA = 'https://www.figma.com/api/mcp/asset/c1ff7579-a570-44a7-a93f-4767552a878c';
const imgFlagFRA = 'https://www.figma.com/api/mcp/asset/5c0e02c0-ee93-477f-828c-06047f601502';
const imgFlagDEUContents = 'https://www.figma.com/api/mcp/asset/7fbbfca1-640e-4994-a4fc-df54ee75a959';
const imgFlagDEUContents1 = 'https://www.figma.com/api/mcp/asset/85ac1a04-4cd1-402e-bb18-aa12f1de75dd';
const imgFlagESPBackground = 'https://www.figma.com/api/mcp/asset/4281d0a9-d4aa-4e5b-add5-5f0a0c8b9cb4';
const imgFlagESPBackground1 = 'https://www.figma.com/api/mcp/asset/4bb008c6-344d-4cda-80b0-3362b9f1d677';
const imgFlagESPTop = 'https://www.figma.com/api/mcp/asset/1b656034-81b7-4427-a69c-ddd38e675cdc';
const imgFlagESPTop1 = 'https://www.figma.com/api/mcp/asset/bad7daf3-7eef-410c-a75c-36cd0284ab56';
const imgFlagESPPillars = 'https://www.figma.com/api/mcp/asset/24d70e0c-12c0-49e7-b2e8-1b35d0348d78';
const imgFlagESPCrown = 'https://www.figma.com/api/mcp/asset/d2decb17-2877-4c43-80f0-e3f9b1f22918';
const imgFlagESPShield = 'https://www.figma.com/api/mcp/asset/b8122e5d-8f71-499f-9557-d9dd6ea07a0e';
const imgFlagENGVector = 'https://www.figma.com/api/mcp/asset/a7c440f1-9f2e-4075-8878-44bb9048a99e';
const imgFlagENGVector1 = 'https://www.figma.com/api/mcp/asset/ae2683c4-3592-44da-99dc-84e45a53de1b';
const imgFlagENGGroup = 'https://www.figma.com/api/mcp/asset/7bade694-b53e-4341-9a8c-62e6beac3668';
const imgFlagENGGroup1 = 'https://www.figma.com/api/mcp/asset/2a1d997d-9bbb-448a-9be4-21fe29e26ac0';

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
