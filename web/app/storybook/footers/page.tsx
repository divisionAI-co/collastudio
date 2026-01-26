import React from 'react';
import { Footer, MarqueeStripe } from '../../../components/Footer';
import styles from './page.module.css';

export default function FootersStorybookPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Footer Storybook</h1>
        <p className={styles.subtitle}>Complete footer components from Figma</p>

        {/* Footer Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Footer</h2>
          
          <div className={styles.footerGroup}>
            <div className={styles.footerItem}>
              <div className={styles.footerWrapper}>
                <Footer />
              </div>
              <span className={styles.footerLabel}>Default Footer</span>
            </div>
          </div>
        </section>

        {/* Marquee Stripe Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Marquee Stripe</h2>
          
          <div className={styles.marqueeGroup}>
            <div className={styles.marqueeItem}>
              <div className={styles.marqueeWrapper}>
                <MarqueeStripe title="Talking about Wayure" />
              </div>
              <span className={styles.marqueeLabel}>Default Title</span>
            </div>
            
            <div className={styles.marqueeItem}>
              <div className={styles.marqueeWrapper}>
                <MarqueeStripe title="Featured in" />
              </div>
              <span className={styles.marqueeLabel}>Custom Title</span>
            </div>
          </div>
        </section>

        {/* Combined Footer with Marquee */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Complete Footer Layout</h2>
          
          <div className={styles.completeFooterGroup}>
            <div className={styles.completeFooterItem}>
              <div className={styles.completeFooterWrapper}>
                <MarqueeStripe title="Talking about Wayure" />
                <Footer />
              </div>
              <span className={styles.completeFooterLabel}>Full Footer with Marquee</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
