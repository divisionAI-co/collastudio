'use client';

import React from 'react';
import styles from './Logo.module.css';

// Figma asset URLs (valid for 7 days)
const logoAssets = {
  // Logo + Payoff
  logoPayoffDefault: 'https://www.figma.com/api/mcp/asset/186747c4-42dc-44ce-85b4-98eaacdc8ec6',
  logoPayoffDark: 'https://www.figma.com/api/mcp/asset/33e182ab-0565-41c9-94cd-0ee5f27e661e',
  
  // Logo only
  logoDefault: 'https://www.figma.com/api/mcp/asset/6cf693ba-4152-4e92-a3de-88f0dbfe0ee1',
  logoDark: 'https://www.figma.com/api/mcp/asset/088610f4-3c0b-451b-9a79-548dc3187445',
  
  // Only type
  onlyType: 'https://www.figma.com/api/mcp/asset/e749943b-deaf-4457-bbef-28c9dd5b20ac',
  
  // Icon
  iconDefault: 'https://www.figma.com/api/mcp/asset/7199e588-7040-46e0-829c-d4871834208f',
  iconDark: 'https://www.figma.com/api/mcp/asset/a06f1f8d-fe80-4493-bc69-bbe20eea4256',
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
