'use client';

import React from 'react';
import styles from './FooterSocialIcon.module.css';

// Local icon assets - using same assets as Icon layer but within Footer layer
const imgInstagram = '/assets/icons/figma/ServiceIcon/Instagram.svg';
const imgFacebook = '/assets/icons/figma/ServiceIcon/Facebook.svg';
const imgYoutube = '/assets/icons/figma/ServiceIcon/Youtube.svg';

export type FooterSocialIconType = 'Instagram' | 'Facebook' | 'Youtube';

export interface FooterSocialIconProps {
  type: FooterSocialIconType;
  className?: string;
  size?: number;
}

const iconDimensions: Record<FooterSocialIconType, { width: number; height: number }> = {
  Instagram: { width: 11, height: 11 },
  Facebook: { width: 12.59375, height: 12.517578125 },
  Youtube: { width: 13.888671875, height: 9.75 },
};

export const FooterSocialIcon: React.FC<FooterSocialIconProps> = ({ 
  type, 
  className = '', 
  size 
}) => {
  const classes = [styles.footerSocialIcon, className].filter(Boolean).join(' ');

  const iconUrl = type === 'Instagram' ? imgInstagram : type === 'Facebook' ? imgFacebook : imgYoutube;
  const dimensions = iconDimensions[type];

  const iconStyle: React.CSSProperties = size ? {
    width: `${size}px`,
    height: `${size}px`,
  } : {};

  const iconSize = size ? size - 6 : dimensions.width; // 3px padding on each side
  const iconHeight = 17; // Fixed height for iconImage

  return (
    <div className={classes} style={iconStyle} data-name={`Service icon/${type}`}>
      <div className={styles.iconWrapper}>
        <div
          className={styles.iconImage}
          style={{
            width: `${iconSize}px`,
            height: `${iconHeight}px`,
          }}
        >
          <img src={iconUrl} alt={type} className={styles.iconImg} />
        </div>
      </div>
    </div>
  );
};

export default FooterSocialIcon;
