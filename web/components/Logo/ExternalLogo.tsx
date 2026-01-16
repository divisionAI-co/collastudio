'use client';

import React from 'react';
import styles from './ExternalLogo.module.css';

// Figma asset URLs (valid for 7 days)
const externalLogoAssets = {
  // Media type
  mediaTelevisionDeGalicia: 'https://www.figma.com/api/mcp/asset/9f656552-67c5-4086-86eb-d084919d826f',
  mediaLaRepubblica: 'https://www.figma.com/api/mcp/asset/cd8b26c7-febb-456c-8921-bef2266deae7',
  mediaMeridianiCammini: 'https://www.figma.com/api/mcp/asset/9c48f996-0f0c-4464-959e-759c8dc32191',
  mediaCorriereDellaSera: 'https://www.figma.com/api/mcp/asset/b8a15630-0dc9-486f-a8ba-365117953dea',
  
  // Certification type - Using latest asset URLs from Figma
  certificationCalidadTuristica: 'https://www.figma.com/api/mcp/asset/7ce861da-6527-4c36-b456-5a7b98664b40',
  certificationJapanEndlessDiscovery: 'https://www.figma.com/api/mcp/asset/70333ba1-ec13-4603-8971-b4267183ab82',
  certificationEccellenzeInDigitale: 'https://www.figma.com/api/mcp/asset/281c8557-80ea-419d-8551-6d7211ed54b4',
  certificationTelevisionDeGalicia: 'https://www.figma.com/api/mcp/asset/c6abd8d6-c184-414f-9727-88683d43d640',
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
