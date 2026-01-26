'use client';

import React from 'react';
import styles from './Tooltip.module.css';

// Local image assets
const imgRectangle83Up = '/assets/Tooltip/figma/Tooltip/imgRectangle83Up.svg';
const imgRectangle83Down = '/assets/Tooltip/figma/Tooltip/imgRectangle83Down.svg';
const imgRectangle83Left = '/assets/Tooltip/figma/Tooltip/imgRectangle83Left.svg';
const imgRectangle83Right = '/assets/Tooltip/figma/Tooltip/imgRectangle83Right.svg';

export interface TooltipProps {
  text?: string;
  position?: 'Up' | 'Down' | 'Left' | 'Right';
  className?: string;
}

export function Tooltip({
  text = 'Your digital travel companion: interactive maps and step-by-step guidance on your smartphone.',
  position = 'Up',
  className,
}: TooltipProps) {
  const getArrowImage = () => {
    switch (position) {
      case 'Up':
        return imgRectangle83Up;
      case 'Down':
        return imgRectangle83Down;
      case 'Left':
        return imgRectangle83Left;
      case 'Right':
        return imgRectangle83Right;
      default:
        return imgRectangle83Up;
    }
  };

  const arrowImage = getArrowImage();

  if (position === 'Up') {
    return (
      <div
        className={`${styles.tooltip} ${className || ''}`}
        data-name="Tooltip"
        data-node-id="3797:78451"
      >
        <div
          className={styles.tooltipBox}
          data-name="Tooltip"
          data-node-id="3797:78446"
        >
          <p
            className={styles.tooltipText}
            data-node-id="3797:78447"
          >
            {text}
          </p>
        </div>
        <div
          className={styles.container}
          data-name="Container"
          data-node-id="3797:78448"
        >
          <div
            className={styles.arrow}
            data-node-id="3797:78449"
          >
            <div className={styles.arrowFill}>
              <img
                className={styles.arrowImage}
                alt=""
                src={arrowImage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (position === 'Down') {
    return (
      <div
        className={`${styles.tooltip} ${className || ''}`}
        data-name="Tooltip"
        data-node-id="3797:78458"
      >
        <div
          className={styles.container}
          data-name="Container"
          data-node-id="3797:78461"
        >
          <div className={styles.arrowWrapper}>
            <div
              className={`${styles.arrow} ${styles.arrowFlipped}`}
              data-node-id="3797:78462"
            >
              <div className={styles.arrowFill}>
                <img
                  className={styles.arrowImage}
                  alt=""
                  src={arrowImage}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.tooltipBox}
          data-name="Tooltip"
          data-node-id="3797:78459"
        >
          <p
            className={styles.tooltipText}
            data-node-id="3797:78460"
          >
            {text}
          </p>
        </div>
      </div>
    );
  }

  if (position === 'Left') {
    return (
      <div
        className={`${styles.tooltip} ${styles.tooltipHorizontal} ${className || ''}`}
        data-name="Tooltip"
        data-node-id="3797:78524"
      >
        <div
          className={styles.container}
          data-name="Container"
          data-node-id="3797:78525"
        >
          <div className={styles.arrowWrapperHorizontal}>
            <div
              className={`${styles.arrow} ${styles.arrowRotatedLeft}`}
              data-node-id="3797:78526"
            >
              <div className={styles.arrowFill}>
                <img
                  className={styles.arrowImage}
                  alt=""
                  src={arrowImage}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.tooltipBox}
          data-name="Tooltip"
          data-node-id="3797:78527"
        >
          <p
            className={styles.tooltipText}
            data-node-id="3797:78528"
          >
            {text}
          </p>
        </div>
      </div>
    );
  }

  // Right position
  return (
    <div
      className={`${styles.tooltip} ${styles.tooltipHorizontal} ${className || ''}`}
      data-name="Tooltip"
      data-node-id="3797:78555"
    >
      <div
        className={styles.tooltipBox}
        data-name="Tooltip"
        data-node-id="3797:78558"
      >
        <p
          className={styles.tooltipText}
          data-node-id="3797:78559"
        >
          {text}
        </p>
      </div>
      <div
        className={styles.container}
        data-name="Container"
        data-node-id="3797:78556"
      >
        <div className={styles.arrowWrapperHorizontal}>
          <div
            className={`${styles.arrow} ${styles.arrowRotatedRight}`}
            data-node-id="3797:78557"
          >
            <div className={styles.arrowFill}>
              <img
                className={styles.arrowImage}
                alt=""
                src={arrowImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
