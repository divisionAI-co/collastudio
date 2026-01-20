'use client';

import React from 'react';
import styles from './BigCitation.module.css';

export interface BigCitationProps {
  className?: string;
  text?: string;
  linkText?: string;
  linkUrl?: string;
}

export function BigCitation({
  className,
  text = "If you're still not convinced to embark on this journey with yourself, perhaps we can help clarify things further in our",
  linkText = 'FAQs',
  linkUrl = '#',
}: BigCitationProps) {
  return (
    <div
      data-name="Big citation"
      data-node-id="2361:6093"
      className={`${styles.bigCitation} ${className || ''}`}
    >
      <p
        data-node-id="2361:6082"
        className={styles.text}
      >
        <span className={styles.textSpan}>{text}</span>
        <span className={styles.linkSpan}> </span>
        <a href={linkUrl} className={styles.link}>
          {linkText}
        </a>
        <span className={styles.linkSpan}>.</span>
      </p>
    </div>
  );
}
