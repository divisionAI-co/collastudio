'use client';

import React from 'react';
import styles from './Banner.module.css';
import { ServiceIcon } from '../../Icon';

// Local image assets
const imgTypeBig = '/assets/Banners/figma/Banner/imgTypeBig.jpg';
const imgTypeSmall = '/assets/Banners/figma/Banner/imgTypeSmall.jpg';

export interface BannerProps {
  type?: 'Big' | 'Small';
  showTags?: boolean;
  showCta?: boolean;
  title?: string;
  date?: string;
  text?: string;
  className?: string;
}

export function Banner({
  type = 'Big',
  showTags = true,
  showCta = true,
  title = 'Japan Expedition through the Nakasendo Trail - The samurai way',
  date = '18 - 24 April 2026',
  text = 'Japan Expedition through the Nakasendo Trail - The samurai way',
  className,
}: BannerProps) {
  const isBig = type === 'Big';
  const isSmall = type === 'Small';

  return (
    <div
      className={`${styles.banner} ${isBig ? styles.bannerBig : styles.bannerSmall} ${className || ''}`}
      data-node-id={isBig ? '2105:4950' : '2250:18827'}
    >
      <div className={styles.background} aria-hidden="true">
        <img
          className={styles.backgroundImage}
          alt=""
          src={isBig ? imgTypeBig : imgTypeSmall}
        />
        <div className={styles.overlay} />
      </div>
      <div
        className={styles.container}
        data-name="Container"
        data-node-id={isBig ? '2105:4767' : '2250:18828'}
      >
        {isBig && showTags && (
          <div
            className={styles.tags}
            data-name="Tags"
            data-node-id="2105:4755"
          >
            <div
              className={styles.tag}
              data-name="Plus"
              data-node-id="2105:4756"
            >
              <div
                className={styles.featureContent}
                data-name="Feature Content"
                data-node-id="I2105:4756;2006:11381"
              >
                <div className={styles.starWrapper}>
                  <div
                    className={styles.star}
                    data-name="Star"
                    data-node-id="I2105:4756;2006:11385"
                  >
                    <div className={styles.starFill}>
                      <svg
                        className={styles.starImage}
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                        overflow="visible"
                        style={{ display: 'block' }}
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Union"
                          d="M8.19974 4.27246C9.40822 5.51036 12 6.54883 12 6.54883C12 6.54883 9.5 7.5 8.03125 9.03027C6.5625 10.5605 5.91602 13 5.91602 13C5.91602 13 4.97298 10.1967 3.71484 8.87207C2.53648 7.6314 0 6.54883 0 6.54883C0 6.54883 2.47487 5.47921 3.6377 4.27246C4.94976 2.91084 5.91602 0 5.91602 0C5.91602 0 6.87814 2.9187 8.19974 4.27246Z"
                          fill="#F4F097"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p
                  className={styles.tagText}
                  data-node-id="I2105:4756;2006:11383"
                >
                  GUIDED TOUR
                </p>
              </div>
            </div>
            <div
              className={styles.tag}
              data-name="Plus"
              data-node-id="2105:4757"
            >
              <div
                className={styles.featureContent}
                data-name="Feature Content"
                data-node-id="I2105:4757;2006:11381"
              >
                <div className={styles.starWrapper}>
                  <div
                    className={styles.star}
                    data-name="Star"
                    data-node-id="I2105:4757;2006:11385"
                  >
                    <div className={styles.starFill}>
                      <svg
                        className={styles.starImage}
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                        overflow="visible"
                        style={{ display: 'block' }}
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Union"
                          d="M8.19974 4.27246C9.40822 5.51036 12 6.54883 12 6.54883C12 6.54883 9.5 7.5 8.03125 9.03027C6.5625 10.5605 5.91602 13 5.91602 13C5.91602 13 4.97298 10.1967 3.71484 8.87207C2.53648 7.6314 0 6.54883 0 6.54883C0 6.54883 2.47487 5.47921 3.6377 4.27246C4.94976 2.91084 5.91602 0 5.91602 0C5.91602 0 6.87814 2.9187 8.19974 4.27246Z"
                          fill="#F4F097"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p
                  className={styles.tagText}
                  data-node-id="I2105:4757;2006:11383"
                >
                  10x Group
                </p>
              </div>
            </div>
          </div>
        )}
        <div
          className={styles.eventInfo}
          data-name="Event Info"
          data-node-id={isBig ? '3798:130534' : '3798:130950'}
        >
          <div
            className={`${styles.date} ${isBig ? styles.dateBig : styles.dateSmall}`}
            data-name="Date"
            data-node-id={isBig ? '3798:130535' : '3798:130951'}
          >
            {isBig && (
              <>
                <p className={styles.dateText} data-node-id="3798:130536">
                  {date}
                </p>
                <p className={styles.titleBig} data-node-id="3798:130537">
                  {title}
                </p>
              </>
            )}
            {isSmall && (
              <>
                <p className={styles.titleSmall} data-node-id="3798:130952">
                  {title}
                </p>
                <p className={styles.textSmall} data-node-id="3798:130953">
                  {text}
                </p>
              </>
            )}
          </div>
        </div>
        {showCta && (
          <div
            className={styles.buttonContainer}
            data-name="Button Container"
            data-node-id={isBig ? '2105:4943' : '2250:18833'}
          >
            <div
              className={styles.ctaButton}
              data-name="Animation/Cta/set"
              data-node-id={isBig ? '3292:98896' : '3292:99192'}
            >
              <div
                className={styles.buttonText}
                data-name="Create Button"
                data-node-id={isBig ? 'I3292:98896;3292:96631' : 'I3292:99192;3292:96631'}
              >
                <p data-node-id={isBig ? 'I3292:98896;3292:96632' : 'I3292:99192;3292:96632'}>
                  DISCOVER MORE
                </p>
              </div>
              <div
                className={styles.chevronIcon}
                data-name="Service icon/Chevron right"
                data-node-id={isBig ? 'I3292:98896;3292:96633' : 'I3292:99192;3292:96633'}
              >
                <ServiceIcon type="ChevronRight" size={17} />
              </div>
              <div
                className={styles.hoverColor}
                data-name="Hover color"
                data-node-id={isBig ? 'I3292:98896;3292:96636' : 'I3292:99192;3292:96636'}
              />
            </div>
          </div>
        )}
        {isSmall && showTags && (
          <div
            className={styles.tags}
            data-name="Tags"
            data-node-id="2250:18829"
          >
            <div
              className={styles.tag}
              data-name="Plus"
              data-node-id="2250:18830"
            >
              <div
                className={styles.featureContent}
                data-name="Feature Content"
                data-node-id="I2250:18830;2006:11381"
              >
                <div className={styles.starWrapper}>
                  <div
                    className={styles.star}
                    data-name="Star"
                    data-node-id="I2250:18830;2006:11385"
                  >
                    <div className={styles.starFill}>
                      <svg
                        className={styles.starImage}
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                        overflow="visible"
                        style={{ display: 'block' }}
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Union"
                          d="M8.19974 4.27246C9.40822 5.51036 12 6.54883 12 6.54883C12 6.54883 9.5 7.5 8.03125 9.03027C6.5625 10.5605 5.91602 13 5.91602 13C5.91602 13 4.97298 10.1967 3.71484 8.87207C2.53648 7.6314 0 6.54883 0 6.54883C0 6.54883 2.47487 5.47921 3.6377 4.27246C4.94976 2.91084 5.91602 0 5.91602 0C5.91602 0 6.87814 2.9187 8.19974 4.27246Z"
                          fill="#F4F097"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p
                  className={styles.tagText}
                  data-node-id="I2250:18830;2006:11383"
                >
                  GUIDED TOUR
                </p>
              </div>
            </div>
            <div
              className={styles.tag}
              data-name="Plus"
              data-node-id="2250:18831"
            >
              <div
                className={styles.featureContent}
                data-name="Feature Content"
                data-node-id="I2250:18831;2006:11381"
              >
                <div className={styles.starWrapper}>
                  <div
                    className={styles.star}
                    data-name="Star"
                    data-node-id="I2250:18831;2006:11385"
                  >
                    <div className={styles.starFill}>
                      <svg
                        className={styles.starImage}
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                        overflow="visible"
                        style={{ display: 'block' }}
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Union"
                          d="M8.19974 4.27246C9.40822 5.51036 12 6.54883 12 6.54883C12 6.54883 9.5 7.5 8.03125 9.03027C6.5625 10.5605 5.91602 13 5.91602 13C5.91602 13 4.97298 10.1967 3.71484 8.87207C2.53648 7.6314 0 6.54883 0 6.54883C0 6.54883 2.47487 5.47921 3.6377 4.27246C4.94976 2.91084 5.91602 0 5.91602 0C5.91602 0 6.87814 2.9187 8.19974 4.27246Z"
                          fill="#F4F097"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p
                  className={styles.tagText}
                  data-node-id="I2250:18831;2006:11383"
                >
                  10x Group
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;
