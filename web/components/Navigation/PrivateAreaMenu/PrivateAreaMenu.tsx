'use client';

import React from 'react';
import styles from './PrivateAreaMenu.module.css';
import { Logo } from '@/components/Logo';

// Figma asset URLs - will be replaced with local paths after download
const imgUserIconLoggedIn = 'https://www.figma.com/api/mcp/asset/761038d5-99c9-471b-a903-765949e12b72';
const imgUserIconLoggedOut = 'https://www.figma.com/api/mcp/asset/39bd96b0-a06a-4e11-82dd-62dc4cb4e2b2';
const imgUserIconLoggedOutWhite = 'https://www.figma.com/api/mcp/asset/4420c95a-f9c0-4f8b-bc93-d45873cd7e55';
const imgBackpackIcon = 'https://www.figma.com/api/mcp/asset/761038d5-99c9-471b-a903-765949e12b72';
const imgHeartIcon = 'https://www.figma.com/api/mcp/asset/a6027fc6-21f4-4a60-bb04-15939a2cadc9';
const imgLogoutIcon = 'https://www.figma.com/api/mcp/asset/8d0ac253-13cb-44d3-a979-b774e7e5d677';
const imgUserIconDark = 'https://www.figma.com/api/mcp/asset/a1d8bd1a-cb21-4654-8134-8bb176e89876';
const imgUserIconTablet = 'https://www.figma.com/api/mcp/asset/7a84115a-3f32-4be5-919e-e7781ffb2f5f';
const imgUserIconMobile = 'https://www.figma.com/api/mcp/asset/86649c0e-454a-4a92-9ed5-b229f137ebb1';

export type PrivateAreaMenuDevice = 'Desktop' | 'Tablet' | 'Mobile';
export type PrivateAreaMenuType = 'Default' | 'Dark';

export interface PrivateAreaMenuProps {
  device?: PrivateAreaMenuDevice;
  type?: PrivateAreaMenuType;
  isLoggedIn?: boolean;
  userName?: string;
  className?: string;
}

export const PrivateAreaMenu: React.FC<PrivateAreaMenuProps> = ({
  device = 'Desktop',
  type = 'Default',
  isLoggedIn = false,
  userName = 'Tommaso',
  className = '',
}) => {
  const classes = [
    styles.privateAreaMenu,
    styles[`device${device}`],
    styles[`type${type}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isDark = type === 'Dark';

  return (
    <div className={classes}>
      <Logo variant="logoPayoff" color={isDark ? 'dark' : 'default'} className={styles.brand} />
      <div className={styles.container}>
        {isLoggedIn ? (
          <button className={styles.privateAreaButton}>
            <div className={styles.privateAreaButtonCTA}>
              <div className={styles.privateAreaButtonIcon}>
                <div className={styles.privateAreaButtonIconInner}>
                  <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserIconLoggedIn} />
                </div>
              </div>
              <div className={styles.privateAreaButtonText}>
                <p className={styles.privateAreaButtonTextP}>{userName}</p>
              </div>
            </div>
            {/* Dropdown menu */}
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownMenuItem}>
                <div className={styles.dropdownMenuItemIcon}>
                  <div className={styles.dropdownMenuItemIconInner}>
                    <img alt="" className={styles.dropdownMenuItemIconImg} src={imgBackpackIcon} />
                  </div>
                </div>
                <p className={styles.dropdownMenuItemText}>Your travel</p>
              </div>
              <div className={styles.dropdownMenuItem}>
                <div className={styles.dropdownMenuItemIcon}>
                  <div className={styles.dropdownMenuItemIconInner}>
                    <img alt="" className={styles.dropdownMenuItemIconImg} src={imgHeartIcon} />
                  </div>
                </div>
                <p className={styles.dropdownMenuItemText}>Favorites</p>
              </div>
              <div className={styles.dropdownMenuItem}>
                <div className={styles.dropdownMenuItemIcon}>
                  <div className={styles.dropdownMenuItemIconInner}>
                    <img alt="" className={styles.dropdownMenuItemIconImg} src={imgUserIconLoggedIn} />
                  </div>
                </div>
                <p className={styles.dropdownMenuItemText}>Account</p>
              </div>
              <div className={styles.dropdownMenuItem}>
                <div className={styles.dropdownMenuItemIcon}>
                  <div className={styles.dropdownMenuItemIconInner}>
                    <img alt="" className={styles.dropdownMenuItemIconImg} src={imgLogoutIcon} />
                  </div>
                </div>
                <p className={styles.dropdownMenuItemText}>Logout</p>
              </div>
            </div>
          </button>
        ) : (
          <button className={styles.privateAreaButton}>
            <div className={styles.privateAreaButtonCTA}>
              {device === 'Desktop' && isDark ? (
                <div className={styles.privateAreaButtonIcon}>
                  <div className={styles.privateAreaButtonIconInner}>
                    <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserIconDark} />
                  </div>
                </div>
              ) : device === 'Desktop' ? (
                <div className={styles.privateAreaButtonIcon}>
                  <div className={styles.privateAreaButtonIconInner}>
                    <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserIconLoggedOutWhite} />
                  </div>
                </div>
              ) : device === 'Tablet' ? (
                <div className={styles.privateAreaButtonIcon}>
                  <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserIconTablet} />
                </div>
              ) : (
                <div className={styles.privateAreaButtonIcon}>
                  <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserIconMobile} />
                </div>
              )}
              {device === 'Tablet' && (
                <div className={styles.privateAreaButtonText}>
                  <p className={styles.privateAreaButtonTextPTablet}>{userName}</p>
                </div>
              )}
              {device === 'Mobile' && (
                <div className={styles.privateAreaButtonText}>
                  <p className={styles.privateAreaButtonTextPMobile}>{userName}</p>
                </div>
              )}
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default PrivateAreaMenu;
