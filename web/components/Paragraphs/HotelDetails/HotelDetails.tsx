'use client';

import React from 'react';
import styles from './HotelDetails.module.css';
import { IconInfo } from '../IconInfo';
import { Button } from '../../Button';

// Local image asset
const imgGallery = '/assets/Paragraphs/figma/HotelDetails/imgGallery.jpg';
// Local icon asset
const imgPhone = '/assets/icons/figma/ServiceIcon/Phone.svg';
// Local icon assets
const imgCalendar = '/assets/icons/figma/ServiceIcon/Calendar.svg';
const imgMap = '/assets/icons/figma/ServiceIcon/Map.svg';
const imgBed = '/assets/icons/figma/ServiceIcon/Bed.svg';

export interface HotelDetailsProps {
  className?: string;
  hotelName?: string;
  checkInDate?: string;
  checkOutDate?: string;
  checkInTime?: string;
  checkOutTime?: string;
  address?: string;
  roomType?: string;
  roomDetails?: string;
}

export function HotelDetails({
  className,
  hotelName = 'Camp Junction House B&B',
  checkInDate = 'Thu Oct 11 2025 - Fri Oct 12 2025',
  checkInTime = 'Check in: from 2:00 PM to 7:00 PM',
  checkOutTime = 'Check out: by 12:00 PM',
  address = 'Camp Junction Lorem ipsum 3400 Abby Road, Spain, Santiago de Compostela',
  roomType = 'Double room',
  roomDetails = 'With breakfast',
}: HotelDetailsProps) {
  return (
    <div
      data-name="Hotel details"
      data-node-id="2309:38590"
      className={`${styles.hotelDetails} ${className || ''}`}
    >
      <div
        data-node-id="2301:38365"
        className={styles.gallerySection}
      >
        <div
          data-name="Gallery"
          data-node-id="2301:38366"
          className={styles.gallery}
        >
          <img
            alt=""
            className={styles.galleryImage}
            src={imgGallery}
          />
        </div>
        <div
          data-name="CTA"
          data-node-id="2301:38396"
          className={styles.contactButton}
        >
          <Button
            type="Secondary"
            color="Black"
            state="On"
            text="CONTACT"
            showIconLeft={true}
            showIconRight={false}
            icon={
              <div
                data-name="Service icon/Phone"
                data-node-id="I2301:38396;2273:30687"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '10.986px',
                  height: '10.986px',
                }}
              >
                <img
                  alt=""
                  src={imgPhone}
                  style={{
                    display: 'block',
                    maxWidth: 'none',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            }
          />
        </div>
      </div>
      <div
        data-node-id="2301:38369"
        className={styles.detailsSection}
      >
        <div
          data-node-id="2301:38370"
          className={styles.detailsContent}
        >
          <p
            data-node-id="2301:38371"
            className={styles.category}
          >
            Hotel
          </p>
          <p
            data-node-id="2301:38372"
            className={styles.hotelName}
          >
            {hotelName}
          </p>
          <IconInfo
            title={checkInDate}
            text1={checkInTime}
            text2={checkOutTime}
            iconSrc={imgCalendar}
            iconLabelWidth="9.625px"
            iconLabelHeight="11px"
            iconDataName="Service icon/Calendar"
            iconDataNodeId="I2309:38447;2301:38429"
          />
          <IconInfo
            title="Property address"
            text1={address}
            showText2={false}
            iconSrc={imgMap}
            iconLabelWidth="8.25px"
            iconLabelHeight="10.984px"
            iconDataName="Service icon/Map"
            iconDataNodeId="I2309:38456;2301:38429"
          />
          <IconInfo
            title={roomType}
            text1={roomDetails}
            showText2={false}
            iconSrc={imgBed}
            iconLabelWidth="13.75px"
            iconLabelHeight="9.625px"
            iconDataName="Service icon/Bed"
            iconDataNodeId="I2309:38464;2301:38429"
          />
        </div>
      </div>
    </div>
  );
}
