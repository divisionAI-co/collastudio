'use client';

import React from 'react';
import styles from './Invoice.module.css';

// Local asset path
const imgLivello2 = '/assets/BackgroundGraphics/figma/Invoice/imgLivello2.svg';

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
