'use client';

import React from 'react';
import styles from './Plus.module.css';

// Local icon assets
const imgCheck = '/assets/icons/figma/ServiceIcon/Check.svg';
const imgInfo = '/assets/icons/figma/ServiceIcon/Info.svg';

export interface PlusProps {
  className?: string;
  text?: string;
}

export function Plus({
  className,
  text = 'Thu Oct 11 2025 - Fri Oct 12 2025',
}: PlusProps) {
  return (
    <div
      data-name="Plus"
      data-node-id="2309:41420"
      className={`${styles.plus} ${className || ''}`}
    >
      <div
        data-node-id="2809:66360"
        className={styles.checkSection}
      >
      <div
        data-name="Service icon/Check"
        data-node-id="2309:41417"
        className={styles.icon}
      >
        <div
          data-name="Icon lable"
          data-node-id="2419:28954"
          className={styles.iconLabelCheck}
        >
          <img
            alt=""
            className={styles.iconImage}
            src={imgCheck}
          />
        </div>
      </div>
        <div
          data-node-id="2309:41400"
          className={styles.textSection}
        >
          <p
            data-node-id="2309:41401"
            className={styles.text}
          >
            {text}
          </p>
        </div>
      </div>
      <div
        data-name="Service icon/info"
        data-node-id="2125:5305"
        className={styles.icon}
      >
        <div
          data-name="Icon lable"
          data-node-id="2419:28960"
          className={styles.iconLabelInfo}
        >
          <img
            alt=""
            className={styles.iconImage}
            src={imgInfo}
          />
        </div>
      </div>
    </div>
  );
}
