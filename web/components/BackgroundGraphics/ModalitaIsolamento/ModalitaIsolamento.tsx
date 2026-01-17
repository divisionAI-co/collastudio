'use client';

import React from 'react';
import styles from './ModalitaIsolamento.module.css';

// Local asset path
const imgModalitaIsolamento = '/assets/BackgroundGraphics/figma/ModalitaIsolamento/imgModalitaIsolamento.svg';

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
