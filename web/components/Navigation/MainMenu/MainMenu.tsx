'use client';

import React from 'react';
import styles from './MainMenu.module.css';
import { Logo } from '@/components/Logo';

// Figma asset URLs - will be replaced with local paths after download
// Desktop Default
const imgWhatsappDefault = 'https://www.figma.com/api/mcp/asset/c986923f-851a-42be-aa99-95bc5d9cfa31';
const imgUserDefault = 'https://www.figma.com/api/mcp/asset/f5829f22-e432-4af4-af3f-d853169a2f99';

// Desktop Dark
const imgWhatsappDark = 'https://www.figma.com/api/mcp/asset/737cb39b-ac38-400f-a5ee-9d3d1447ae03';
const imgUserDark = 'https://www.figma.com/api/mcp/asset/cfb5a723-799d-485e-b452-c773b956ba3d';

// Desktop White on scroll
const imgWhatsappWhiteScroll = 'https://www.figma.com/api/mcp/asset/14f592e9-9c7a-456d-a4f6-d741b9b2c754';
const imgUserWhiteScroll = 'https://www.figma.com/api/mcp/asset/63b19067-19b5-4037-a7bf-fd348ad49aec';
const imgViewAllTrailsWhite = 'https://www.figma.com/api/mcp/asset/ae3a2ac5-6875-4592-8b23-d67dea4ebdf8';

// Desktop Dark on scroll
const imgWhatsappDarkScroll = 'https://www.figma.com/api/mcp/asset/40efd253-26dd-4fa5-afc7-25e9ac7775d1';
const imgUserDarkScroll = 'https://www.figma.com/api/mcp/asset/7d180c64-0a9e-435c-99a5-5fe3021576b0';
const imgViewAllTrailsDark = 'https://www.figma.com/api/mcp/asset/0468d2b5-4997-43b3-beff-44c8c8dab502';

// Tablet Default
const imgMenuTabletDefault = 'https://www.figma.com/api/mcp/asset/4321f991-60b4-45cf-b16b-e85ce588b4df';
const imgUserTabletDefault = 'https://www.figma.com/api/mcp/asset/8cb7f073-3706-4223-ad4c-8ec1d79a6518';

// Tablet Dark
const imgCloseTabletDark = 'https://www.figma.com/api/mcp/asset/8509df79-30fd-4368-99ed-ab5c0272e58c';
const imgUserTabletDark = 'https://www.figma.com/api/mcp/asset/405d48a4-daa7-4684-8334-1761fee9d1ac';

// Mobile Default
const imgMenuMobileDefault = 'https://www.figma.com/api/mcp/asset/f71b0bd0-f1d5-4877-831b-e41d8607b2ba';
const imgUserMobileDefault = 'https://www.figma.com/api/mcp/asset/a66eca28-1c19-4b77-a1b5-eca8888952cd';

// Mobile Dark
const imgCloseMobileDark = 'https://www.figma.com/api/mcp/asset/0fa1516d-c703-4f25-8594-3d163cdc41c4';
const imgUserMobileDark = 'https://www.figma.com/api/mcp/asset/7db6d517-dfc5-46da-9bb1-eedd46789f30';

export type MainMenuDevice = 'Desktop' | 'Tablet' | 'Mobile';
export type MainMenuType = 'Default' | 'Dark' | 'Dark on scroll' | 'White on scroll';

