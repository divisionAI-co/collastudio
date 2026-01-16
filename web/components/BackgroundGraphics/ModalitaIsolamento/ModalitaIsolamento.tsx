'use client';

import React from 'react';
import styles from './ModalitaIsolamento.module.css';

// Figma asset URL
const imgModalitaIsolamento = 'https://www.figma.com/api/mcp/asset/5a85fa09-4de0-4b0f-a822-a817adc6f0bf';

export interface ModalitaIsolamentoProps {
  className?: string;
}

export const ModalitaIsolamento: React.FC<ModalitaIsolamentoProps> = ({ 
  className = '' 
}) => {
  const classes = [styles.modalitaIsolamento, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <img 
        className={styles.image} 
        alt="Modalità Isolamento" 
        src={imgModalitaIsolamento} 
      />
    </div>
  );
};

export default ModalitaIsolamento;
