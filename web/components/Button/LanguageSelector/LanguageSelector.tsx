'use client';

import React, { useState } from 'react';
import styles from './LanguageSelector.module.css';

export interface Language {
  code: string;
  name: string;
  currency: string;
}

const languages: Language[] = [
  { code: 'ITA', name: 'ITA', currency: '€' },
  { code: 'FRA', name: 'FRA', currency: '€' },
  { code: 'DEU', name: 'DEU', currency: '€' },
  { code: 'ESP', name: 'ESP', currency: '€' },
  { code: 'ENG', name: 'ENG', currency: '£' },
];

export interface LanguageSelectorProps {
  defaultLanguage?: Language;
  onLanguageChange?: (language: Language) => void;
  className?: string;
}

// Simple flag icon placeholder
const FlagIcon: React.FC<{ language?: string }> = ({ language = 'ENG' }) => (
  <div className={styles.flagIcon}>
    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="19" height="14" rx="1" fill="#BD0000" />
      <rect x="0" y="0" width="19" height="4.67" fill="#FFFFFF" />
      <rect x="0" y="9.33" width="19" height="4.67" fill="#FFFFFF" />
    </svg>
  </div>
);

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  defaultLanguage = languages[4], // ENG
  onLanguageChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(defaultLanguage);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    onLanguageChange?.(language);
  };

  const classes = [
    styles.languageSelector,
    isOpen ? styles.open : styles.closed,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <button className={styles.mainButton} onClick={handleToggle}>
        <FlagIcon language={selectedLanguage.code} />
        <span className={styles.text}>
          {selectedLanguage.name} | {selectedLanguage.currency}
        </span>
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={styles.option}
              onClick={() => handleSelect(lang)}
            >
              <FlagIcon language={lang.code} />
              <span className={styles.text}>
                {lang.name} | {lang.currency}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
