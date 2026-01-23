'use client';

import React from 'react';
import styles from './HotelDetails.module.css';

// Figma image assets
const imgImage = 'https://www.figma.com/api/mcp/asset/57b62fdd-f6a4-4b7d-964d-f68fb554879b';
const imgPhone = '/assets/icons/figma/ServiceIcon/Phone.svg';
const imgCalendar = '/assets/icons/figma/ServiceIcon/Calendar.svg';
const imgMap = '/assets/icons/figma/ServiceIcon/Map.svg';
const imgBed = '/assets/icons/figma/ServiceIcon/Bed.svg';

export interface HotelDetailsProps {
  dates?: string;
  checkInTime?: string;
  checkOutTime?: string;
  roomType?: string;
  roomDetails?: string;
  showRoomDetails?: boolean;
  hotelName?: string;
  showHotelName?: boolean;
  showAddress?: boolean;
  className?: string;
}

export function HotelDetails({
  dates = 'Thu Oct 11 2025 - Fri Oct 12 2025',
  checkInTime = '2:00 PM - 7:00 PM',
  checkOutTime = 'by 12:00 PM',
  roomType = 'Double room',
  roomDetails = 'With breakfast',
  showRoomDetails = true,
  hotelName = 'Camp Junction House B&B',
  showHotelName = true,
  showAddress = true,
  className,
}: HotelDetailsProps) {
  return (
    <div
      className={`${styles.hotelDetails} ${className || ''}`}
      data-name="Hotel details"
      data-node-id="2983:69077"
    >
      <div
        className={styles.image}
        data-name="Image"
        data-node-id="2983:68981"
      >
        <img
          alt=""
          className={styles.imageElement}
          src={imgImage}
        />
      </div>
      <div
        className={styles.info}
        data-name="Info"
        data-node-id="2983:68985"
      >
        {showHotelName && (
          <div
            className={styles.nameContact}
            data-name="Name + contact"
            data-node-id="2993:73611"
          >
            <div
              className={styles.hotelNameSection}
              data-name="Hotel name"
              data-node-id="2993:74404"
            >
              <div
                className={styles.hotelLabel}
                data-node-id="2993:73588"
              >
                <p>Hotel</p>
              </div>
              <div
                className={styles.hotelNameText}
                data-node-id="2993:73600"
              >
                <p>{hotelName}</p>
              </div>
            </div>
            <div
              className={styles.contactButton}
              data-name="CTA/Rounded"
              data-node-id="2993:74396"
            >
              <div
                className={styles.phoneIcon}
                data-name="Service icon/Phone"
                data-node-id="I2993:74396;3403:100440"
              >
                <div
                  className={styles.iconLabel}
                  data-name="Icon lable"
                  data-node-id="I2993:74396;3403:100440;2419:28950"
                >
                  <div className={styles.iconFill}>
                    <img
                      alt=""
                      className={styles.iconImage}
                      src={imgPhone}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          className={styles.dates}
          data-name="Dates"
          data-node-id="2983:68986"
        >
          <div
            className={styles.calendarIcon}
            data-name="Service icon/Calendar"
            data-node-id="2983:68987"
          >
            <div
              className={styles.iconLabel}
              data-name="Icon lable"
              data-node-id="I2983:68987;2419:28951"
            >
              <div className={styles.iconFill}>
                <img
                  alt=""
                  className={styles.iconImage}
                  src={imgCalendar}
                />
              </div>
            </div>
          </div>
          <div
            className={styles.datesContent}
            data-name="Copy"
            data-node-id="2983:68988"
          >
            <div
              className={styles.datesText}
              data-node-id="2983:68989"
            >
              <p>{dates}</p>
            </div>
            <div
              className={styles.checkIn}
              data-name="Check in"
              data-node-id="2983:68990"
            >
              <p className={styles.checkInLabel} data-node-id="2983:68991">
                Check in:
              </p>
              <p className={styles.checkInValue} data-node-id="2983:68992">
                {checkInTime}
              </p>
            </div>
            <div
              className={styles.checkOut}
              data-name="Check out"
              data-node-id="2983:68993"
            >
              <p className={styles.checkOutLabel} data-node-id="2983:68994">
                Check out:
              </p>
              <p className={styles.checkOutValue} data-node-id="2983:68995">
                {checkOutTime}
              </p>
            </div>
          </div>
        </div>
        {showAddress && (
          <div
            className={styles.address}
            data-name="Address"
            data-node-id="2983:68996"
          >
            <div
              className={styles.mapIcon}
              data-name="Service icon/Map"
              data-node-id="2983:68997"
            >
              <div
                className={styles.iconLabel}
                data-name="Icon lable"
                data-node-id="I2983:68997;2419:28952"
              >
                <div className={styles.iconFill}>
                  <img
                    alt=""
                    className={styles.iconImage}
                    src={imgMap}
                  />
                </div>
              </div>
            </div>
            <div
              className={styles.addressContent}
              data-name="Copy"
              data-node-id="2983:68998"
            >
              <div
                className={styles.addressLabel}
                data-node-id="2983:68999"
              >
                <p>Property address</p>
              </div>
              <p
                className={styles.addressText}
                data-node-id="2983:69000"
              >
                Camp Junction Lorem ipsum 3400 Abby Road, Spain, Santiago de Compostela
              </p>
            </div>
          </div>
        )}
        <div
          className={styles.room}
          data-name="Room"
          data-node-id="2993:72107"
        >
          <div
            className={styles.bedIcon}
            data-name="Service icon/Bed"
            data-node-id="2993:72108"
          >
            <div
              className={styles.iconLabel}
              data-name="Icon lable"
              data-node-id="I2993:72108;2419:28953"
            >
              <div className={styles.iconFill}>
                <img
                  alt=""
                  className={styles.iconImage}
                  src={imgBed}
                />
              </div>
            </div>
          </div>
          <div
            className={styles.roomContent}
            data-name="Copy"
            data-node-id="2993:72109"
          >
            <div
              className={styles.roomType}
              data-node-id="2993:72110"
            >
              <p>{roomType}</p>
            </div>
            {showRoomDetails && (
              <p
                className={styles.roomDetails}
                data-node-id="2993:72111"
              >
                {roomDetails}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
