import React from 'react';
import { Logo, ExternalLogo } from '../../../components/Logo';
import styles from './page.module.css';

export default function LogosStorybookPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Logo Storybook</h1>
        <p className={styles.subtitle}>Complete design system logos from Figma</p>

        {/* Logo + Payoff Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Logo + Payoff</h2>
          
          <div className={styles.logoGroup}>
            <div className={styles.logoItem}>
              <div className={styles.logoWrapper}>
                <Logo variant="logoPayoff" color="default" />
              </div>
              <span className={styles.logoLabel}>Default (Yellow)</span>
            </div>
            
            <div className={styles.logoItem}>
              <div className={styles.logoWrapperDark}>
                <Logo variant="logoPayoff" color="dark" />
              </div>
              <span className={styles.logoLabel}>Dark (Blue)</span>
            </div>
          </div>
        </section>

        {/* Logo Only Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Logo Only</h2>
          
          <div className={styles.logoGroup}>
            <div className={styles.logoItem}>
              <div className={styles.logoWrapper}>
                <Logo variant="logo" color="default" />
              </div>
              <span className={styles.logoLabel}>Default (Yellow)</span>
            </div>
            
            <div className={styles.logoItem}>
              <div className={styles.logoWrapperDark}>
                <Logo variant="logo" color="dark" />
              </div>
              <span className={styles.logoLabel}>Dark (Blue)</span>
            </div>
          </div>
        </section>

        {/* Icon Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Icon</h2>
          
          <div className={styles.logoGroup}>
            <div className={styles.logoItem}>
              <div className={styles.logoWrapper}>
                <Logo variant="icon" color="default" />
              </div>
              <span className={styles.logoLabel}>Default (Yellow)</span>
            </div>
            
            <div className={styles.logoItem}>
              <div className={styles.logoWrapperDark}>
                <Logo variant="icon" color="dark" />
              </div>
              <span className={styles.logoLabel}>Dark (Blue)</span>
            </div>
          </div>
        </section>

        {/* Only Type Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Only Type</h2>
          
          <div className={styles.logoGroup}>
            <div className={styles.logoItem}>
              <div className={styles.logoWrapper}>
                <Logo variant="onlyType" />
              </div>
              <span className={styles.logoLabel}>White Text</span>
            </div>
          </div>
        </section>

        {/* Sizes Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Different Sizes</h2>
          
          <div className={styles.logoGroup}>
            <div className={styles.logoItem}>
              <div className={styles.logoWrapper} style={{ width: '200px' }}>
                <Logo variant="logoPayoff" color="default" />
              </div>
              <span className={styles.logoLabel}>200px width</span>
            </div>
            
            <div className={styles.logoItem}>
              <div className={styles.logoWrapper} style={{ width: '150px' }}>
                <Logo variant="logoPayoff" color="default" />
              </div>
              <span className={styles.logoLabel}>150px width</span>
            </div>
            
            <div className={styles.logoItem}>
              <div className={styles.logoWrapper} style={{ width: '100px' }}>
                <Logo variant="logoPayoff" color="default" />
              </div>
              <span className={styles.logoLabel}>100px width</span>
            </div>
          </div>
        </section>

        {/* External Logos - Media Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>External Logos - Media</h2>
          
          <div className={styles.logoGroup}>
            <div className={styles.logoItem}>
              <ExternalLogo type="Media" name="televisionDeGalicia" />
              <span className={styles.logoLabel}>Televisión de Galicia</span>
            </div>
            
            <div className={styles.logoItem}>
              <ExternalLogo type="Media" name="laRepubblica" />
              <span className={styles.logoLabel}>La Repubblica</span>
            </div>
            
            <div className={styles.logoItem}>
              <ExternalLogo type="Media" name="meridianiCammini" />
              <span className={styles.logoLabel}>Meridiani Cammini</span>
            </div>
            
            <div className={styles.logoItem}>
              <ExternalLogo type="Media" name="corriereDellaSera" />
              <span className={styles.logoLabel}>Corriere della Sera</span>
            </div>
          </div>
        </section>

        {/* External Logos - Certification Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>External Logos - Certification</h2>
          
          <div className={styles.logoGroup}>
            <div className={styles.logoItem}>
              <ExternalLogo type="Certification" name="calidadTuristica" />
              <span className={styles.logoLabel}>Calidad Turística</span>
            </div>
            
            <div className={styles.logoItem}>
              <ExternalLogo type="Certification" name="japanEndlessDiscovery" />
              <span className={styles.logoLabel}>Japan Endless Discovery</span>
            </div>
            
            <div className={styles.logoItem}>
              <ExternalLogo type="Certification" name="eccellenzeInDigitale" />
              <span className={styles.logoLabel}>Eccellenze in Digitale</span>
            </div>
            
            <div className={styles.logoItem}>
              <ExternalLogo type="Certification" name="televisionDeGalicia" />
              <span className={styles.logoLabel}>Televisión de Galicia</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
