import React from 'react';
import { Tooltip } from '../../../components/Tooltip';
import styles from './page.module.css';

export default function TooltipStorybookPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Tooltip Storybook</h1>
        <p className={styles.subtitle}>Tooltip components with different positions from Figma</p>

        {/* Tooltip Positions Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tooltip Positions</h2>
          
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Up Position</h3>
            <div className={styles.buttonRow}>
              <Tooltip position="Up" />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Down Position</h3>
            <div className={styles.buttonRow}>
              <Tooltip position="Down" />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Left Position</h3>
            <div className={styles.buttonRow}>
              <Tooltip position="Left" />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Right Position</h3>
            <div className={styles.buttonRow}>
              <Tooltip position="Right" />
            </div>
          </div>
        </section>

        {/* Custom Text Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Custom Text</h2>
          
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>With Custom Text</h3>
            <div className={styles.buttonRow}>
              <Tooltip 
                position="Up" 
                text="This is a custom tooltip message that can be customized."
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
