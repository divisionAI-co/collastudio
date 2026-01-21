import React from 'react';
import { ReviewScore, Plus, SpecsTravel } from '../../../components/Labels';
import styles from './page.module.css';

export default function LabelsStorybookPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Labels Storybook</h1>
        <p className={styles.subtitle}>Complete design system labels from Figma</p>

        {/* Review Score Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Review Score</h2>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Default</h3>
            <div className={styles.componentRow}>
              <ReviewScore score="4.8" reviews="489" />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Variants</h3>
            <div className={styles.componentRow}>
              <ReviewScore score="4.5" reviews="123" />
            </div>
            <div className={styles.componentRow} style={{ marginTop: '1rem' }}>
              <ReviewScore score="5.0" reviews="1000" />
            </div>
          </div>
        </section>

        {/* Plus Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Plus Label</h2>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Default</h3>
            <div className={styles.componentRow}>
              <Plus text="CURATED TRAILS" />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Variants</h3>
            <div className={styles.componentRow}>
              <Plus text="FEATURED" />
            </div>
            <div className={styles.componentRow} style={{ marginTop: '1rem' }}>
              <Plus text="NEW" />
            </div>
          </div>
        </section>

        {/* Specs Travel Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Specs Travel</h2>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Default</h3>
            <div className={styles.componentRow}>
              <SpecsTravel days="8 Days" km="102 km " showEasy={true} />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Variants</h3>
            <div className={styles.componentRow}>
              <SpecsTravel days="5 Days" km="50 km " showEasy={false} />
            </div>
            <div className={styles.componentRow} style={{ marginTop: '1rem' }}>
              <SpecsTravel days="12 Days" km="250 km " showEasy={true} />
            </div>
          </div>
        </section>

        {/* All Components Together */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>All Labels Together</h2>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Complete Set</h3>
            <div className={styles.componentRow} style={{ flexDirection: 'column', gap: '2rem', alignItems: 'flex-start' }}>
              <Plus text="CURATED TRAILS" />
              <ReviewScore score="4.8" reviews="489" />
              <SpecsTravel days="8 Days" km="102 km " showEasy={true} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
