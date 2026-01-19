import React from 'react';
import styles from './page.module.css';
import { MainMenu, FatMenu, PrivateAreaMenu } from '@/components/Navigation';

export default function MenusPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Menu Components</h1>

      {/* Main Menu */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Main Menu</h2>
        <div className={styles.group}>
          <div className={styles.item}>
            <h3>Desktop - Default</h3>
            <div className={styles.menuContainerDefault}>
              <MainMenu device="Desktop" type="Default" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Desktop - Dark</h3>
            <div className={styles.menuContainerDark}>
              <MainMenu device="Desktop" type="Dark" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Desktop - White on scroll</h3>
            <div className={styles.menuContainerDefault}>
              <MainMenu device="Desktop" type="White on scroll" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Desktop - Dark on scroll</h3>
            <div className={styles.menuContainerDark}>
              <MainMenu device="Desktop" type="Dark on scroll" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Tablet - Default</h3>
            <div className={styles.menuContainerDefault}>
              <MainMenu device="Tablet" type="Default" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Tablet - Dark</h3>
            <div className={styles.menuContainerDark}>
              <MainMenu device="Tablet" type="Dark" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Mobile - Default</h3>
            <div className={styles.menuContainerDefault}>
              <MainMenu device="Mobile" type="Default" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Mobile - Dark</h3>
            <div className={styles.menuContainerDark}>
              <MainMenu device="Mobile" type="Dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Fat Menu */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Fat Menu</h2>
        <div className={styles.group}>
          <div className={styles.item}>
            <h3>State: On</h3>
            <div className={styles.fatMenuContainer}>
              <FatMenu state="On" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>State: Over</h3>
            <div className={styles.fatMenuContainer}>
              <FatMenu state="Over" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>State: Off</h3>
            <div className={styles.fatMenuContainer}>
              <FatMenu state="Off" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>State: Scroll</h3>
            <div className={styles.fatMenuContainer}>
              <FatMenu state="Scroll" />
            </div>
          </div>
        </div>
      </section>

      {/* Private Area Menu */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Private Area Menu</h2>
        <div className={styles.group}>
          <div className={styles.item}>
            <h3>Desktop - Default (Logged Out)</h3>
            <div className={styles.menuContainerDefault}>
              <PrivateAreaMenu device="Desktop" type="Default" isLoggedIn={false} />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Desktop - Default (Logged In)</h3>
            <div className={styles.menuContainerDefault}>
              <PrivateAreaMenu device="Desktop" type="Default" isLoggedIn={true} userName="Tommaso" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Desktop - Dark (Logged Out)</h3>
            <div className={styles.menuContainerDark}>
              <PrivateAreaMenu device="Desktop" type="Dark" isLoggedIn={false} />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Desktop - Dark (Logged In)</h3>
            <div className={styles.menuContainerDark}>
              <PrivateAreaMenu device="Desktop" type="Dark" isLoggedIn={true} userName="Tommaso" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Tablet - Default</h3>
            <div className={styles.menuContainerDefault}>
              <PrivateAreaMenu device="Tablet" type="Default" isLoggedIn={false} />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Tablet - Default (Logged In)</h3>
            <div className={styles.menuContainerDefault}>
              <PrivateAreaMenu device="Tablet" type="Default" isLoggedIn={true} userName="Tommaso" />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Mobile - Default</h3>
            <div className={styles.menuContainerDefault}>
              <PrivateAreaMenu device="Mobile" type="Default" isLoggedIn={false} />
            </div>
          </div>
          <div className={styles.item}>
            <h3>Mobile - Default (Logged In)</h3>
            <div className={styles.menuContainerDefault}>
              <PrivateAreaMenu device="Mobile" type="Default" isLoggedIn={true} userName="Tommaso" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