export interface MainMenuProps {
  device?: MainMenuDevice;
  type?: MainMenuType;
  className?: string;
  showVoices?: boolean;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  device = 'Desktop',
  type = 'Default',
  className = '',
  showVoices = true,
}) => {
  const classes = [
    styles.mainMenu,
    styles[`device${device}`],
    styles[`type${type.replace(/\s+/g, '')}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // 1. Desktop Default
  if (device === 'Desktop' && type === 'Default') {
    return (
      <div className={classes}>
        <Logo variant="logoPayoff" color="default" className={styles.brand} />
        <div className={styles.container}>
          {showVoices && (
            <div className={styles.menuVoicesContainer}>
              <div className={styles.menuVoice}>
                <p className={styles.menuVoiceText}>ST. JAMES WAY</p>
              </div>
              <div className={styles.menuVoice}>
                <p className={styles.menuVoiceText}>DESTINATIONS</p>
              </div>
              <div className={styles.menuVoice}>
                <p className={styles.menuVoiceText}>trail types</p>
              </div>
              <div className={styles.menuVoice}>
                <p className={styles.menuVoiceText}>about</p>
              </div>
            </div>
          )}
          <div className={styles.actionsContainer}>
            <div className={styles.chatButton}>
              <div className={styles.chatButtonIcon}>
                <img alt="" className={styles.chatButtonIconImg} src={imgWhatsappDefault} />
              </div>
              <div className={styles.chatButtonText}>
                <p className={styles.chatButtonTextP}>CHAT WITH US</p>
              </div>
            </div>
            <button className={styles.privateAreaButton}>
              <div className={styles.privateAreaButtonCTA}>
                <div className={styles.privateAreaButtonIcon}>
                  <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserDefault} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Desktop Dark
  if (device === 'Desktop' && type === 'Dark') {
    return (
      <div className={classes}>
        <Logo variant="logoPayoff" color="dark" className={styles.brand} />
        <div className={styles.container}>
          {showVoices && (
            <div className={styles.menuVoicesContainer}>
              <div className={styles.menuVoice}>
                <p className={styles.menuVoiceTextDark}>ST. JAMES WAY</p>
              </div>
              <div className={styles.menuVoice}>
                <p className={styles.menuVoiceTextDark}>DESTINATIONS</p>
              </div>
              <div className={styles.menuVoice}>
                <p className={styles.menuVoiceTextDark}>trail types</p>
              </div>
              <div className={styles.menuVoice}>
                <p className={styles.menuVoiceTextDark}>about</p>
              </div>
            </div>
          )}
          <div className={styles.actionsContainer}>
            <div className={styles.chatButtonDark}>
              <div className={styles.chatButtonIcon}>
                <div className={styles.chatButtonIconInner}>
                  <img alt="" className={styles.chatButtonIconImg} src={imgWhatsappDark} />
                </div>
              </div>
              <div className={styles.chatButtonText}>
                <p className={styles.chatButtonTextPDark}>CHAT WITH US</p>
              </div>
            </div>
            <button className={styles.privateAreaButton}>
              <div className={styles.privateAreaButtonCTADark}>
                <div className={styles.privateAreaButtonIcon}>
                  <div className={styles.privateAreaButtonIconInner}>
                    <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserDark} />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. Desktop White on scroll
  if (device === 'Desktop' && type === 'White on scroll') {
    return (
      <div className={classes}>
        <div className={styles.brandScrollContainer}>
          <Logo variant="icon" color="default" className={styles.brandScroll} />
        </div>
        {showVoices && (
          <div className={styles.menuVoicesContainerScroll}>
            <div className={styles.menuVoice}>
              <p className={styles.menuVoiceText}>ST. JAMES WAY</p>
            </div>
            <div className={styles.menuVoice}>
              <p className={styles.menuVoiceText}>DESTINATIONS</p>
            </div>
            <div className={styles.menuVoice}>
              <p className={styles.menuVoiceText}>trail types</p>
            </div>
            <div className={styles.menuVoice}>
              <p className={styles.menuVoiceText}>about</p>
            </div>
          </div>
        )}
        <div className={styles.containerScroll}>
          <div className={styles.chatButtonScroll}>
            <div className={styles.chatButtonIcon}>
              <img alt="" className={styles.chatButtonIconImg} src={imgWhatsappWhiteScroll} />
            </div>
            <div className={styles.chatButtonTextScroll}>
              <p className={styles.chatButtonTextPScroll}>CHAT WITH US</p>
              <div className={styles.chatButtonTextIcon}>
                <img alt="" className={styles.chatButtonTextIconImg} src={imgViewAllTrailsWhite} />
              </div>
            </div>
          </div>
          <div className={styles.privateAreaButtonScroll}>
            <div className={styles.privateAreaButtonCTA}>
              <div className={styles.privateAreaButtonIcon}>
                <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserWhiteScroll} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. Desktop Dark on scroll
  if (device === 'Desktop' && type === 'Dark on scroll') {
    return (
      <div className={classes}>
        <div className={styles.brandScrollContainer}>
          <Logo variant="icon" color="dark" className={styles.brandScroll} />
        </div>
        {showVoices && (
          <div className={styles.menuVoicesContainerScroll}>
            <div className={styles.menuVoice}>
              <p className={styles.menuVoiceTextDark}>ST. JAMES WAY</p>
            </div>
            <div className={styles.menuVoice}>
              <p className={styles.menuVoiceTextDark}>DESTINATIONS</p>
            </div>
            <div className={styles.menuVoice}>
              <p className={styles.menuVoiceTextDark}>trail types</p>
            </div>
            <div className={styles.menuVoice}>
              <p className={styles.menuVoiceTextDark}>about</p>
            </div>
          </div>
        )}
        <div className={styles.containerScroll}>
          <div className={styles.chatButtonScroll}>
            <div className={styles.chatButtonIcon}>
              <div className={styles.chatButtonIconInner}>
                <img alt="" className={styles.chatButtonIconImg} src={imgWhatsappDarkScroll} />
              </div>
            </div>
            <div className={styles.chatButtonTextScroll}>
              <p className={styles.chatButtonTextPScrollDark}>CHAT WITH US</p>
              <div className={styles.chatButtonTextIcon}>
                <img alt="" className={styles.chatButtonTextIconImg} src={imgViewAllTrailsDark} />
              </div>
            </div>
          </div>
          <div className={styles.privateAreaButtonScroll}>
            <div className={styles.privateAreaButtonCTADark}>
              <div className={styles.privateAreaButtonIcon}>
                <div className={styles.privateAreaButtonIconInner}>
                  <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserDarkScroll} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. Tablet Default
  if (device === 'Tablet' && type === 'Default') {
    return (
      <div className={classes}>
        <div className={styles.menuButton}>
          <div className={styles.menuButtonIcon}>
            <img alt="" className={styles.menuButtonIconImg} src={imgMenuTabletDefault} />
          </div>
        </div>
        <Logo variant="logoPayoff" color="default" className={styles.brand} />
        <button className={styles.privateAreaButton}>
          <div className={styles.privateAreaButtonCTA}>
            <div className={styles.privateAreaButtonIcon}>
              <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserTabletDefault} />
            </div>
          </div>
        </button>
      </div>
    );
  }

  // 6. Tablet Dark
  if (device === 'Tablet' && type === 'Dark') {
    return (
      <div className={classes}>
        <div className={styles.menuButtonDark}>
          <div className={styles.menuButtonIcon}>
            <div className={styles.menuButtonIconInner}>
              <img alt="" className={styles.menuButtonIconImg} src={imgCloseTabletDark} />
            </div>
          </div>
        </div>
        <Logo variant="logoPayoff" color="dark" className={styles.brand} />
        <button className={styles.privateAreaButton}>
          <div className={styles.privateAreaButtonCTADark}>
            <div className={styles.privateAreaButtonIcon}>
              <div className={styles.privateAreaButtonIconInner}>
                <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserTabletDark} />
              </div>
            </div>
          </div>
        </button>
      </div>
    );
  }

  // 7. Mobile Default
  if (device === 'Mobile' && type === 'Default') {
    return (
      <div className={classes}>
        <div className={styles.menuButton}>
          <div className={styles.menuButtonIcon}>
            <img alt="" className={styles.menuButtonIconImg} src={imgMenuMobileDefault} />
          </div>
        </div>
        <Logo variant="icon" color="default" className={styles.brand} />
        <button className={styles.privateAreaButton}>
          <div className={styles.privateAreaButtonCTA}>
            <div className={styles.privateAreaButtonIcon}>
              <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserMobileDefault} />
            </div>
          </div>
        </button>
      </div>
    );
  }

  // 8. Mobile Dark
  if (device === 'Mobile' && type === 'Dark') {
    return (
      <div className={classes}>
        <div className={styles.menuButtonDark}>
          <div className={styles.menuButtonIcon}>
            <div className={styles.menuButtonIconInner}>
              <img alt="" className={styles.menuButtonIconImg} src={imgCloseMobileDark} />
            </div>
          </div>
        </div>
        <Logo variant="icon" color="dark" className={styles.brand} />
        <button className={styles.privateAreaButton}>
          <div className={styles.privateAreaButtonCTADark}>
            <div className={styles.privateAreaButtonIcon}>
              <div className={styles.privateAreaButtonIconInner}>
                <img alt="" className={styles.privateAreaButtonIconImg} src={imgUserMobileDark} />
              </div>
            </div>
          </div>
        </button>
      </div>
    );
  }

  return null;
};

export default MainMenu;
