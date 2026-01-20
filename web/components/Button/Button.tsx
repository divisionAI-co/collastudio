'use client';

import React from 'react';
import styles from './Button.module.css';

export type ButtonType = 'Main' | 'Secondary' | 'Tertiary';
export type ButtonColor = 'White' | 'Yellow' | 'Black';
export type ButtonState = 'On' | 'Off';

export interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  showLabel?: boolean;
  showIconLeft?: boolean;
  showIconRight?: boolean;
  icon?: React.ReactNode | null;
  state?: ButtonState;
  type?: ButtonType;
  color?: ButtonColor;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// Icon component for user icon (placeholder - replace with actual icon)
const UserIcon: React.FC<{ color?: string }> = ({ color = '#f7fdfb' }) => (
  <svg width="11.375" height="13" viewBox="0 0 11.375 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.6875 6.5C7.12329 6.5 8.28125 5.34204 8.28125 3.90625C8.28125 2.47046 7.12329 1.3125 5.6875 1.3125C4.25171 1.3125 3.09375 2.47046 3.09375 3.90625C3.09375 5.34204 4.25171 6.5 5.6875 6.5Z"
      fill={color}
    />
    <path
      d="M5.6875 7.625C3.04375 7.625 0.6875 8.15625 0.6875 10.8V11.6875H10.6875V10.8C10.6875 8.15625 8.33125 7.625 5.6875 7.625Z"
      fill={color}
    />
  </svg>
);

export const Button: React.FC<ButtonProps> = ({
  children,
  text = 'CREATE YOUR OWN',
  showLabel = true,
  showIconLeft = true,
  showIconRight = true,
  icon = null,
  state = 'Off',
  type = 'Main',
  color = 'White',
  onClick,
  disabled = false,
  className = '',
}) => {
  // Determine icon color based on button color and state
  const getIconColor = (): string => {
    if (color === 'White') {
      if (state === 'On' && type === 'Main') return '#2b2a26';
      if (state === 'On' && type === 'Secondary') return '#f7fdfb';
      if (state === 'Off' && type === 'Secondary') return '#2b2a26';
      return '#f7fdfb';
    }
    if (color === 'Yellow') {
      if (state === 'On' && type === 'Main') return '#2b2a26';
      if (state === 'On' && type === 'Secondary') return '#f4f097';
      if (state === 'Off' && type === 'Secondary') return '#2b2a26';
      return '#f4f097';
    }
    if (color === 'Black') {
      return '#2b2a26';
    }
    return '#f7fdfb';
  };

  // Determine text color based on button color and state
  const getTextColor = (): string => {
    if (color === 'White') {
      if (state === 'On' && type === 'Main') return '#2b2a26';
      if (state === 'On' && type === 'Secondary') return '#f7fdfb';
      if (state === 'Off' && type === 'Secondary') return '#2b2a26';
      return '#f7fdfb';
    }
    if (color === 'Yellow') {
      if (state === 'On' && type === 'Main') return '#2b2a26';
      if (state === 'On' && type === 'Secondary') return '#f4f097';
      if (state === 'Off' && type === 'Secondary') return '#2b2a26';
      return '#f4f097';
    }
    if (color === 'Black') {
      if (state === 'On' && type === 'Secondary') return '#F7FDFB';
      if (state === 'Off' && type === 'Secondary') return '#F7FDFB';
      if (state === 'On' && type === 'Main') return '#F7FDFB';
      if (state === 'Off' && type === 'Main') return '#F7FDFB';
      return '#F7FDFB';
    }
    return '#f7fdfb';
  };

  // Build class names
  const baseClass = styles.button;
  const typeClass = styles[`type${type}`];
  const colorClass = styles[`color${color}`];
  const stateClass = styles[`state${state}`];
  const disabledClass = disabled ? styles.disabled : '';

  const buttonClasses = [
    baseClass,
    typeClass,
    colorClass,
    stateClass,
    disabledClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const iconColor = getIconColor();
  const textColor = getTextColor();

  const iconElement = icon || <UserIcon color={iconColor} />;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      data-type={type}
      data-color={color}
      data-state={state}
    >
      {showIconLeft && (
        <span className={styles.iconLeft}>{iconElement}</span>
      )}
      {showLabel && (children || text) && (
        <span className={styles.label} style={{ color: textColor }}>
          {children || text}
        </span>
      )}
      {showIconRight && (
        <span className={styles.iconRight}>{iconElement}</span>
      )}
    </button>
  );
};

export default Button;
