'use client';

import React from 'react';
import { Plus } from '../../Labels';
import { ServiceIcon } from '../../Icon';
import styles from './BlogCard.module.css';

// Figma image assets
const imgVisual = '/assets/Card/figma/BlogCard/imgVisual.png';
const imgLine3 = '/assets/Card/figma/BlogCard/imgLine3.svg';
const img = '/assets/Card/figma/BlogCard/img.svg';
const img1 = '/assets/Card/figma/BlogCard/img1.svg';
const img2 = '/assets/Card/figma/BlogCard/img2.svg';
const img3 = '/assets/Card/figma/BlogCard/img3.svg';

export interface BlogCardProps {
  showCta?: boolean;
  title?: string;
  showTag?: boolean;
  date?: string;
  readTime?: string;
  className?: string;
}

export function BlogCard({
  showCta = true,
  title = 'How to approach (and enjoy) your first walking holiday',
  showTag = true,
  date = 'May 20, 2025',
  readTime = '5 min. read',
  className,
}: BlogCardProps) {
  return (
    <div
      className={`${styles.blogCard} ${className || ''}`}
      data-name="Blog card"
      data-node-id="2184:8373"
    >
      <div
        className={styles.visual}
        data-name="Visual"
        data-node-id="2181:8128"
      >
        <img alt="" className={styles.visualImage} src={imgVisual} />
        {showTag && (
          <Plus
            className={styles.tag}
            text="Guide"
            showStar={false}
          />
        )}
      </div>
      <div
        className={styles.description}
        data-name="Descirption"
        data-node-id="2181:8131"
      >
        <div className={styles.lineTop} data-node-id="2184:8353">
          <div className={styles.lineOverlay}>
            <img alt="" className={styles.lineImage} src={imgLine3} />
          </div>
        </div>
        <div
          className={styles.mainInfo}
          data-name="Main info"
          data-node-id="2181:8132"
        >
          <p className={styles.titleText} data-node-id="2181:8324">
            {title}
          </p>
          <div
            className={styles.tags}
            data-name="Tags"
            data-node-id="4550:87257"
          >
            <div
              className={styles.metricsContainer}
              data-name="Metrics Container"
              data-node-id="4550:87259"
            >
              <div
                className={styles.distanceContainer}
                data-name="Distance Container"
                data-node-id="4550:87260"
              >
                <div
                  className={styles.distanceIcon}
                  data-name="Distance Icon"
                  data-node-id="4550:87261"
                >
                  <ServiceIcon type="Calendar" size={17} />
                </div>
                <div
                  className={styles.length}
                  data-name="Lenght"
                  data-node-id="4550:87262"
                >
                  <p className={styles.metricText} data-node-id="4550:87263">
                    {date}
                  </p>
                </div>
              </div>
              <div
                className={styles.elevationContainer}
                data-name="Elevation Container"
                data-node-id="4550:87264"
              >
                <div
                  className={styles.stopwatchIcon}
                  data-name="Distance Icon"
                  data-node-id="4550:87265"
                >
                  <ServiceIcon type="Stopwatch" size={17} />
                </div>
                <div
                  className={styles.elevation}
                  data-name="Elevation"
                  data-node-id="4550:87266"
                >
                  <p className={styles.metricText} data-node-id="4550:87267">
                    {readTime.split(' ')[0]}
                  </p>
                  <p className={styles.metricText} data-node-id="4550:87268">
                    {readTime.split(' ').slice(1).join(' ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lineBottom} data-node-id="2184:8351">
          <div className={styles.lineOverlay}>
            <img alt="" className={styles.lineImage} src={imgLine3} />
          </div>
        </div>
        {showCta && (
          <div
            className={styles.readMoreButton}
            data-name="Read more button"
            data-node-id="2184:8354"
          >
            <div
              className={styles.cta}
              data-name="CTA"
              data-node-id="2184:8342"
            >
              <div
                className={styles.createButton}
                data-name="Create Button"
                data-node-id="I2184:8342;2181:1893"
              >
                <p
                  className={styles.ctaText}
                  data-node-id="I2184:8342;2181:1894"
                >
                  READ MORE
                </p>
                <div className={styles.underline} data-node-id="I2184:8342;2181:4327">
                  <div className={styles.underlineOverlay}>
                    <img alt="" className={styles.underlineImage} src={img2} />
                  </div>
                </div>
              </div>
              <div
                className={styles.chevronIcon}
                data-name="Service icon/Chevron right"
                data-node-id="I2184:8342;2187:9669"
              >
                <ServiceIcon type="ChevronRight" size={17} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogCard;
