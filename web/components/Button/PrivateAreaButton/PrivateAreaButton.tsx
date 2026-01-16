'use client';

import React, { useState } from 'react';
import styles from './PrivateAreaButton.module.css';
import PrivateAreaMenuVoice from '../PrivateAreaMenuVoice';

export type PrivateAreaButtonType = 'Log' | 'No log';

export interface PrivateAreaButtonProps {
  userName?: string;
  type?: PrivateAreaButtonType;
  isActive?: boolean;
  onMenuAction?: (action: string) => void;
  className?: string;
}

// User icon component
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

export const PrivateAreaButton: React.FC<PrivateAreaButtonProps> = ({
  userName = 'Tommaso',
  type = 'Log',
  isActive: controlledActive,
  onMenuAction,
  className = '',
}) => {
  const [internalActive, setInternalActive] = useState(false);
  const isActive = controlledActive !== undefined ? controlledActive : internalActive;

  const handleToggle = () => {
    if (controlledActive === undefined) {
      setInternalActive(!internalActive);
    }
  };

  const handleMenuAction = (action: string) => {
    onMenuAction?.(action);
    if (controlledActive === undefined) {
      setInternalActive(false);
    }
  };

  const classes = [
    styles.privateAreaButton,
    isActive ? styles.active : styles.inactive,
    type === 'No log' ? styles.typeNoLog : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const buttonClasses = [
    styles.button,
    isActive ? styles.buttonActive : styles.buttonInactive,
    type === 'No log' ? styles.buttonNoLog : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <button className={buttonClasses} onClick={handleToggle}>
        <span className={styles.icon}>
          <UserIcon color={isActive ? '#2b2a26' : '#f7fdfb'} />
        </span>
        {type === 'Log' && (
          <span className={styles.userName} style={{ color: isActive ? '#2b2a26' : '#f7fdfb' }}>
            {userName}
          </span>
        )}
      </button>
      {isActive && (
        <div className={styles.dropdown}>
          {type === 'Log' ? (
            <>
              <PrivateAreaMenuVoice
                label="Your travel"
                onClick={() => handleMenuAction('travel')}
              />
              <div className={styles.menuItem} onClick={() => handleMenuAction('favorites')}>
                <span className={styles.icon}>
                  <svg width="13.016" height="11.387" viewBox="0 0 13.016 11.387" fill="none">
                    <path
                      d="M6.508 11.387L1.016 6.694L1.016 0.5L12 0.5V6.694L6.508 11.387Z"
                      fill="#2b2a26"
                    />
                  </svg>
                </span>
                <span className={styles.label}>Favorites</span>
              </div>
              <div className={styles.menuItem} onClick={() => handleMenuAction('account')}>
                <span className={styles.icon}>
                  <UserIcon color="#2b2a26" />
                </span>
                <span className={styles.label}>Account</span>
              </div>
              <div className={styles.menuItem} onClick={() => handleMenuAction('logout')}>
                <span className={styles.icon}>
                  <svg width="12.987" height="11.375" viewBox="0 0 12.987 11.375" fill="none">
                    <path
                      d="M5.5 0.5V2.5H11.5V9.875H5.5V11.875H12.5V0.5H5.5Z"
                      fill="#2b2a26"
                    />
                    <path
                      d="M0.5 5.6875L4.5 2.1875V4.6875H9.5V6.6875H4.5V9.1875L0.5 5.6875Z"
                      fill="#2b2a26"
                    />
                  </svg>
                </span>
                <span className={styles.label}>Logout</span>
              </div>
            </>
          ) : (
            <div className={styles.menuItem} onClick={() => handleMenuAction('login')}>
              <span className={styles.label}>Login</span>
              <span className={styles.icon}>
                <svg width="12.987" height="11.375" viewBox="0 0 12.987 11.375" fill="none">
                  <path
                    d="M7.487 0.5L5.5 2.1875L7.487 3.875H4.5V5.875H7.487L5.5 7.5625L7.487 9.25L12.5 5.6875L7.487 0.5Z"
                    fill="#2b2a26"
                  />
                </svg>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PrivateAreaButton;
