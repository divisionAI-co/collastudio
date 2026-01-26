import React from 'react';
import { Banner, Newsletter } from '../../../components/Banners';
import styles from './page.module.css';

export default function BannersStorybookPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Banners Storybook</h1>
        <p className={styles.subtitle}>Complete design system banners from Figma</p>

        {/* Banner Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Banner</h2>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Type: Big</h3>
            <div className={styles.componentRow}>
              <Banner
                type="Big"
                showTags={true}
                showCta={true}
                title="Japan Expedition through the Nakasendo Trail - The samurai way"
                date="18 - 24 April 2026"
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Type: Big (No Tags, No CTA)</h3>
            <div className={styles.componentRow}>
              <Banner
                type="Big"
                showTags={false}
                showCta={false}
                title="Japan Expedition through the Nakasendo Trail - The samurai way"
                date="18 - 24 April 2026"
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Type: Small</h3>
            <div className={styles.componentRow}>
              <Banner
                type="Small"
                showTags={true}
                showCta={true}
                title="Japan Expedition through the Nakasendo Trail - The samurai way"
                text="Japan Expedition through the Nakasendo Trail - The samurai way"
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Type: Small (No Tags, No CTA)</h3>
            <div className={styles.componentRow}>
              <Banner
                type="Small"
                showTags={false}
                showCta={false}
                title="Japan Expedition through the Nakasendo Trail - The samurai way"
                text="Japan Expedition through the Nakasendo Trail - The samurai way"
              />
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Newsletter</h2>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Default</h3>
            <div className={styles.componentRow}>
              <Newsletter
                title="Inspiration funded! Get the 2026 Travel Guide, straight to your inbox"
                privacyText="We will use this email to create your Wayure account, if you do not already have one."
                inputFieldNewsletter={true}
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Without Input Field</h3>
            <div className={styles.componentRow}>
              <Newsletter
                title="Inspiration funded! Get the 2026 Travel Guide, straight to your inbox"
                privacyText="We will use this email to create your Wayure account, if you do not already have one."
                inputFieldNewsletter={false}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
