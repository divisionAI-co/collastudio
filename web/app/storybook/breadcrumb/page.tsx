import React from 'react';
import styles from './page.module.css';
import { Breadcrumb, AnchorMenu } from '@/components/Navigation';
import type { BreadcrumbItem, AnchorMenuItem } from '@/components/Navigation';

export default function BreadcrumbPage() {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Saint James Way', href: '#' },
    { label: 'All trails', href: '#' },
    { label: 'Portuguese way From vigo to Lisbon' },
  ];

  const breadcrumbItems2Levels: BreadcrumbItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Saint James Way' },
  ];

  const breadcrumbItems3Levels: BreadcrumbItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Saint James Way', href: '#' },
    { label: 'All trails' },
  ];

  const anchorMenuItems: AnchorMenuItem[] = [
    { label: 'Overview', active: true, showIcon: false },
    { label: 'Route', active: false, showIcon: true },
    { label: 'Accomodations', active: false, showIcon: true },
    { label: 'Included services', active: false, showIcon: true },
    { label: 'Reviews', active: false, showIcon: true },
    { label: 'Faq', active: false, showIcon: true },
  ];

  const anchorMenuItemsWithIcon: AnchorMenuItem[] = [
    { label: 'Overview', active: true, showIcon: false },
    { label: 'Route', active: false, showIcon: true },
    { label: 'Accomodations', active: false, showIcon: true },
    { label: 'Included services', active: false, showIcon: true },
    { label: 'Reviews', active: false, showIcon: true },
    { label: 'Faq', active: false, showIcon: true },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Breadcrumb Component</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Breadcrumb</h2>
        <div className={styles.group}>
          <div className={styles.item}>
            <h3>4 Levels</h3>
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className={styles.item}>
            <h3>2 Levels</h3>
            <Breadcrumb items={breadcrumbItems2Levels} />
          </div>
          <div className={styles.item}>
            <h3>3 Levels</h3>
            <Breadcrumb items={breadcrumbItems3Levels} />
          </div>
        </div>
      </section>

      {/* Anchor Menu */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Anchor Menu</h2>
        <div className={styles.group}>
          <div className={styles.item}>
            <h3>Default (Overview Active)</h3>
            <AnchorMenu items={anchorMenuItems} />
          </div>
          <div className={styles.item}>
            <h3>With Icons</h3>
            <AnchorMenu items={anchorMenuItemsWithIcon} />
          </div>
          <div className={styles.item}>
            <h3>Different Active Item</h3>
            <AnchorMenu
              items={anchorMenuItems.map((item, index) => ({
                ...item,
                active: index === 2, // Accomodations active
              }))}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
