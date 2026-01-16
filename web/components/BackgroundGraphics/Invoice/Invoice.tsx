'use client';

import React from 'react';
import styles from './Invoice.module.css';

// Figma asset URL
const imgLivello2 = 'https://www.figma.com/api/mcp/asset/63a5a19c-5b01-4473-a8b3-6264b446291f';

export interface InvoiceProps {
  className?: string;
}

export const Invoice: React.FC<InvoiceProps> = ({ 
  className = '' 
}) => {
  const classes = [styles.invoice, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.livello2}>
        <div className={styles.livello2Inner}>
          <img 
            className={styles.image} 
            alt="Invoice" 
            src={imgLivello2} 
          />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
