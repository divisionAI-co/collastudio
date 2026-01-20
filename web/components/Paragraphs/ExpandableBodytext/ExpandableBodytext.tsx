'use client';

import React from 'react';
import styles from './ExpandableBodytext.module.css';

export type ExpandableBodytextState = 'Off' | 'On';

export interface ExpandableBodytextProps {
  className?: string;
  text?: string;
  state?: ExpandableBodytextState;
  onToggle?: () => void;
}

export function ExpandableBodytext({
  className,
  text = 'Experience the Camino de Santiago effortlessly with the Portuguese Way from Vigo. This scenic 100 km route starts in the vibrant coastal city of Vigo, conveniently located between Spain and Portugal. It provides a smooth introduction to the Camino, unlike the more strenuous French Way or the Tui section. Enjoy the gentle countryside and charming small towns along the way, with manageable daily distances and minimal steep climbs. The journey begins with an easy 16 km stage from Vigo to Redondela, perfect for easing into your pilgrimage.',
  state = 'Off',
  onToggle,
}: ExpandableBodytextProps) {
  const isExpanded = state === 'On';

  return (
    <div
      data-node-id={isExpanded ? '2250:15154' : '2250:15152'}
      className={`${styles.expandableBodytext} ${styles[`state${state}`]} ${className || ''}`}
    >
      <p
        data-node-id="2250:15144"
        className={`${styles.text} ${isExpanded ? styles.textExpanded : styles.textCollapsed}`}
      >
        {text}
      </p>
      <button
        data-node-id="2250:15146"
        className={styles.expandButton}
        onClick={onToggle}
        data-name="Small links"
      >
        <p
          data-node-id="I2250:15146;2202:9879"
          className={styles.expandText}
        >
          {isExpanded ? 'Close' : 'Expand'}
        </p>
      </button>
    </div>
  );
}
