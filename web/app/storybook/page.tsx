'use client';

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

interface ComponentCard {
  name: string;
  description: string;
  route: string;
  icon?: string;
  category: string;
}

const components: ComponentCard[] = [
  {
    name: 'Buttons',
    description: 'Complete design system buttons including CTA, menu voices, language selectors, and more',
    route: '/storybook/buttons',
    category: 'Interactive',
  },
  {
    name: 'Labels',
    description: 'Review scores, badges, and travel specification labels',
    route: '/storybook/labels',
    category: 'Display',
  },
  {
    name: 'Icons',
    description: 'Icon library including stars, flags, service icons, and difficulty ratings',
    route: '/storybook/icons',
    category: 'Visual',
  },
  {
    name: 'Navigation',
    description: 'Main menus, breadcrumbs, anchor menus, and navigation components',
    route: '/storybook/navigation',
    category: 'Navigation',
  },
  {
    name: 'Menus',
    description: 'Fat menus, private area menus, and menu variations',
    route: '/storybook/menus',
    category: 'Navigation',
  },
  {
    name: 'Paragraphs',
    description: 'Text components including citations, editorial paragraphs, and expandable content',
    route: '/storybook/paragraphs',
    category: 'Content',
  },
  {
    name: 'Background Graphics',
    description: 'Illustrations, vectors, maps, and background graphic elements',
    route: '/storybook/background-graphics',
    category: 'Visual',
  },
  {
    name: 'Logos',
    description: 'Logo variations and external logo components',
    route: '/storybook/logos',
    category: 'Brand',
  },
  {
    name: 'Breadcrumb',
    description: 'Breadcrumb navigation components',
    route: '/storybook/breadcrumb',
    category: 'Navigation',
  },
];

export default function StorybookDashboard() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Storybook Dashboard</h1>
          <p className={styles.subtitle}>
            Browse and explore all UI components from the design system
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {components.map((component) => (
            <Link
              key={component.name}
              href={component.route}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className={styles.cardCategory}>{component.category}</span>
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{component.name}</h2>
                <p className={styles.cardDescription}>{component.description}</p>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.cardLink}>
                  View Components
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Total Components: <strong>{components.length}</strong>
          </p>
        </div>
      </div>
    </main>
  );
}
