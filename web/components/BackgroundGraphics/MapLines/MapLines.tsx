'use client';

import React from 'react';
import styles from './MapLines.module.css';

// Figma asset URLs
const imgWhite1 = 'https://www.figma.com/api/mcp/asset/bebda457-b83a-439c-b0a8-9b78d024b827';
const imgBlack1 = 'https://www.figma.com/api/mcp/asset/ff6688ca-f740-462b-bd07-7758298f8055';
const imgWhite2 = 'https://www.figma.com/api/mcp/asset/3caf7505-c7c2-4edb-ba40-4d5afe378002';
const imgBlack2 = 'https://www.figma.com/api/mcp/asset/1eac4eb9-01b4-407f-942f-eac9cefdece8';
const imgWhite3 = 'https://www.figma.com/api/mcp/asset/90563948-9ba1-4b63-a989-16b15abd5d6d';
const imgBlack3 = 'https://www.figma.com/api/mcp/asset/60369f5e-c309-4490-9192-1976b6a381e9';

export type MapLinesColor = 'White' | 'Black';
export type MapLinesType = '1' | '2' | '3';

export interface MapLinesProps {
  color?: MapLinesColor;
  type?: MapLinesType;
  className?: string;
}

export const MapLines: React.FC<MapLinesProps> = ({ 
  color = 'White',
  type = '1',
  className = '' 
}) => {
  const classes = [styles.mapLines, className].filter(Boolean).join(' ');
  const isBlackAnd1 = color === 'Black' && type === '1';
  const isBlackAnd2 = color === 'Black' && type === '2';
  const isBlackAnd3 = color === 'Black' && type === '3';
  const isWhiteAnd1 = color === 'White' && type === '1';
  const isWhiteAnd2 = color === 'White' && type === '2';
  const isWhiteAnd3 = color === 'White' && type === '3';

  return (
    <div className={classes}>
      {(isWhiteAnd1 || isBlackAnd1) && (
        <div className={styles.maskGroupContainer}>
          <div className={styles.maskGroupRotate}>
            <div className={styles.maskGroup}>
              <div className={styles.maskGroupInner}>
                <img 
                  className={styles.image} 
                  alt="" 
                  src={isWhiteAnd1 ? imgWhite1 : imgBlack1} 
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {(isWhiteAnd2 || isBlackAnd2) && (
        <div className={styles.map1}>
          <img 
            className={styles.image} 
            alt="" 
            src={isWhiteAnd2 ? imgWhite2 : imgBlack2} 
          />
        </div>
      )}
      {(isWhiteAnd3 || isBlackAnd3) && (
        <div className={isWhiteAnd3 ? styles.map2White : styles.map2Black}>
          <img 
            className={styles.image} 
            alt="" 
            src={isWhiteAnd3 ? imgWhite3 : imgBlack3} 
          />
        </div>
      )}
    </div>
  );
};

export default MapLines;
