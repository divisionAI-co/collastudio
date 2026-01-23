'use client';

import React from 'react';
import styles from './ServiceIcon.module.css';
import { serviceIconAssets, iconDimensions } from './iconAssets';

export type ServiceIconType =
  | 'User'
  | 'ChevronLeft'
  | 'ChevronRight'
  | 'ChevronUp'
  | 'ChevronDown'
  | 'HeartOn'
  | 'HeartOff'
  | 'Backpack'
  | 'Star'
  | 'StarEmpty'
  | 'Search'
  | 'Phone'
  | 'Calendar'
  | 'Check'
  | 'Plus'
  | 'Logout'
  | 'Close'
  | 'Map'
  | 'Bed'
  | 'Menu'
  | 'Whatsapp'
  | 'ExternalLink'
  | 'Filter'
  | 'Download'
  | 'EyeOpen'
  | 'EyeClosed'
  | 'Breakfast'
  | 'Shield'
  | 'Assistance'
  | 'Guide'
  | 'App'
  | 'GpsTrack'
  | 'Tree'
  | 'Gift'
  | 'Spinner'
  | 'Pdf'
  | 'Stopwatch'
  | 'Invoice'
  | 'Contract'
  | 'Estimate'
  | 'Sign'
  | 'Shop'
  | 'QRCode'
  | 'Flight'
  | 'Clock'
  | 'Bus'
  | 'Instagram'
  | 'Facebook'
  | 'Youtube'
  | 'Google'
  | 'Pen'
  | 'Circle'
  | 'CircleCheck'
  | 'CheckTrue'
  | 'CheckFalse'
  | 'Info'
  | 'Kilometers'
  | 'Union'
  | 'Payment'
  | 'Cancellation'
  | 'Switch'
  | 'Password'
  | 'PlanSolid';

export interface ServiceIconProps {
  type: ServiceIconType;
  className?: string;
  size?: number;
  iconSize?: number;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ type, className = '', size = 17, iconSize: customIconSize }) => {
  const classes = [styles.serviceIcon, className].filter(Boolean).join(' ');

  const iconStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const iconUrl = serviceIconAssets[type];
  const dimensions = iconDimensions[type];

  if (!iconUrl) {
    console.warn(`ServiceIcon: No asset found for type "${type}"`);
    return null;
  }

  // Some icons have padding of 10px instead of 3px
  const hasLargePadding = [
    'ExternalLink',
    'Filter',
    'Download',
    'Breakfast',
    'Shield',
    'Assistance',
    'Guide',
    'App',
    'GpsTrack',
    'Tree',
    'Gift',
    'Spinner',
    'Pdf',
    'Stopwatch',
    'Invoice',
    'Contract',
    'Estimate',
    'Sign',
    'Shop',
    'Kilometers',
    'Union',
    'Payment',
    'Cancellation',
    'Switch',
    'Password',
    'PlanSolid',
  ].includes(type);
  const padding = hasLargePadding ? 10 : 3;
  const calculatedIconSize = size - padding * 2;

  // Use customIconSize if provided, otherwise use dimensions or calculated size
  const finalIconWidth = customIconSize !== undefined ? customIconSize : (dimensions ? dimensions.width : calculatedIconSize);
  const finalIconHeight = customIconSize !== undefined ? customIconSize : (dimensions ? dimensions.height : calculatedIconSize);

  // Handle data URI SVGs (like Kilometers)
  const isDataUri = iconUrl.startsWith('data:');

  return (
    <div className={classes} style={iconStyle}>
      <div className={styles.iconWrapper} style={{ padding: `${padding}px` }}>
        <div
          className={styles.iconImage}
          style={{
            width: `${finalIconWidth}px`,
            height: `${finalIconHeight}px`,
          }}
        >
          {isDataUri ? (
            <img src={iconUrl} alt={type} className={styles.iconImg} />
          ) : (
            <img src={iconUrl} alt={type} className={styles.iconImg} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceIcon;
