'use client';

import React from 'react';
import styles from './MarqueeStripe.module.css';
import { ExternalLogo } from '../Logo';

export interface MarqueeStripeProps {
  title?: string;
  className?: string;
}

export const MarqueeStripe: React.FC<MarqueeStripeProps> = ({ 
  title = 'Talking about Wayure',
  className = '' 
}) => {
  const classes = [styles.marqueeStripe, className].filter(Boolean).join(' ');

  return (
    <div className={classes} data-name="Marquee Stripe" data-node-id="2187:10088">
      <p className={styles.title} data-node-id="2187:10061">
        {title}
      </p>
      <div className={styles.logosContainer} data-name="Logos" data-node-id="2187:10062">
        <ExternalLogo type="Media" name="televisionDeGalicia" className={styles.logo} />
        <ExternalLogo type="Media" name="laRepubblica" className={styles.logo} />
        <ExternalLogo type="Media" name="meridianiCammini" className={styles.logo} />
        <ExternalLogo type="Media" name="corriereDellaSera" className={styles.logo} />
        <ExternalLogo type="Certification" name="calidadTuristica" className={styles.logo} />
        <ExternalLogo type="Certification" name="japanEndlessDiscovery" className={styles.logo} />
        <ExternalLogo type="Certification" name="eccellenzeInDigitale" className={styles.logo} />
      </div>
    </div>
  );
};

export default MarqueeStripe;
