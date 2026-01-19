'use client';

import React from 'react';
import styles from './NavStatusBar.module.css';

export type NavStatusBarViewport = 'desktop' | 'tablet' | 'mobile';

export interface NavStatusBarProps {
  viewport?: NavStatusBarViewport;
  className?: string;
}

// Local asset paths for Desktop
const imgFavicon = '/assets/Navigation/figma/NavStatusBar/imgFavicon.png';
const imgImageUserProfile = '/assets/Navigation/figma/NavStatusBar/imgImageUserProfile.png';
const imgCurveL = '/assets/Navigation/figma/NavStatusBar/imgCurveL.svg';
const imgCloseIcon = '/assets/Navigation/figma/NavStatusBar/imgCloseIcon.svg';
const imgCurveR = '/assets/Navigation/figma/NavStatusBar/imgCurveR.svg';
const imgPlusIcon = '/assets/Navigation/figma/NavStatusBar/imgPlusIcon.svg';
const imgBrowserControls = '/assets/Navigation/figma/NavStatusBar/imgBrowserControls.svg';
const imgMoreIcon = '/assets/Navigation/figma/NavStatusBar/imgMoreIcon.svg';
const imgIconFavorite = '/assets/Navigation/figma/NavStatusBar/imgIconFavorite.svg';
const imgIconSecure = '/assets/Navigation/figma/NavStatusBar/imgIconSecure.svg';
const imgHomeIcon = '/assets/Navigation/figma/NavStatusBar/imgHomeIcon.svg';
const imgRefreshIcon = '/assets/Navigation/figma/NavStatusBar/imgRefreshIcon.svg';
const imgForwardIcon = '/assets/Navigation/figma/NavStatusBar/imgForwardIcon.svg';
const imgBackIcon = '/assets/Navigation/figma/NavStatusBar/imgBackIcon.svg';

// Local asset paths for Tablet
const imgWindowGrabber = '/assets/Navigation/figma/NavStatusBar/imgWindowGrabber.svg';
const imgFrame12 = '/assets/Navigation/figma/NavStatusBar/imgFrame12.svg';
const imgFrame11 = '/assets/Navigation/figma/NavStatusBar/imgFrame11.svg';
const imgFrame10 = '/assets/Navigation/figma/NavStatusBar/imgFrame10.svg';
const imgFrame8 = '/assets/Navigation/figma/NavStatusBar/imgFrame8.svg';

// Local asset paths for Mobile
const imgTime = '/assets/Navigation/figma/NavStatusBar/imgTime.svg';
const imgStack = '/assets/Navigation/figma/NavStatusBar/imgStack.svg';

