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
    name: 'Banners',
    description: 'Banner components including Big and Small variants, and Newsletter banners',
    route: '/storybook/banners',
    category: 'Display',
  },
  {
    name: 'Cards',
    description: 'Card components including destination cards, travel cards, blog cards, and more',
    route: '/storybook/cards',
    category: 'Display',
  },
  {
    name: 'Labels',
    description: 'Review scores, badges, and travel specification labels',
    route: '/storybook/labels',
    category: 'Display',
  },
  {
    name: 'Tooltip',
    description: 'Tooltip components with different positions (Up, Down, Left, Right)',
    route: '/storybook/tooltip',
    category: 'Interactive',
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
  {
    name: 'Footers',
    description: 'Footer components including main footer and marquee stripe',
    route: '/storybook/footers',
    category: 'Layout',
  },
  {
    name: 'MainComponents',
    description: 'Main component layer including carousels and complex composite components',
    route: '/storybook/maincomponents',
    category: 'Layout',
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
          <p className={styles.totalComponents}>
            Total Components: <strong>{components.length}</strong>
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
                  {component.name === 'MainComponents' ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="7"
                        height="7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="14"
                        y="3"
                        width="7"
                        height="7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="3"
                        y="14"
                        width="7"
                        height="7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="14"
                        y="14"
                        width="7"
                        height="7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
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
                  )}
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
      </div>
    </main>
  );
}
