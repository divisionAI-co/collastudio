'use client';

import React from 'react';
import styles from './FatMenu.module.css';
import { Logo } from '@/components/Logo';

// Figma asset URLs - will be replaced with local paths after download
const imgMenuBanner = 'https://www.figma.com/api/mcp/asset/cb84d70e-ce70-4c65-ae26-87d18584226a';
const imgChevronRight = 'https://www.figma.com/api/mcp/asset/365c55b4-cb6c-44ea-81a6-b8847ed3fba9';
const imgViewAllTrails = 'https://www.figma.com/api/mcp/asset/c878215a-ba9b-4549-a622-8dc4f5c3f205';
const imgWhatsappIcon = 'https://www.figma.com/api/mcp/asset/c0c1172b-f04a-4c8f-8675-a58073ca0b4e';
const imgUserIcon = 'https://www.figma.com/api/mcp/asset/9baa087b-5948-4bf3-be01-1f1c5d3ff49b';
const imgLogoDark = 'https://www.figma.com/api/mcp/asset/521c96f1-4fa9-40a4-b99b-3aaf9d4b65d1';
const imgLogoDarkOver = 'https://www.figma.com/api/mcp/asset/7642a592-3565-44ac-be85-abd4fb645701';
const imgWhatsappIconOff = 'https://www.figma.com/api/mcp/asset/e5757627-0d2d-410e-ac9f-204ca74415f2';
const imgUserIconOff = 'https://www.figma.com/api/mcp/asset/8eaa0c3c-cea7-4482-b614-a7dfb932e8e1';
const imgViewAllTrailsScroll = 'https://www.figma.com/api/mcp/asset/0464748c-ff77-4bb2-8944-eeb3a1ee88d4';
const imgChevronRightScroll = 'https://www.figma.com/api/mcp/asset/c390f619-aa7f-4abc-8dea-61d3f7f42e1b';

export type FatMenuState = 'On' | 'Over' | 'Off' | 'On about' | 'Scroll';

export interface FatMenuProps {
  state?: FatMenuState;
  className?: string;
}

