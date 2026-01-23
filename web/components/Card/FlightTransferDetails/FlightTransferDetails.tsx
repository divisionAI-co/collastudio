'use client';

import React from 'react';
import { ServiceIcon } from '../../Icon';
import styles from './FlightTransferDetails.module.css';

export interface FlightTransferDetailsProps {
  flightName?: string;
  depTime?: string;
  arrTime?: string;
  transferInfo?: string;
  transferName?: string;
  showTransferInfo?: boolean;
  showCheckinInfoCta?: boolean;
  className?: string;
}

export function FlightTransferDetails({
  flightName = 'Lufthansa - LH273',
  depTime = '12:45 PM',
  arrTime = '4:25 PM',
  transferInfo = 'Buses depart from Parnell Place (Cork station)',
  transferName = 'R40 - Main station',
  showTransferInfo = true,
  showCheckinInfoCta = true,
  className,
}: FlightTransferDetailsProps) {
  return (
    <div
      className={`${styles.flightTransferDetails} ${className || ''}`}
      data-name="Flight & Transfer details"
      data-node-id="2993:77431"
    >
      <div
        className={styles.flightTransferContent}
        data-node-id="2993:79046"
      >
        <div
          className={styles.flightSection}
          data-name="Info"
          data-node-id="2993:77272"
        >
          <div
            className={styles.flightName}
            data-name="Flight name"
            data-node-id="2993:77389"
          >
            <p className={styles.sectionLabel}>Flight</p>
            <p className={styles.sectionValue}>{flightName}</p>
          </div>
          <div
            className={styles.timeTable}
            data-name="Time table"
            data-node-id="2993:77278"
          >
            <div
              className={styles.timeTableIcon}
              data-name="Service icon/Clock"
              data-node-id="2993:77279"
            >
              <ServiceIcon type="Clock" size={17} />
            </div>
            <div
              className={styles.timeTableContent}
              data-name="Copy"
              data-node-id="2993:77280"
            >
              <p className={styles.sectionLabel}>Timetable</p>
              <div
                className={styles.timeInfo}
                data-name="Dep"
                data-node-id="2993:77282"
              >
                <p className={styles.timeLabel} data-node-id="2993:77283">
                  Departure at:
                </p>
                <p className={styles.timeValue} data-node-id="2993:77284">
                  {depTime}
                </p>
              </div>
              <div
                className={styles.timeInfo}
                data-name="Arr"
                data-node-id="2993:77285"
              >
                <p className={styles.timeLabel} data-node-id="2993:77286">
                  Arrival at:
                </p>
                <p className={styles.timeValue} data-node-id="2993:77287">
                  {arrTime}
                </p>
              </div>
            </div>
          </div>
          {showCheckinInfoCta && (
            <div className={styles.bookingReference}>
              <p className={styles.bookingLabel}>Booking reference</p>
              <p className={styles.bookingValue}>X7Y8Z9</p>
            </div>
          )}
          {showCheckinInfoCta && (
            <div
              className={styles.checkInButton}
              data-name="CTA"
              data-node-id="2993:77319"
            >
              <ServiceIcon type="Flight" size={17} />
              <p className={styles.checkInText}>Check in</p>
            </div>
          )}
        </div>
      </div>
      {showTransferInfo && (
        <div
          className={styles.divider}
          data-name="Divider"
          data-node-id="I2993:77432;2993:79456"
        />
      )}
      {showTransferInfo && (
        <div
          className={styles.transferDetails}
          data-name="Transfer details"
          data-node-id="I2993:77432;2993:78895"
        >
          <div className={styles.transferName}>
            <p className={styles.sectionLabel}>REACHING the HOTEL</p>
            <p className={styles.sectionValue}>{transferName}</p>
          </div>
          <div
            className={styles.transferInfo}
            data-name="Info"
            data-node-id="2993:78899"
          >
            <div
              className={styles.transferIcon}
              data-name="Service icon/Bus"
              data-node-id="2993:78900"
            >
              <ServiceIcon type="Bus" size={17} />
            </div>
            <div
              className={styles.transferContent}
              data-name="Copy"
              data-node-id="2993:78901"
            >
              <p className={styles.sectionLabel}>Recommended means of transport</p>
              <p className={styles.transferText}>
                {transferInfo}
                <br />
                Company: Express Way
                <br />
                Route 40
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
