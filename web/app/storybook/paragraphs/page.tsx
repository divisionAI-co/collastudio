'use client';

import React, { useState } from 'react';
import {
  ExpandableBodytext,
  Paragraph,
  EditorialParagraph,
  BigCitation,
  TextBoxOnImage,
  IconInfo,
  HotelDetails,
  Plus,
  Frame,
  TravelCarousel,
} from '@/components/Paragraphs';
import styles from './page.module.css';

export default function ParagraphsPage() {
  const [expandableState, setExpandableState] = useState<'Off' | 'On'>('Off');
  const [paragraphState, setParagraphState] = useState<'Off' | 'On'>('Off');

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Paragraphs Components</h1>
        <p className={styles.subtitle}>Complete design system paragraphs from Figma</p>

        {/* ExpandableBodytext Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>ExpandableBodytext</h2>
          <div className={styles.componentGroup}>
            <div className={styles.componentItem}>
              <h3 className={styles.componentTitle}>State: {expandableState}</h3>
              <ExpandableBodytext
                state={expandableState}
                onToggle={() => setExpandableState(expandableState === 'Off' ? 'On' : 'Off')}
              />
            </div>
          </div>
        </section>

        {/* Paragraph Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Paragraph</h2>
          <div className={styles.componentGroup}>
            <div className={styles.componentItem}>
              <h3 className={styles.componentTitle}>Property 1: {paragraphState}</h3>
              <Paragraph
                property1={paragraphState}
                onExpandToggle={() => setParagraphState(paragraphState === 'Off' ? 'On' : 'Off')}
              />
            </div>
          </div>
        </section>

        {/* EditorialParagraph Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>EditorialParagraph</h2>
          <div className={styles.componentGroup}>
            <div className={styles.componentItem}>
              <h3 className={styles.componentTitle}>Orientation: Left</h3>
              <div className={styles.editorialContainer}>
                <EditorialParagraph orientation="Left" />
              </div>
            </div>
            <div className={styles.componentItem}>
              <h3 className={styles.componentTitle}>Orientation: Right</h3>
              <div className={styles.editorialContainer}>
                <EditorialParagraph orientation="Right" />
              </div>
            </div>
          </div>
        </section>

        {/* BigCitation Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>BigCitation</h2>
          <div className={styles.componentGroup}>
            <div className={styles.componentItem}>
              <BigCitation />
            </div>
          </div>
        </section>

        {/* TextBoxOnImage Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>TextBoxOnImage</h2>
          <div className={styles.componentGroup}>
            <div className={styles.componentItem}>
              <div className={styles.textBoxContainer}>
                <TextBoxOnImage />
              </div>
            </div>
          </div>
        </section>

        {/* IconInfo Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>IconInfo</h2>
          <div className={styles.componentGroup}>
            <div className={styles.componentItem}>
              <IconInfo />
            </div>
          </div>
        </section>

        {/* HotelDetails Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>HotelDetails</h2>
          <div className={styles.componentGroup}>
            <div className={styles.componentItem}>
              <HotelDetails />
            </div>
          </div>
        </section>

        {/* Plus Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Plus</h2>
          <div className={styles.componentGroup}>
            <div className={styles.componentItem}>
              <div className={styles.plusContainer}>
                <Plus />
              </div>
            </div>
          </div>
        </section>

        {/* Frame Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Frame</h2>
          <div className={styles.componentGroup}>
            <div className={styles.componentItem}>
              <Frame />
            </div>
          </div>
        </section>

        {/* TravelCarousel Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>TravelCarousel</h2>
          <div className={styles.componentGroup}>
            <div className={`${styles.componentItem} ${styles.travelCarouselWrapper}`}>
              <TravelCarousel />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
