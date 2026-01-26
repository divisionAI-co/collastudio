'use client';

import React from 'react';
import styles from './FooterBrandLogo.module.css';

// Local logo asset - using onlyType from Logo layer assets but within Footer layer
const imgOnlyType = '/assets/logos/figma/Logo/onlyType.svg';

export interface FooterBrandLogoProps {
  className?: string;
}

export const FooterBrandLogo: React.FC<FooterBrandLogoProps> = ({ className = '' }) => {
  const classes = [styles.footerBrandLogo, className].filter(Boolean).join(' ');

  return (
    <div className={classes} data-name="Vector">
      <img 
        src={imgOnlyType} 
        alt="Wayure Logo" 
        className={styles.brandImage}
      />
    </div>
  );
};

export default FooterBrandLogo;
