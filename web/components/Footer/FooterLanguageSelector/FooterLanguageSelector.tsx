'use client';

import React from 'react';
import styles from './FooterLanguageSelector.module.css';
import { Flag } from '../../Icon/Flag';

export type FooterLanguage = 'ITA' | 'ENG' | 'FRA' | 'DEU' | 'ESP';

export interface FooterLanguageSelectorProps {
  language?: FooterLanguage;
  className?: string;
}

const languageData: Record<FooterLanguage, { name: string; currency: string }> = {
  ITA: { name: 'ITA', currency: '€' },
  ENG: { name: 'ENG', currency: '£' },
  FRA: { name: 'FRA', currency: '€' },
  DEU: { name: 'DEU', currency: '€' },
  ESP: { name: 'ESP', currency: '€' },
};

export const FooterLanguageSelector: React.FC<FooterLanguageSelectorProps> = ({
  language = 'ENG',
  className = '',
}) => {
  const classes = [styles.footerLanguageSelector, className].filter(Boolean).join(' ');
  const currentLanguage = languageData[language];

  return (
    <div className={classes} data-node-id="2202:39561">
      <button className={styles.languageButton} data-node-id="2202:39566" data-name="Language button">
        <Flag language={language} className={styles.flag} />
        <p className={styles.text} data-node-id="I2202:39566;2006:1833">
          {currentLanguage.name} | {currentLanguage.currency}
        </p>
      </button>
    </div>
  );
};

export default FooterLanguageSelector;
