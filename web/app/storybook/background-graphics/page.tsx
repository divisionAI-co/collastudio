import React from 'react';
import styles from './page.module.css';
import {
  Illustration,
  MapLines,
  ModalitaIsolamento,
  Vector,
  IllustrationBlog,
  Invoice,
  Livello,
} from '@/components/BackgroundGraphics';

export default function BackgroundGraphicsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Background Graphics</h1>

      {/* Illustration */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Illustration</h2>
        <div className={styles.group}>
          <div className={styles.item}>
            <h3>Freedom</h3>
            <Illustration variant="Freedom" />
          </div>
          <div className={styles.item}>
            <h3>24H</h3>
            <Illustration variant="24H" />
          </div>
          <div className={styles.item}>
            <h3>Itineraries</h3>
            <Illustration variant="Itineraries" />
          </div>
        </div>
      </section>

      {/* MapLines */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Map Lines</h2>
        <div className={styles.group}>
          <div className={styles.item}>
            <h3>White Type 1</h3>
            <div className={`${styles.mapLinesContainer} ${styles.mapLinesContainerWhite}`}>
              <MapLines color="White" type="1" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>White Type 2</h3>
            <div className={`${styles.mapLinesContainer} ${styles.mapLinesContainerWhite}`}>
              <MapLines color="White" type="2" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>White Type 3</h3>
            <div className={`${styles.mapLinesContainer} ${styles.mapLinesContainerWhite}`}>
              <MapLines color="White" type="3" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Black Type 1</h3>
            <div className={styles.mapLinesContainer}>
              <MapLines color="Black" type="1" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Black Type 2</h3>
            <div className={styles.mapLinesContainer}>
              <MapLines color="Black" type="2" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Black Type 3</h3>
            <div className={styles.mapLinesContainer}>
              <MapLines color="Black" type="3" />
            </div>
          </div>
        </div>
      </section>

      {/* Other Components */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Other Background Graphics</h2>
        <div className={styles.group}>
          <div className={styles.item}>
            <h3>Modalità Isolamento</h3>
            <div className={styles.isolamentoContainer}>
              <ModalitaIsolamento />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Vector</h3>
            <div className={`${styles.vectorContainer} ${styles.vectorContainerDark}`}>
              <Vector />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Illustration Blog</h3>
            <IllustrationBlog />
          </div>
          <div className={styles.item}>
            <h3>Invoice</h3>
            <Invoice />
          </div>
          <div className={styles.item}>
            <h3>Livello 1</h3>
            <div className={styles.livelloContainer}>
              <Livello variant="1" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Livello 2</h3>
            <div className={styles.livelloContainer}>
              <Livello variant="2" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Livello 3</h3>
            <div className={styles.livelloContainer}>
              <Livello variant="3" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
