'use client';

import React from 'react';
import styles from './Logo.module.css';

// Local logo assets
const logoAssets = {
  // Logo + Payoff
  logoPayoffDefault: '/assets/logos/figma/Logo/logoPayoffDefault.svg',
  logoPayoffDark: '/assets/logos/figma/Logo/logoPayoffDark.svg',
  
  // Logo only
  logoDefault: '/assets/logos/figma/Logo/logoDefault.svg',
  logoDark: '/assets/logos/figma/Logo/logoDark.svg',
  
  // Only type
  onlyType: '/assets/logos/figma/Logo/onlyType.svg',
  
  // Icon
  iconDefault: '/assets/logos/figma/Logo/iconDefault.svg',
  iconDark: '/assets/logos/figma/Logo/iconDark.svg',
};

export type LogoVariant = 'logoPayoff' | 'logo' | 'icon' | 'onlyType';
export type LogoColor = 'default' | 'dark';

export interface LogoProps {
  variant?: LogoVariant;
  color?: LogoColor;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'logoPayoff', 
  color = 'default',
  className = '' 
}) => {
  const classes = [styles.logo, className].filter(Boolean).join(' ');

  const getLogoAsset = (): string => {
    switch (variant) {
      case 'logoPayoff':
        return color === 'dark' ? logoAssets.logoPayoffDark : logoAssets.logoPayoffDefault;
      case 'logo':
        return color === 'dark' ? logoAssets.logoDark : logoAssets.logoDefault;
      case 'icon':
        return color === 'dark' ? logoAssets.iconDark : logoAssets.iconDefault;
      case 'onlyType':
        return logoAssets.onlyType;
      default:
        return logoAssets.logoPayoffDefault;
    }
  };

  const getLogoStyles = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'relative',
    };

    switch (variant) {
      case 'logoPayoff':
        return {
          ...baseStyle,
          aspectRatio: '357.549 / 115.849',
        };
      case 'logo':
        return {
          ...baseStyle,
          aspectRatio: '343 / 88',
        };
      case 'icon':
        return {
          ...baseStyle,
          aspectRatio: '166 / 125',
        };
      case 'onlyType':
        return {
          ...baseStyle,
          aspectRatio: '286 / 48',
        };
      default:
        return baseStyle;
    }
  };

  return (
    <div className={classes} style={getLogoStyles()}>
      <img 
        src={getLogoAsset()} 
        alt="Wayure Logo" 
        className={styles.logoImage}
      />
    </div>
  );
};

export default Logo;
