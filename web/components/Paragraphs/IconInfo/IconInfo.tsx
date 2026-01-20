'use client';

import React from 'react';
import styles from './IconInfo.module.css';

// Figma asset URLs - will be replaced with local paths after download
const img = 'https://www.figma.com/api/mcp/asset/1193a4b2-6d65-4ec7-9484-975839978989';

export interface IconInfoProps {
  className?: string;
  title?: string;
  text1?: string;
  text2?: string;
  showText1?: boolean;
  showText2?: boolean;
  iconSrc?: string;
  iconLabelWidth?: string;
  iconLabelHeight?: string;
  iconDataName?: string;
  iconDataNodeId?: string;
}

export function IconInfo({
  className,
  title = 'Thu Oct 11 2025 - Fri Oct 12 2025',
  text1 = 'Check in: from 2:00 PM to 7:00 PM',
  text2 = 'Check out: by 12:00 PM',
  showText1 = true,
  showText2 = true,
  iconSrc = img,
  iconLabelWidth = '9.625px',
  iconLabelHeight = '11px',
  iconDataName = 'Service icon/Calendar',
  iconDataNodeId = '2301:38429',
}: IconInfoProps) {
  return (
    <div
      data-name="Icon + info"
      data-node-id="2309:38437"
      className={`${styles.iconInfo} ${className || ''}`}
    >
      <div
        data-name={iconDataName}
        data-node-id={iconDataNodeId}
        className={styles.icon}
      >
        <div
          data-name="Icon lable"
          data-node-id={`${iconDataNodeId};2419:28951`}
          className={styles.iconLabel}
          style={{
            width: iconLabelWidth,
            height: iconLabelHeight,
          }}
        >
          <div
            className={styles.iconFill}
            style={{ '--fill-0': 'rgba(43, 42, 38, 1)' } as React.CSSProperties}
          >
            <img
              alt=""
              className={styles.iconImage}
              src={iconSrc}
            />
          </div>
        </div>
      </div>
      <div
        data-node-id="2301:38424"
        className={styles.content}
      >
        <p
          data-node-id="2301:38425"
          className={styles.title}
        >
          {title}
        </p>
        {showText1 && (
          <p
            data-node-id="2301:38426"
            className={styles.text}
          >
            {text1}
          </p>
        )}
        {showText2 && (
          <p
            data-node-id="2301:38427"
            className={styles.text}
          >
            {text2}
          </p>
        )}
      </div>
    </div>
  );
}
