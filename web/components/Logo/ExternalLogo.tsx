'use client';

import React from 'react';
import styles from './ExternalLogo.module.css';

// Local external logo assets
const externalLogoAssets = {
  // Media type
  mediaTelevisionDeGalicia: '/assets/logos/figma/ExternalLogo/mediaTelevisionDeGalicia.png',
  mediaLaRepubblica: '/assets/logos/figma/ExternalLogo/mediaLaRepubblica.png',
  mediaMeridianiCammini: '/assets/logos/figma/ExternalLogo/mediaMeridianiCammini.png',
  mediaCorriereDellaSera: '/assets/logos/figma/ExternalLogo/mediaCorriereDellaSera.png',
  
  // Certification type
  certificationCalidadTuristica: '/assets/logos/figma/ExternalLogo/certificationCalidadTuristica.jpg',
  certificationJapanEndlessDiscovery: '/assets/logos/figma/ExternalLogo/certificationJapanEndlessDiscovery.png',
  certificationEccellenzeInDigitale: '/assets/logos/figma/ExternalLogo/certificationEccellenzeInDigitale.jpg',
  certificationTelevisionDeGalicia: '/assets/logos/figma/ExternalLogo/certificationTelevisionDeGalicia.png',
};

export type ExternalLogoType = 'Media' | 'Certification';
export type ExternalLogoName = 
  | 'televisionDeGalicia'
  | 'laRepubblica'
  | 'meridianiCammini'
  | 'corriereDellaSera'
  | 'calidadTuristica'
  | 'japanEndlessDiscovery'
  | 'eccellenzeInDigitale';

export interface ExternalLogoProps {
  type: ExternalLogoType;
  name: ExternalLogoName;
  className?: string;
}

export const ExternalLogo: React.FC<ExternalLogoProps> = ({ 
  type,
  name,
  className = '' 
}) => {
  const classes = [styles.externalLogo, className].filter(Boolean).join(' ');

  const getLogoAsset = (): string => {
    if (type === 'Media') {
      switch (name) {
        case 'televisionDeGalicia':
          return externalLogoAssets.mediaTelevisionDeGalicia;
        case 'laRepubblica':
          return externalLogoAssets.mediaLaRepubblica;
        case 'meridianiCammini':
          return externalLogoAssets.mediaMeridianiCammini;
        case 'corriereDellaSera':
          return externalLogoAssets.mediaCorriereDellaSera;
        default:
          return externalLogoAssets.mediaTelevisionDeGalicia;
      }
    } else {
      switch (name) {
        case 'calidadTuristica':
          return externalLogoAssets.certificationCalidadTuristica;
        case 'japanEndlessDiscovery':
          return externalLogoAssets.certificationJapanEndlessDiscovery;
        case 'eccellenzeInDigitale':
          return externalLogoAssets.certificationEccellenzeInDigitale;
        case 'televisionDeGalicia':
          return externalLogoAssets.certificationTelevisionDeGalicia;
        default:
          return externalLogoAssets.certificationCalidadTuristica;
      }
    }
  };

  const getLogoStyles = (): React.CSSProperties => {
    const isMeridianiCammini = type === 'Media' && name === 'meridianiCammini';
    const isCalidadTuristica = type === 'Certification' && name === 'calidadTuristica';
    const isFullSize = type === 'Certification' && (name === 'japanEndlessDiscovery' || name === 'eccellenzeInDigitale');

    if (isFullSize) {
      return {
        position: 'absolute',
        inset: '0',
        maxWidth: 'none',
        objectFit: 'contain',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      };
    }

    if (isCalidadTuristica) {
      return {
        position: 'absolute',
        height: '71.11%',
        left: '6.85%',
        maxWidth: 'none',
        top: '14.44%',
        width: '81.09%',
      };
    }

    // Default positioning for most logos
    return {
      position: 'absolute',
      height: '165.06%',
      left: '11.94%',
      maxWidth: 'none',
      top: isMeridianiCammini ? '-33.73%' : '-32.53%',
      width: '76.11%',
    };
  };

  const getContainerStyles = (): React.CSSProperties => {
    return {
      height: '54px',
      position: 'relative',
      width: '189px',
    };
  };

  const isFullSize = type === 'Certification' && (name === 'japanEndlessDiscovery' || name === 'eccellenzeInDigitale');
  const isMeridianiCammini = type === 'Media' && name === 'meridianiCammini';

  return (
    <div className={classes} style={getContainerStyles()}>
      {isFullSize ? (
        <img 
          src={getLogoAsset()} 
          alt={`${type} - ${name}`}
          className={styles.logoImage}
          style={getLogoStyles()}
        />
      ) : (
        <div 
          className={styles.logoWrapper}
          style={{
            mixBlendMode: isMeridianiCammini ? 'multiply' : 'normal',
          }}
        >
          <img 
            src={getLogoAsset()} 
            alt={`${type} - ${name}`}
            className={styles.logoImage}
            style={getLogoStyles()}
          />
        </div>
      )}
    </div>
  );
};

export default ExternalLogo;
