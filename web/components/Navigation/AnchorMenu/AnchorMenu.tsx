'use client';

import React from 'react';
import styles from './AnchorMenu.module.css';

export interface AnchorMenuItem {
  label: string;
  href?: string;
  active?: boolean;
  showIcon?: boolean;
}

export interface AnchorMenuProps {
  items: AnchorMenuItem[];
  className?: string;
}

// External link icon path from ServiceIcon
const externalLinkIconPath = '/assets/icons/figma/ServiceIcon/ExternalLink.svg';

export const AnchorMenu: React.FC<AnchorMenuProps> = ({
  items,
  className = '',
}) => {
  const classes = [styles.anchorMenu, className].filter(Boolean).join(' ');

  return (
    <nav className={classes} aria-label="Anchor menu">
      <div className={styles.menuContainer}>
        {items.map((item, index) => {
          const isActive = item.active ?? false;
          const itemClasses = [
            styles.menuItem,
            isActive ? styles.menuItemActive : styles.menuItemInactive,
          ].filter(Boolean).join(' ');

          const handleClick = item.href
            ? () => {
                if (item.href) {
                  window.location.href = item.href;
                }
              }
            : undefined;

          const content = (
            <>
              <span className={styles.label}>{item.label}</span>
              {item.showIcon && (
                <span className={styles.icon}>
                  <img 
                    alt="" 
                    className={styles.iconImage} 
                    src={externalLinkIconPath} 
                  />
                </span>
              )}
            </>
          );

          if (isActive) {
            return (
              <button
                key={index}
                className={itemClasses}
                onClick={handleClick}
                type="button"
              >
                {content}
              </button>
            );
          }

          return (
            <div key={index} className={itemClasses}>
              {content}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default AnchorMenu;
