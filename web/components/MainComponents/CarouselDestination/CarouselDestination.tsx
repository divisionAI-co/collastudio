'use client';

import React from 'react';
import styles from './CarouselDestination.module.css';

// Figma asset URLs (Phase 1 - will be replaced with local assets in Phase 2)
const imgDestination = 'https://www.figma.com/api/mcp/asset/f97695a8-9bc1-4eb1-9c01-5a5037d0421e';
const imgIconChevron = 'https://www.figma.com/api/mcp/asset/2bd051f8-41b2-43d8-b150-597de5a272fb';

export interface DestinationItem {
  name: string;
  imageUrl?: string;
}

export interface CarouselDestinationProps {
  category?: string;
  title?: string;
  destinations?: DestinationItem[];
  className?: string;
}

// Local Chevron Icon Component (self-contained within MainComponents layer)
const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className} data-name="Service icon/Chevron right" data-node-id="2005:2037">
      <div className={styles.iconLabel} data-name="Icon lable" data-node-id="2419:28964">
        <img alt="" className={styles.iconImage} src={imgIconChevron} />
      </div>
    </div>
  );
};

// Local Destination Card Component (self-contained within MainComponents layer)
const DestinationCard: React.FC<{ destination: DestinationItem; index: number }> = ({ destination, index }) => {
  const imageUrl = destination.imageUrl || imgDestination;
  const nodeId = index === 0 ? '2023:3540' : index === 1 ? '2023:3549' : index === 2 ? '2023:3558' : index === 3 ? '2023:3567' : index === 4 ? '2023:3576' : index === 5 ? '2023:3585' : index === 6 ? '2202:37052' : '2202:37223';
  const imageNodeId = `I${nodeId};2014:577`;
  const infoNodeId = `I${nodeId};2014:578`;
  const nameNodeId = `I${nodeId};2014:579`;
  const textNodeId = `I${nodeId};2014:581`;

  return (
    <div className={styles.destinationCard} data-name="Destination card" data-node-id={nodeId}>
      <div className={styles.image} data-name="Image" data-node-id={imageNodeId}>
        <div className={styles.imageOverlay} aria-hidden="true">
          <img alt="" className={styles.imageElement} src={imageUrl} />
          <div className={styles.gradientOverlay} />
        </div>
      </div>
      <div className={styles.destinationInfoContainer} data-name="Destination Info Container" data-node-id={infoNodeId}>
        <div className={styles.destinationNameContainer} data-name="Destination Name Container" data-node-id={nameNodeId}>
          <p className={styles.destinationText} data-node-id={textNodeId}>
            {destination.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export function CarouselDestination({
  category = 'DESTINATIONS',
  title = 'Find paths that fits you within 60+ itinerary worldwide ',
  destinations,
  className,
}: CarouselDestinationProps) {
  const defaultDestinations: DestinationItem[] = [
    { name: 'Ireland' },
    { name: 'Ireland' },
    { name: 'Ireland' },
    { name: 'Ireland' },
    { name: 'Ireland' },
    { name: 'Ireland' },
    { name: 'Ireland' },
    { name: 'Ireland' },
  ];

  const displayDestinations = destinations || defaultDestinations;

  return (
    <div
      className={`${styles.carouselDestination} ${className || ''}`}
      data-name="Carousel Destination"
      data-node-id="2023:4044"
    >
      <div className={styles.container}>
        <div className={styles.carouselContainer} data-name="Carousel Container" data-node-id="2023:4042">
          <div className={styles.destinationInfo} data-name="Destination Container" data-node-id="2023:3603">
            <div className={styles.destinationInfoContent} data-name="Destination Info" data-node-id="2023:3604">
              <p className={styles.category} data-node-id="2023:3605">
                {category}
              </p>
              <p className={styles.title} data-node-id="2023:3606">
                {title}
              </p>
            </div>
            <ChevronRightIcon className={styles.chevronIcon} />
          </div>
          <div className={styles.carousel} data-name="Carousel">
            {displayDestinations.map((destination, index) => (
              <DestinationCard key={index} destination={destination} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselDestination;
