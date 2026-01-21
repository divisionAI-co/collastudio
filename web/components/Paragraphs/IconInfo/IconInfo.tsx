'use client';

import React from 'react';
import styles from './IconInfo.module.css';

// Local icon asset
const img = '/assets/icons/figma/ServiceIcon/Calendar.svg';

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
          <div className={styles.iconFill}>
            {iconSrc.includes('Calendar.svg') ? (
              <svg
                className={styles.iconImage}
                preserveAspectRatio="none"
                width="100%"
                height="100%"
                overflow="visible"
                style={{ display: 'block' }}
                viewBox="0 0 9.625 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Icon lable"
                  d="M2.0625 0.6875C2.0625 0.322266 2.36328 0 2.75 0C3.11523 0 3.4375 0.322266 3.4375 0.6875V1.375H6.1875V0.6875C6.1875 0.322266 6.48828 0 6.875 0C7.24023 0 7.5625 0.322266 7.5625 0.6875V1.375H8.59375C9.15234 1.375 9.625 1.84766 9.625 2.40625V3.4375H0V2.40625C0 1.84766 0.451172 1.375 1.03125 1.375H2.0625V0.6875ZM9.625 4.125V9.96875C9.625 10.5488 9.15234 11 8.59375 11H1.03125C0.451172 11 0 10.5488 0 9.96875V4.125H9.625Z"
                  fill="#000000"
                />
              </svg>
            ) : iconSrc.includes('Map.svg') ? (
              <svg
                className={styles.iconImage}
                preserveAspectRatio="none"
                width="100%"
                height="100%"
                overflow="visible"
                style={{ display: 'block' }}
                viewBox="0 0 8.25 10.9839"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Icon lable"
                  d="M8.25 4.125C8.25 6.01562 5.73633 9.3457 4.61914 10.7422C4.36133 11.0645 3.86719 11.0645 3.60938 10.7422C2.51367 9.3457 0 6.01562 0 4.125C0 1.84766 1.84766 0 4.125 0C6.40234 0 8.25 1.84766 8.25 4.125Z"
                  fill="#000000"
                />
              </svg>
            ) : iconSrc.includes('Bed.svg') ? (
              <svg
                className={styles.iconImage}
                preserveAspectRatio="none"
                width="100%"
                height="100%"
                overflow="visible"
                style={{ display: 'block' }}
                viewBox="0 0 13.75 9.625"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Icon lable"
                  d="M0.6875 0C1.05273 0 1.375 0.322266 1.375 0.6875V6.1875H6.1875V2.75C6.1875 2.38477 6.48828 2.0625 6.875 2.0625H11.6875C12.8262 2.0625 13.75 2.98633 13.75 4.125V8.9375C13.75 9.32422 13.4277 9.625 13.0625 9.625C12.6758 9.625 12.375 9.32422 12.375 8.9375V8.25H1.375V8.9375C1.375 9.32422 1.05273 9.625 0.6875 9.625C0.300781 9.625 0 9.32422 0 8.9375V0.6875C0 0.322266 0.300781 0 0.6875 0ZM3.78125 5.5C2.81445 5.5 2.0625 4.74805 2.0625 3.78125C2.0625 2.83594 2.81445 2.0625 3.78125 2.0625C4.72656 2.0625 5.5 2.83594 5.5 3.78125C5.5 4.74805 4.72656 5.5 3.78125 5.5Z"
                  fill="#000000"
                />
              </svg>
            ) : (
              <img
                alt=""
                className={styles.iconImage}
                src={iconSrc}
              />
            )}
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
