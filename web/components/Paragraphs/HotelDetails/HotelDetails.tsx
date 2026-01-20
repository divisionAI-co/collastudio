'use client';

import React from 'react';
import styles from './HotelDetails.module.css';
import { IconInfo } from '../IconInfo';
import { Button } from '../../Button';

// Figma asset URLs - will be replaced with local paths after download
const imgGallery = 'https://www.figma.com/api/mcp/asset/08a56f1b-7ae1-47ee-ba45-cce2c073036d';
const img = 'https://www.figma.com/api/mcp/asset/82cf41f7-f858-4a2a-b5df-f48309a2314b';
const img1 = 'https://www.figma.com/api/mcp/asset/9c362381-cc50-47dc-8b22-96b7c7f913ba';
const img2 = 'https://www.figma.com/api/mcp/asset/3e0ac4ff-5469-45ce-9e1d-9e02d791b4a8';
const img3 = 'https://www.figma.com/api/mcp/asset/a967c1e8-27db-47cb-b34f-87dd4173035e';

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
                  src={img}
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
            iconSrc={img1}
            iconLabelWidth="9.625px"
            iconLabelHeight="11px"
            iconDataName="Service icon/Calendar"
            iconDataNodeId="I2309:38447;2301:38429"
          />
          <IconInfo
            title="Property address"
            text1={address}
            showText2={false}
            iconSrc={img2}
            iconLabelWidth="8.25px"
            iconLabelHeight="10.984px"
            iconDataName="Service icon/Map"
            iconDataNodeId="I2309:38456;2301:38429"
          />
          <IconInfo
            title={roomType}
            text1={roomDetails}
            showText2={false}
            iconSrc={img3}
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
