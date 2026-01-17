'use client';

import React from 'react';
import styles from './MapLines.module.css';

// Local asset paths
const imgWhite1 = '/assets/BackgroundGraphics/figma/MapLines/imgWhite1.svg';
const imgBlack1 = '/assets/BackgroundGraphics/figma/MapLines/imgBlack1.svg';
const imgWhite2 = '/assets/BackgroundGraphics/figma/MapLines/imgWhite2.svg';
const imgBlack2 = '/assets/BackgroundGraphics/figma/MapLines/imgBlack2.svg';
const imgWhite3 = '/assets/BackgroundGraphics/figma/MapLines/imgWhite3.svg';
const imgBlack3 = '/assets/BackgroundGraphics/figma/MapLines/imgBlack3.svg';

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
