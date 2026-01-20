'use client';

import React from 'react';
import styles from './Plus.module.css';

// Figma asset URLs - will be replaced with local paths after download
const imgCheck = 'https://www.figma.com/api/mcp/asset/4869442f-62ed-443c-9033-e13a11c56e31';
const imgInfo = 'https://www.figma.com/api/mcp/asset/4d0b0522-885c-4e70-84e9-521295c003e6';

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
