'use client';

import React from 'react';
import styles from './MapWaypoint.module.css';

// Figma image asset
const imgMapWaypoint = '/assets/Card/figma/MapWaypoint/imgMapWaypoint.png';

export interface MapWaypointProps {
  className?: string;
}

export function MapWaypoint({ className }: MapWaypointProps) {
  return (
    <div
      className={`${styles.mapWaypoint} ${className || ''}`}
      data-name="Map Waypoint"
      data-node-id="2301:38133"
    >
      <img
        alt=""
        className={styles.mapImage}
        src={imgMapWaypoint}
      />
    </div>
  );
}
