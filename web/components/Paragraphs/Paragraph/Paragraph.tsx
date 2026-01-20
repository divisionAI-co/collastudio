'use client';

import React from 'react';
import styles from './Paragraph.module.css';
import { ExpandableBodytext } from '../ExpandableBodytext';

export type ParagraphProperty = 'Off' | 'On';

export interface ParagraphProps {
  className?: string;
  title?: string;
  subtitle?: string;
  body?: string;
  showHeading?: boolean;
  showBody?: boolean;
  showSubtitle?: boolean;
  property1?: ParagraphProperty;
  onExpandToggle?: () => void;
}

export function Paragraph({
  className,
  title = 'Choose how you want to experience it, from minimalist dormitory to the best 4-star hotels.',
  subtitle = 'We always guarantee the best available accommodations along the way, personally tested by us to avoid any surprises. ',
  body = '190 km of pure beauty stretch from Le Treport along the entire coast of Normandy to the city of Le Havre. Named the Best Great Randonnee in France in 2019, the GR21 allows you to explore every corner and aspect of this magnificent region, Normandy.\n\nMiles and miles of walking along its white, steep cliffs, sheer sea cliffs, quaint French villages, cultivated fields, grazing cows, and blooming gardens everywhere. The vibrant colors of nature are what strikes you most in these places, explaining why many of them have been captured on canvas by famous Impressionists.\n\nFrom a historical perspective, these areas still have much to tell, with numerous artifacts from World War II and the famous Normandy landing located along the entire coast.',
  showHeading = true,
  showBody = true,
  showSubtitle = true,
  property1 = 'Off',
  onExpandToggle,
}: ParagraphProps) {
  return (
    <div
      data-node-id={property1 === 'On' ? '3532:107381' : '2301:24042'}
      className={`${styles.paragraph} ${className || ''}`}
    >
      {showHeading && (
        <p
          data-node-id={property1 === 'On' ? '3532:107382' : '2299:46890'}
          className={styles.title}
        >
          {title}
        </p>
      )}
      {showSubtitle && (
        <p
          data-node-id={property1 === 'On' ? '3532:107383' : '2299:46891'}
          className={styles.subtitle}
        >
          {subtitle}
        </p>
      )}
      {showBody && (
        <div
          data-name="Expandable Bodytext"
          data-node-id={property1 === 'On' ? '3532:107384' : '2309:39693'}
          className={styles.expandableBodytext}
        >
          <div
            data-node-id="I2309:39693;2250:15144"
            className={`${styles.bodyText} ${property1 === 'On' ? styles.bodyTextExpanded : styles.bodyTextCollapsed}`}
          >
            {body.split('\n\n').map((paragraph, index, array) => (
              <p key={index} className={index < array.length - 1 ? styles.paragraphMargin : ''}>
                {paragraph}
              </p>
            ))}
          </div>
          <button
            className={styles.expandButton}
            data-name="Small links"
            data-node-id="I2309:39693;2250:15146"
            onClick={onExpandToggle}
          >
            <p
              data-node-id="I2309:39693;2250:15146;2202:9879"
              className={styles.expandText}
            >
              {property1 === 'On' ? 'Close' : 'Expand'}
            </p>
          </button>
        </div>
      )}
    </div>
  );
}