export const NavStatusBar: React.FC<NavStatusBarProps> = ({
  viewport = 'desktop',
  className = '',
}) => {
  const classes = [styles.navStatusBar, styles[`viewport${viewport}`], className]
    .filter(Boolean)
    .join(' ');

  if (viewport === 'desktop') {
    return (
      <div className={classes}>
        {/* Toolbar - Browser Controls */}
        <div className={styles.browserControlsBar}>
          <div className={styles.browserControlsBarInner}>
            <div className={styles.browserControlsBarBg} />
            <div className={styles.browserControls}>
              <img alt="" className={styles.browserControlsImg} src={imgBrowserControls} />
            </div>
            <div className={styles.tabAndPlus}>
              <div className={styles.browserTab}>
                <div className={styles.tabWrapper}>
                  <div className={styles.tabCurveL}>
                    <img alt="" className={styles.tabCurveImg} src={imgCurveL} />
                  </div>
                  <div className={styles.tabContent}>
                    <div className={styles.favicon}>
                      <img alt="" className={styles.faviconImg} src={imgFavicon} />
                    </div>
                    <div className={styles.tabTextWrapper}>
                      <p>
                        <span className={styles.tabText}>Google</span>
                        <span className={styles.tabTextDot}>.</span>
                      </p>
                    </div>
                    <div className={styles.closeIcon}>
                      <div className={styles.closeIconContainer}>
                        <img alt="" className={styles.closeIconImg} src={imgCloseIcon} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.tabCurveRWrapper}>
                    <div className={styles.tabCurveRTransform}>
                      <div className={styles.tabCurveR}>
                        <img alt="" className={styles.tabCurveImg} src={imgCurveR} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.plusIcon}>
                <div className={styles.plusIconContainer}>
                  <div className={styles.plusIconInner}>
                    <img alt="" className={styles.plusIconImg} src={imgPlusIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar - URL Controls */}
        <div className={styles.urlControlsBar}>
          <div className={styles.urlControlsBarInner}>
            <div className={styles.urlControlsBg}>
              <div className={styles.urlControlsBgShadow} />
            </div>
            <div className={styles.rightLockedIcons}>
              <div className={styles.iconMore}>
                <div className={styles.iconMoreContainer}>
                  <img alt="" className={styles.iconMoreImg} src={imgMoreIcon} />
                </div>
              </div>
              <div className={styles.userProfile}>
                <img alt="" className={styles.userProfileImg} src={imgImageUserProfile} />
              </div>
            </div>
            <div className={styles.urlBar}>
              <div className={styles.urlBarBg} />
              <div className={styles.iconFavorite}>
                <img alt="" className={styles.iconFavoriteImg} src={imgIconFavorite} />
              </div>
              <div className={styles.urlText}>
                <div className={styles.urlTextWrapper}>
                  <div className={styles.urlTextMain}>
                    <p className={styles.urlTextMainP}>wayure.com</p>
                  </div>
                  <div className={styles.urlTextSecondary}>
                    <p />
                  </div>
                </div>
              </div>
              <div className={styles.iconSecure}>
                <img alt="" className={styles.iconSecureImg} src={imgIconSecure} />
              </div>
            </div>
            <div className={styles.leftLockedIcons}>
              <div className={styles.iconHome}>
                <div className={styles.iconHomeContainer}>
                  <img alt="" className={styles.iconHomeImg} src={imgHomeIcon} />
                </div>
              </div>
              <div className={styles.iconRefresh}>
                <div className={styles.iconRefreshContainer}>
                  <img alt="" className={styles.iconRefreshImg} src={imgRefreshIcon} />
                </div>
              </div>
              <div className={styles.iconForward}>
                <div className={styles.iconForwardContainer}>
                  <img alt="" className={styles.iconForwardImg} src={imgForwardIcon} />
                </div>
              </div>
              <div className={styles.iconBack}>
                <div className={styles.iconBackContainer}>
                  <img alt="" className={styles.iconBackImg} src={imgBackIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (viewport === 'tablet') {
    return (
      <div className={classes}>
        <div className={styles.windowGrabber}>
          <img alt="" className={styles.windowGrabberImg} src={imgWindowGrabber} />
        </div>
        <div className={styles.titleAndControls}>
          {/* Trailing buttons - Right */}
          <div className={styles.trailingRight}>
            <div className={styles.buttonText}>
              <p className={styles.buttonTextP}>􀓔</p>
            </div>
            <div className={styles.buttonText}>
              <p className={styles.buttonTextP}>􀓔</p>
            </div>
            <div className={styles.buttonText}>
              <p className={styles.buttonTextP}>􀓔</p>
            </div>
          </div>
          {/* Trailing buttons - Left */}
          <div className={styles.trailingLeft}>
            <div className={styles.buttonText}>
              <p className={styles.buttonTextP}>􀓔</p>
            </div>
            <div className={styles.buttonText}>
              <p className={styles.buttonTextP}>􀓔</p>
            </div>
            <div className={styles.buttonText}>
              <p className={styles.buttonTextP}>􀓔</p>
            </div>
          </div>
          {/* Title */}
          <p className={styles.titleText}>Title</p>
          {/* URL Bar */}
          <div className={styles.urlBarTablet}>
            <div className={styles.urlBarTabletInner}>
              <div className={styles.urlBarTabletLeft}>
                <div className={styles.urlBarTabletLeftIcon1}>
                  <img alt="" className={styles.urlBarTabletIconImg} src={imgFrame12} />
                </div>
                <div className={styles.urlBarTabletLeftIcon2}>
                  <img alt="" className={styles.urlBarTabletIconImg} src={imgFrame11} />
                </div>
              </div>
              <div className={styles.urlBarTabletCenter}>
                <div className={styles.urlBarTabletCenterIcon}>
                  <img alt="" className={styles.urlBarTabletCenterIconImg} src={imgFrame10} />
                </div>
                <div className={styles.urlTextTablet}>
                  <p className={styles.urlTextTabletP}>wayure.com</p>
                </div>
              </div>
              <div className={styles.urlBarTabletRight}>
                <img alt="" className={styles.urlBarTabletRightImg} src={imgFrame8} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile viewport
  return (
    <div className={classes}>
      <div className={styles.time}>
        <img alt="" src={imgTime} />
      </div>
      <div className={styles.stack}>
        <img alt="" src={imgStack} />
      </div>
    </div>
  );
};

export default NavStatusBar;
