'use client';

import React from 'react';
import styles from './TeamRole.module.css';

export interface TeamRoleProps {
  number?: string;
  jobTitle?: string;
  showNumber?: boolean;
  className?: string;
}

export function TeamRole({
  number = '1',
  jobTitle = 'Project Manager Intern',
  showNumber = true,
  className,
}: TeamRoleProps) {
  return (
    <div
      className={`${styles.teamRole} ${className || ''}`}
      data-name="Team role"
      data-node-id="2679:42034"
    >
      {showNumber && (
        <p
          className={styles.number}
          data-node-id="2679:42032"
        >
          {number}
        </p>
      )}
      <p
        className={styles.jobTitle}
        data-node-id="2679:42033"
      >
        {jobTitle}
      </p>
    </div>
  );
}
