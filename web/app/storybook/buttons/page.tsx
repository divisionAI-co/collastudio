import React from 'react';
import {
  Button,
  MenuVoice,
  LanguageButton,
  SmallLink,
  UnderlinedLink,
  FatMenuVoice,
  LanguageSelector,
  DifficultSelector,
  PrivateAreaButton,
  FilterButton,
  RoundedCTA,
} from '../../../components/Button';
import styles from './page.module.css';

export default function ButtonsStorybookPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Button Storybook</h1>
        <p className={styles.subtitle}>Complete design system buttons from Figma</p>

        {/* CTA Buttons Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>CTA Buttons</h2>
          
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Main Buttons - White</h3>
            <div className={styles.buttonRow}>
              <Button type="Main" color="White" state="Off" text="CREATE YOUR OWN" />
              <Button type="Main" color="White" state="On" text="CREATE YOUR OWN" />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Main Buttons - Yellow</h3>
            <div className={styles.buttonRow}>
              <Button type="Main" color="Yellow" state="Off" text="CREATE YOUR OWN" />
              <Button type="Main" color="Yellow" state="On" text="CREATE YOUR OWN" />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Main Buttons - Black</h3>
            <div className={styles.buttonRow}>
              <Button type="Main" color="Black" state="Off" text="CREATE YOUR OWN" />
              <Button type="Main" color="Black" state="On" text="CREATE YOUR OWN" />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Secondary Buttons - White</h3>
            <div className={styles.buttonRow}>
              <Button type="Secondary" color="White" state="Off" text="CREATE YOUR OWN" />
              <Button type="Secondary" color="White" state="On" text="CREATE YOUR OWN" />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Secondary Buttons - Yellow</h3>
            <div className={styles.buttonRow}>
              <Button type="Secondary" color="Yellow" state="Off" text="CREATE YOUR OWN" />
              <Button type="Secondary" color="Yellow" state="On" text="CREATE YOUR OWN" />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Secondary Buttons - Black</h3>
            <div className={styles.buttonRow}>
              <Button type="Secondary" color="Black" state="Off" text="CREATE YOUR OWN" />
              <Button type="Secondary" color="Black" state="On" text="CREATE YOUR OWN" />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Tertiary Buttons - White</h3>
            <div className={styles.buttonRow}>
              <Button type="Tertiary" color="White" state="Off" text="CREATE YOUR OWN" />
              <Button type="Tertiary" color="White" state="On" text="CREATE YOUR OWN" />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Tertiary Buttons - Yellow</h3>
            <div className={styles.buttonRow}>
              <Button type="Tertiary" color="Yellow" state="Off" text="CREATE YOUR OWN" />
              <Button type="Tertiary" color="Yellow" state="On" text="CREATE YOUR OWN" />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Tertiary Buttons - Black</h3>
            <div className={styles.buttonRow}>
              <Button type="Tertiary" color="Black" state="Off" text="CREATE YOUR OWN" />
              <Button type="Tertiary" color="Black" state="On" text="CREATE YOUR OWN" />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Without Icons</h3>
            <div className={styles.buttonRow}>
              <Button type="Main" color="White" state="On" text="BUTTON TEXT" showIconLeft={false} showIconRight={false} />
              <Button type="Secondary" color="Yellow" state="On" text="BUTTON TEXT" showIconLeft={false} showIconRight={false} />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Disabled States</h3>
            <div className={styles.buttonRow}>
              <Button type="Main" color="White" state="On" text="DISABLED" disabled />
              <Button type="Secondary" color="Yellow" state="On" text="DISABLED" disabled />
              <Button type="Tertiary" color="Black" state="On" text="DISABLED" disabled />
            </div>
          </div>
        </section>

        {/* Menu Voice Buttons */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Menu Voice Buttons</h2>
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>States</h3>
            <div className={styles.buttonRow}>
              <MenuVoice labelText="DESTINATION" state="Off" />
              <MenuVoice labelText="DESTINATION" state="Over" />
              <MenuVoice labelText="DESTINATION" state="On" />
            </div>
          </div>
        </section>

        {/* Language Button */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Language Button</h2>
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>States</h3>
            <div className={styles.buttonRow}>
              <LanguageButton text="ENG | $" isActive={false} />
              <LanguageButton text="ENG | $" isActive={true} />
            </div>
          </div>
        </section>

        {/* Small Links */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Small Links</h2>
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>States</h3>
            <div className={styles.buttonRow}>
              <SmallLink text="CAI Partnership" isActive={true} />
              <SmallLink text="CAI Partnership" isActive={false} />
            </div>
          </div>
        </section>

        {/* Underlined Links */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Underlined Links</h2>
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>States</h3>
            <div className={styles.buttonRow}>
              <UnderlinedLink text="CAI Partnership" isActive={true} />
              <UnderlinedLink text="CAI Partnership" isActive={false} />
            </div>
          </div>
        </section>

        {/* Fat Menu Voice */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Fat Menu Voice</h2>
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>States</h3>
            <div className={styles.buttonRow}>
              <FatMenuVoice label="Easy" number="(13)" isActive={false} />
              <FatMenuVoice label="Easy" number="(13)" isActive={true} />
            </div>
          </div>
        </section>

        {/* Language Selector */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Language Selector</h2>
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Dropdown</h3>
            <div className={styles.buttonRow}>
              <LanguageSelector />
            </div>
          </div>
        </section>

        {/* Difficult Selector */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Difficult Selector</h2>
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Difficulty Levels</h3>
            <div className={styles.buttonRow}>
              <DifficultSelector selected="Easy" showStars={true} />
            </div>
            <div className={styles.buttonRow} style={{ marginTop: '1rem' }}>
              <DifficultSelector selected="Mild" showStars={true} />
            </div>
            <div className={styles.buttonRow} style={{ marginTop: '1rem' }}>
              <DifficultSelector selected="Hard" showStars={true} />
            </div>
          </div>
        </section>

        {/* Private Area Button */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Private Area Button</h2>
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Log Type</h3>
            <div className={styles.buttonRow}>
              <PrivateAreaButton type="Log" userName="Tommaso" />
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>No Log Type</h3>
            <div className={styles.buttonRow}>
              <PrivateAreaButton type="No log" />
            </div>
          </div>
        </section>

        {/* Filter Button */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Filter Button</h2>
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>States</h3>
            <div className={styles.buttonRow}>
              <FilterButton label="Easy" state="On" showIcon={true} />
              <FilterButton label="Easy" state="Off" showIcon={true} />
              <FilterButton label="Easy" state="Disabled" showIcon={true} />
            </div>
          </div>
        </section>

        {/* Rounded CTA */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Rounded CTA</h2>
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Big Size</h3>
            <div className={styles.buttonRow}>
              <RoundedCTA size="Big" color="Black" />
              <RoundedCTA size="Big" color="White" />
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <h3 className={styles.groupTitle}>Mid Size</h3>
            <div className={styles.buttonRow}>
              <RoundedCTA size="Mid" color="White" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