export const FatMenu: React.FC<FatMenuProps> = ({
  state = 'On',
  className = '',
}) => {
  const classes = [
    styles.fatMenu,
    styles[`state${state.replace(/\s+/g, '')}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isOn = state === 'On';
  const isOver = state === 'Over';
  const isOff = state === 'Off';
  const isScroll = state === 'Scroll';

  return (
    <div className={classes}>
      {/* Main menu bar */}
      <div className={styles.mainMenuBar}>
        {isOn && (
          <div className={styles.brandContainer}>
            <Logo variant="logoPayoff" color="dark" className={styles.brand} />
          </div>
        )}
        {isOver && (
          <Logo variant="logoPayoff" color="dark" className={styles.brandOver} />
        )}
        {isOff && (
          <Logo variant="logoPayoff" color="default" className={styles.brandOff} />
        )}
        {isScroll && (
          <div className={styles.brandScrollContainer}>
            <Logo variant="icon" color="dark" className={styles.brandScroll} />
          </div>
        )}
        
        <div className={styles.container}>
          {isOn && (
            <>
              <div className={styles.menuVoicesContainer}>
                <div className={styles.menuVoice}>
                  <p className={styles.menuVoiceText}>ST. JAMES WAY</p>
                </div>
                <div className={styles.menuVoice}>
                  <p className={styles.menuVoiceText}>DESTINATIONS</p>
                </div>
                <button className={styles.menuVoiceActive}>
                  <p className={styles.menuVoiceTextActive}>trail types</p>
                </button>
                <button className={styles.menuVoice}>
                  <p className={styles.menuVoiceText}>about</p>
                </button>
              </div>
              <div className={styles.actionsContainer}>
                <div className={styles.chatButton}>
                  <div className={styles.chatButtonIcon}>
                    <div className={styles.chatButtonIconInner}>
                      <img alt="" className={styles.chatButtonIconImg} src={imgWhatsappIcon} />
                    </div>
                  </div>
                  <div className={styles.chatButtonText}>
                    <p className={styles.chatButtonTextP}>CHAT WITH US</p>
                  </div>
                </div>
                <button className={styles.privateAreaButton}>
                  <div className={styles.privateAreaButtonCTA}>
                    <div className={styles.privateAreaButtonIcon}>
                      <div className={styles.privateAreaButtonIconInner}>
                        <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserIcon} />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </>
          )}
          
          {isOver && (
            <>
              <div className={styles.menuVoicesContainer}>
                <div className={styles.menuVoice}>
                  <p className={styles.menuVoiceText}>ST. JAMES WAY</p>
                </div>
                <div className={styles.menuVoice}>
                  <p className={styles.menuVoiceText}>DESTINATIONS</p>
                </div>
                <button className={styles.menuVoice}>
                  <p className={styles.menuVoiceText}>trail types</p>
                </button>
                <button className={styles.menuVoice}>
                  <p className={styles.menuVoiceText}>about</p>
                </button>
              </div>
              <div className={styles.actionsContainer}>
                <div className={styles.chatButton}>
                  <div className={styles.chatButtonIcon}>
                    <div className={styles.chatButtonIconInner}>
                      <img alt="" className={styles.chatButtonIconImg} src={imgWhatsappIcon} />
                    </div>
                  </div>
                  <div className={styles.chatButtonText}>
                    <p className={styles.chatButtonTextP}>CHAT WITH US</p>
                  </div>
                </div>
                <button className={styles.privateAreaButton}>
                  <div className={styles.privateAreaButtonCTA}>
                    <div className={styles.privateAreaButtonIcon}>
                      <div className={styles.privateAreaButtonIconInner}>
                        <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserIcon} />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </>
          )}
          
          {isOff && (
            <>
              <div className={styles.menuVoicesContainer}>
                <div className={styles.menuVoice}>
                  <p className={styles.menuVoiceTextOff}>ST. JAMES WAY</p>
                </div>
                <div className={styles.menuVoice}>
                  <p className={styles.menuVoiceTextOff}>DESTINATIONS</p>
                </div>
                <div className={styles.menuVoice}>
                  <p className={styles.menuVoiceTextOff}>trail types</p>
                </div>
                <div className={styles.menuVoice}>
                  <p className={styles.menuVoiceTextOff}>about</p>
                </div>
              </div>
              <div className={styles.actionsContainer}>
                <div className={styles.chatButtonOff}>
                  <div className={styles.chatButtonIcon}>
                    <div className={styles.chatButtonIconInner}>
                      <img alt="" className={styles.chatButtonIconImg} src={imgWhatsappIconOff} />
                    </div>
                  </div>
                  <div className={styles.chatButtonText}>
                    <p className={styles.chatButtonTextPOff}>CHAT WITH US</p>
                  </div>
                </div>
                <button className={styles.privateAreaButton}>
                  <div className={styles.privateAreaButtonCTAOff}>
                    <div className={styles.privateAreaButtonIcon}>
                      <div className={styles.privateAreaButtonIconInner}>
                        <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserIconOff} />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </>
          )}
          
          {isScroll && (
            <>
              <div className={styles.menuVoicesContainerScroll}>
                <div className={styles.menuVoice}>
                  <p className={styles.menuVoiceText}>ST. JAMES WAY</p>
                </div>
                <div className={styles.menuVoice}>
                  <p className={styles.menuVoiceText}>DESTINATIONS</p>
                </div>
                <button className={styles.menuVoice}>
                  <p className={styles.menuVoiceText}>trail types</p>
                </button>
                <div className={styles.menuVoice}>
                  <p className={styles.menuVoiceText}>about</p>
                </div>
              </div>
              <div className={styles.actionsContainerScroll}>
                <div className={styles.chatButtonScroll}>
                  <div className={styles.chatButtonIcon}>
                    <div className={styles.chatButtonIconInner}>
                      <img alt="" className={styles.chatButtonIconImg} src={imgWhatsappIcon} />
                    </div>
                  </div>
                  <div className={styles.chatButtonTextScroll}>
                    <p className={styles.chatButtonTextPScroll}>CHAT WITH US</p>
                    <div className={styles.chatButtonTextIcon}>
                      <img alt="" className={styles.chatButtonTextIconImg} src={imgViewAllTrailsScroll} />
                    </div>
                  </div>
                </div>
                <div className={styles.privateAreaButtonScroll}>
                  <div className={styles.privateAreaButtonCTA}>
                    <div className={styles.privateAreaButtonIcon}>
                      <div className={styles.privateAreaButtonIconInner}>
                        <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Content area - only shown when state is On */}
      {isOn && (
        <>
          <div className={styles.contentArea}>
            <div className={styles.filtersContainer}>
              {/* Difficulty */}
              <div className={styles.filterColumn}>
                <p className={styles.filterColumnTitle}>Difficulty</p>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>Easy</p>
                    <p className={styles.filterItemCount}>(11)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>Moderate</p>
                    <p className={styles.filterItemCount}>(06)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>Challenging</p>
                    <p className={styles.filterItemCount}>(01)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>Over 65+</p>
                    <p className={styles.filterItemCount}>(02)</p>
                  </div>
                </div>
              </div>

              {/* Period */}
              <div className={styles.filterColumn}>
                <p className={styles.filterColumnTitle}>Period</p>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>Weekend</p>
                    <p className={styles.filterItemCount}>(03)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>5-7 days</p>
                    <p className={styles.filterItemCount}>(01)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>7-10 days</p>
                    <p className={styles.filterItemCount}>(01)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>7-10 days</p>
                    <p className={styles.filterItemCount}>(01)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>10-15 days</p>
                    <p className={styles.filterItemCount}>(01)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>15+ days</p>
                    <p className={styles.filterItemCount}>(01)</p>
                  </div>
                </div>
              </div>

              {/* Overall Distance */}
              <div className={styles.filterColumn}>
                <p className={styles.filterColumnTitle}>OVERALL DISTANCE</p>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>75 km</p>
                    <p className={styles.filterItemCount}>(03)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>120 km</p>
                    <p className={styles.filterItemCount}>(01)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>250 km</p>
                    <p className={styles.filterItemCount}>(01)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>400 km</p>
                    <p className={styles.filterItemCount}>(01)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>500+ km</p>
                    <p className={styles.filterItemCount}>(01)</p>
                  </div>
                </div>
              </div>

              {/* Landscape */}
              <div className={styles.filterColumn}>
                <p className={styles.filterColumnTitle}>LANDSCAPE</p>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>Hills and countryside</p>
                    <p className={styles.filterItemCount}>(03)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>Nature</p>
                    <p className={styles.filterItemCount}>(01)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>Sea and Coasts</p>
                    <p className={styles.filterItemCount}>(01)</p>
                  </div>
                </div>
                <div className={styles.filterItem}>
                  <div className={styles.filterItemContent}>
                    <p className={styles.filterItemText}>Pilgrimage</p>
                    <p className={styles.filterItemCount}>(01)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Banner */}
            <div className={styles.menuBanner}>
              <img alt="" className={styles.menuBannerImg} src={imgMenuBanner} />
              <p className={styles.menuBannerText}>Group travel</p>
            </div>
          </div>

          {/* View all trails button */}
          <div className={styles.viewAllContainer}>
            <div className={styles.viewAllButton}>
              <div className={styles.viewAllButtonText}>
                <p className={styles.viewAllButtonTextP}>View all trails</p>
                <div className={styles.viewAllButtonIcon}>
                  <img alt="" className={styles.viewAllButtonIconImg} src={imgViewAllTrails} />
                </div>
              </div>
              <div className={styles.viewAllButtonChevron}>
                <div className={styles.viewAllButtonChevronInner}>
                  <img alt="" className={styles.viewAllButtonChevronImg} src={imgChevronRight} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FatMenu;
