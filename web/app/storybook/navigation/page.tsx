import React from 'react';
import styles from './page.module.css';
import { NavStatusBar } from '@/components/Navigation';

export default function NavigationPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Navigation Components</h1>

      {/* Nav Status Bar */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Nav Status Bar</h2>
        <div className={styles.group}>
          <div className={styles.item}>
            <h3>Desktop</h3>
            <div className={styles.desktopContainer}>
              <NavStatusBar viewport="desktop" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Tablet</h3>
            <div className={styles.tabletContainer}>
              <NavStatusBar viewport="tablet" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Mobile</h3>
            <div className={styles.mobileContainer}>
              <NavStatusBar viewport="mobile" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
