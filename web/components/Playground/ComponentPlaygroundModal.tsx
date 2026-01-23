'use client';

import React, { useState, ReactNode } from 'react';
import styles from './ComponentPlaygroundModal.module.css';

export interface ControlConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'boolean' | 'select' | 'textarea';
  defaultValue?: string | number | boolean;
  options?: { label: string; value: string | number }[];
  placeholder?: string;
}

export interface ComponentPlaygroundModalProps {
  title: string;
  component: (props: Record<string, any>) => ReactNode;
  controls: ControlConfig[];
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function ComponentPlaygroundModal({
  title,
  component,
  controls,
  isOpen,
  onClose,
  className,
}: ComponentPlaygroundModalProps) {
  const [controlValues, setControlValues] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    controls.forEach((control) => {
      initial[control.name] = control.defaultValue ?? 
        (control.type === 'boolean' ? false : 
         control.type === 'number' ? 0 : 
         control.type === 'textarea' ? '' : '');
    });
    return initial;
  });

  const handleControlChange = (name: string, value: any) => {
    setControlValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    const reset: Record<string, any> = {};
    controls.forEach((control) => {
      reset[control.name] = control.defaultValue ?? 
        (control.type === 'boolean' ? false : 
         control.type === 'number' ? 0 : 
         control.type === 'textarea' ? '' : '');
    });
    setControlValues(reset);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={`${styles.modal} ${className || ''}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <button 
            className={styles.closeButton} 
            aria-label="Close"
            onClick={onClose}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.previewArea}>
            <div className={styles.previewContainer}>
              {component(controlValues)}
            </div>
          </div>
          <div className={styles.controlsPanel}>
            <div className={styles.controlsHeader}>
              <h2 className={styles.controlsTitle}>{title}</h2>
              <button className={styles.refreshButton} onClick={handleReset} aria-label="Reset">
                <img 
                  src="/assets/icons/figma/ServiceIcon/ServiceIconNew/Switch.svg" 
                  alt="Reset" 
                  className={styles.refreshIcon}
                />
              </button>
            </div>
            <div className={styles.controlsList}>
              {controls.map((control) => (
                <div key={control.name} className={styles.controlItem}>
                  <label className={styles.controlLabel}>{control.label}</label>
                  {control.type === 'boolean' && (
                    <div className={styles.toggleWrapper}>
                      <button
                        className={`${styles.toggle} ${controlValues[control.name] ? styles.toggleOn : styles.toggleOff}`}
                        onClick={() => handleControlChange(control.name, !controlValues[control.name])}
                        aria-label={`Toggle ${control.label}`}
                      >
                        <span className={styles.toggleThumb} />
                      </button>
                      <span className={styles.toggleLabel}>
                        {controlValues[control.name] ? 'On' : 'Off'}
                      </span>
                    </div>
                  )}
                  {control.type === 'select' && (
                    <select
                      className={styles.select}
                      value={controlValues[control.name] ?? control.defaultValue ?? ''}
                      onChange={(e) => {
                        const value = e.target.value;
                        const convertedValue = value === 'true' ? true : value === 'false' ? false : value;
                        handleControlChange(control.name, convertedValue);
                      }}
                    >
                      {control.options?.map((option) => (
                        <option key={String(option.value)} value={String(option.value)}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                  {control.type === 'text' && (
                    <input
                      type="text"
                      className={styles.input}
                      value={controlValues[control.name] || ''}
                      onChange={(e) => handleControlChange(control.name, e.target.value)}
                      placeholder={control.placeholder}
                    />
                  )}
                  {control.type === 'number' && (
                    <input
                      type="number"
                      className={styles.input}
                      value={controlValues[control.name] || ''}
                      onChange={(e) => handleControlChange(control.name, e.target.value)}
                      placeholder={control.placeholder}
                    />
                  )}
                  {control.type === 'textarea' && (
                    <textarea
                      className={styles.textarea}
                      value={controlValues[control.name] || ''}
                      onChange={(e) => handleControlChange(control.name, e.target.value)}
                      placeholder={control.placeholder}
                      rows={4}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className={styles.variableModes}>
              <h3 className={styles.variableModesTitle}>Variable modes</h3>
              <div className={styles.controlItem}>
                <label className={styles.controlLabel}>Wayure Variables</label>
                <select className={styles.select} defaultValue="auto">
                  <option value="auto">Auto (Desktop)</option>
                  <option value="mobile">Mobile</option>
                  <option value="tablet">Tablet</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentPlaygroundModal;
