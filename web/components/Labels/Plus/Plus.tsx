'use client';

import React from 'react';
import styles from './Plus.module.css';


export interface PlusProps {
  text?: string;
  state?: 'Off';
  className?: string;
  showStar?: boolean;
  textClassName?: string;
}

export function Plus({
  text = 'CURATED TRAILS',
  state = 'Off',
  className,
  showStar = true,
  textClassName,
}: PlusProps) {
  return (
    <div
      data-node-id="2006:11389"
      className={`${styles.plus} ${className || ''}`}
    >
      <div
        data-node-id="2006:11381"
        className={styles.featureContent}
        data-name="Feature Content"
      >
        {showStar && (
          <div className={styles.starWrapper}>
            <div
              data-node-id="2006:11385"
              className={styles.star}
              data-name="Star"
            >
              <div
                className={styles.starFill}
              >
                <svg
                  className={styles.starImage}
                  preserveAspectRatio="none"
                  width="100%"
                  height="100%"
                  overflow="visible"
                  style={{ display: 'block' }}
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Union"
                    d="M8.19974 4.27246C9.40822 5.51036 12 6.54883 12 6.54883C12 6.54883 9.5 7.5 8.03125 9.03027C6.5625 10.5605 5.91602 13 5.91602 13C5.91602 13 4.97298 10.1967 3.71484 8.87207C2.53648 7.6314 0 6.54883 0 6.54883C0 6.54883 2.47487 5.47921 3.6377 4.27246C4.94976 2.91084 5.91602 0 5.91602 0C5.91602 0 6.87814 2.9187 8.19974 4.27246Z"
                    fill="#F4F097"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
        <p
          data-node-id="2006:11383"
          className={`${styles.text} ${textClassName || ''}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default Plus;
