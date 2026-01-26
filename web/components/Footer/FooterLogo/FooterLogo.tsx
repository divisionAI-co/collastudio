'use client';

import React from 'react';
import styles from './FooterLogo.module.css';

// Local logo assets - using same assets as Logo layer but within Footer layer
const logoIconDefault = '/assets/logos/figma/Logo/iconDefault.svg';

export interface FooterLogoProps {
  className?: string;
}

export const FooterLogo: React.FC<FooterLogoProps> = ({ className = '' }) => {
  const classes = [styles.footerLogo, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <img 
        src={logoIconDefault} 
        alt="Wayure Logo" 
        className={styles.logoImage}
      />
    </div>
  );
};

export default FooterLogo;
