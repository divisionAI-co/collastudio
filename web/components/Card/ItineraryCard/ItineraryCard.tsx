'use client';

import React, { useState } from 'react';
import { Plus } from '../../Labels';
import { ServiceIcon } from '../../Icon';
import { ExpandableBodytext } from '../../Paragraphs';
import { HotelDetails } from '../HotelDetails';
import { FlightTransferDetails } from '../FlightTransferDetails';
import { MapWaypoint } from '../MapWaypoint';
import styles from './ItineraryCard.module.css';

// Figma image assets
const imgTitle = '/assets/Card/figma/ItineraryCard/imgTitle.png';

export interface ItineraryCardProps {
  date?: string;
  title?: string;
  km?: string;
  hoursWalking?: string;
  elevation?: string;
  showKm?: boolean;
  showFlightTransferDetails?: boolean;
  showHotelDetails?: boolean;
  showElevationContainer?: boolean;
  property1?: boolean;
  className?: string;
  expandableText?: string;
}

export function ItineraryCard({
  date = '02 Novembre',
  title = 'From Vigo to Nigaran',
  km = '1.500',
  hoursWalking = '2',
  elevation = '1.500',
  showKm = true,
  showFlightTransferDetails = true,
  showHotelDetails = true,
  showElevationContainer = true,
  property1: initialProperty1 = true,
  expandableText = 'Experience the Camino de Santiago effortlessly with the Portuguese Way from Vigo. This scenic 100 km route starts in the vibrant coastal city of Vigo, conveniently located between Spain and Portugal. It provides a smooth introduction to the Camino, unlike the more strenuous French Way or the Tui section. Enjoy the gentle countryside and charming small towns along the way, with manageable daily distances and minimal steep climbs. The journey begins with an easy 16 km stage from Vigo to Redondela, perfect for easing into your pilgrimage.',
  className,
}: ItineraryCardProps) {
  const [property1, setProperty1] = useState(initialProperty1);
  const [expandableState, setExpandableState] = useState<'Off' | 'On'>('Off');

  const handleToggle = () => {
    setProperty1(!property1);
  };

  const handleExpandableToggle = () => {
    setExpandableState(expandableState === 'Off' ? 'On' : 'Off');
  };

  const isNotProperty1 = !property1;
  const isProperty1 = property1;

  return (
    <div
      id={isProperty1 ? 'node-2371_34955' : isNotProperty1 ? 'node-2371_35005' : ''}
      className={`${styles.itineraryCard} ${className || ''}`}
    >
      {isProperty1 ? (
        <MapWaypoint className={styles.mapWaypoint} />
      ) : (
        <div
          id="node-2371_35006"
          className={styles.imageOff}
          data-name="Image"
        >
          <img
            className={styles.imageElement}
            alt=""
            src={imgTitle}
          />
        </div>
      )}
      <div
        id={isProperty1 ? 'node-2371_34957' : isNotProperty1 ? 'node-2371_35007' : ''}
        className={`${styles.content} ${isProperty1 ? styles.contentOn : styles.contentOff}`}
      >
        <div
          id={isProperty1 ? 'node-2371_34958' : isNotProperty1 ? 'node-2371_35008' : ''}
          className={styles.titleSection}
          data-name="Title"
        >
          <div
            id={isProperty1 ? 'node-2371_34959' : isNotProperty1 ? 'node-2371_35009' : ''}
            className={styles.tags}
            data-name="Tags"
          >
            <div
              id={isProperty1 ? 'node-2371_34960' : isNotProperty1 ? 'node-2371_35010' : ''}
              className={styles.dayBadge}
              data-name="Plus/On"
            >
              <Plus
                text="DAY 01"
                showStar={false}
                className={styles.plusContent}
                textClassName={styles.dayBadgeText}
              />
            </div>
            <p className={styles.dateText} data-node-id="2371:34961">
              {date}
            </p>
            <button
              onClick={handleToggle}
              className={styles.chevronButton}
              aria-label={isProperty1 ? 'Collapse' : 'Expand'}
            >
              {isProperty1 && (
                <div
                  data-node-id="2371:34962"
                  className={styles.chevronIcon}
                  data-name="Service icon/Chevron up"
                >
                  <ServiceIcon type="ChevronUp" size={17} />
                </div>
              )}
              {isNotProperty1 && (
                <div
                  data-node-id="2371:35012"
                  className={styles.chevronIcon}
                  data-name="Service icon/Chevron down"
                >
                  <ServiceIcon type="ChevronDown" size={17} />
                </div>
              )}
            </button>
          </div>
          <div
            id={isProperty1 ? 'node-2371_34963' : isNotProperty1 ? 'node-2371_35013' : ''}
            className={styles.titleContainer}
            data-name="Title Container"
          >
            {isProperty1 && (
              <p className={styles.titleText} data-node-id="2371:34964">
                {title}
              </p>
            )}
            <div
              id={isProperty1 ? 'node-2371_34965' : isNotProperty1 ? 'node-3196_88348' : ''}
              className={styles.metricsContainer}
              data-name="Metrics Container"
            >
              {showKm && (
                <div
                  className={styles.distanceContainer}
                  data-name="Distance Container"
                  data-node-id="3196:87730"
                >
                  <div
                    className={styles.distanceIcon}
                    data-name="Distance Icon"
                    data-node-id="3196:87731"
                  >
                    <ServiceIcon type="Kilometers" size={17} iconSize={14} />
                  </div>
                  <div
                    className={styles.length}
                    data-name="Lenght"
                    data-node-id="3196:87857"
                  >
                    <p className={styles.metricText} data-node-id="3196:87858">
                      {km}
                    </p>
                    <p className={styles.metricText} data-node-id="3196:87859">
                      km
                    </p>
                  </div>
                </div>
              )}
              {showElevationContainer && (
                <div
                  className={styles.elevationContainer}
                  data-name="Elevation Container"
                  data-node-id="3196:88001"
                >
                  <div
                    className={styles.elevationIcon}
                    data-name="Distance Icon"
                    data-node-id="3196:88002"
                  >
                    <img
                      src="data:image/svg+xml,%3Csvg width=%2217%22 height=%2217%22 viewBox=%220 0 17 17%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M10.75 6.6875C10.293 6.6875 9.9375 6.33203 9.9375 5.875C9.9375 5.44336 10.293 5.0625 10.75 5.0625H14.8125C15.2441 5.0625 15.625 5.44336 15.625 5.875V9.9375C15.625 10.3945 15.2441 10.75 14.8125 10.75C14.3555 10.75 14 10.3945 14 9.9375V7.85547L9.68359 12.1465C9.37891 12.4766 8.8457 12.4766 8.54102 12.1465L5.875 9.48047L2.37109 12.959C2.06641 13.2891 1.5332 13.2891 1.22852 12.959C0.898438 12.6543 0.898438 12.1211 1.22852 11.8164L5.29102 7.75391C5.5957 7.42383 6.12891 7.42383 6.43359 7.75391L9.125 10.4199L12.832 6.6875H10.75Z%22 fill=%22white%22/%3E%3C/svg%3E"
                      alt="Elevation"
                      className={styles.elevationIconImage}
                    />
                  </div>
                  <div
                    className={styles.elevation}
                    data-name="Elevation"
                    data-node-id="3196:88003"
                  >
                    <p className={styles.metricText} data-node-id="3196:88004">
                      {elevation}
                    </p>
                    <p className={styles.metricText} data-node-id="3196:88005">
                      mt
                    </p>
                  </div>
                </div>
              )}
              <div
                id={isProperty1 ? 'node-3196_88149' : isNotProperty1 ? 'node-3196_88359' : ''}
                className={styles.durationContainer}
                data-name="Duration Container"
              >
                <div
                  id={isProperty1 ? 'node-3196_88150' : isNotProperty1 ? 'node-3196_88360' : ''}
                  className={styles.stopwatchIcon}
                  data-name="Distance Icon"
                >
                  <ServiceIcon type="Stopwatch" size={17} />
                </div>
                <div
                  id={isProperty1 ? 'node-3196_88151' : isNotProperty1 ? 'node-3196_88361' : ''}
                  className={styles.duration}
                  data-name="Duration"
                >
                  <p className={styles.metricText} data-node-id="3196:88276">
                    {hoursWalking}
                  </p>
                  <p
                    id={isProperty1 ? 'node-3196_88153' : isNotProperty1 ? 'node-3196_88363' : ''}
                    className={styles.metricText}
                  >
                    h
                  </p>
                </div>
              </div>
            </div>
            {isNotProperty1 && (
              <p className={styles.titleTextCollapsed} data-node-id="2371:35014">
                {title}
              </p>
            )}
          </div>
        </div>
        {isProperty1 && (
          <>
            {showFlightTransferDetails && (
              <FlightTransferDetails
                className={styles.flightTransferDetails}
                flightName="Lufthansa - LH273"
                depTime="12:45 PM"
                arrTime="4:25 PM"
                transferName="R40 - Main station"
                transferInfo="Buses depart from Parnell Place (Cork station)"
                showTransferInfo={true}
                showCheckinInfoCta={true}
              />
            )}
            <ExpandableBodytext
              className={styles.expandableBodytext}
              text={expandableText}
              state={expandableState}
              onToggle={handleExpandableToggle}
            />
            {showHotelDetails && (
              <HotelDetails
                className={styles.hotelDetails}
                showAddress={false}
                showHotelName={false}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ItineraryCard;
