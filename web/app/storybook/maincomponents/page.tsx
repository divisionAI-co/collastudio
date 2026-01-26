import React from 'react';
import { CarouselDestination, ProductCarousel } from '../../../components/MainComponents';
import styles from './page.module.css';

export default function MainComponentsStorybookPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>MainComponents Storybook</h1>
        <p className={styles.subtitle}>Complete design system main components and carousels from Figma</p>

        {/* Carousel Destination Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Carousel Destination</h2>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Default</h3>
            <div className={styles.componentRow}>
              <CarouselDestination />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Custom Category and Title</h3>
            <div className={styles.componentRow}>
              <CarouselDestination
                category="FEATURED"
                title="Discover amazing destinations around the world"
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Custom Destinations</h3>
            <div className={styles.componentRow}>
              <CarouselDestination
                destinations={[
                  { name: 'Ireland' },
                  { name: 'Scotland' },
                  { name: 'Norway' },
                  { name: 'Iceland' },
                  { name: 'Switzerland' },
                  { name: 'New Zealand' },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Product Carousel Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Product Carousel</h2>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Default</h3>
            <div className={styles.componentRow}>
              <ProductCarousel />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Custom Title</h3>
            <div className={styles.componentRow}>
              <ProductCarousel
                title="Explore amazing trails around the world"
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Without Navigation Buttons</h3>
            <div className={styles.componentRow}>
              <ProductCarousel
                showNavigationButtons={false}
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Custom Cards</h3>
            <div className={styles.componentRow}>
              <ProductCarousel
                cards={[
                  {
                    destination: 'SCOTLAND',
                    title: 'Highland trails through ancient landscapes',
                    price: '650',
                    difficulty: 'Hard',
                    days: '10 Days',
                    km: '150 km',
                  },
                  {
                    destination: 'NORWAY',
                    title: 'Fjord adventures and mountain peaks',
                    price: '720',
                    difficulty: 'Mild',
                    days: '12 Days',
                    km: '180 km',
                  },
                  {
                    destination: 'ICELAND',
                    title: 'Volcanic landscapes and northern lights',
                    price: '890',
                    difficulty: 'Easy',
                    days: '7 Days',
                    km: '95 km',
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
