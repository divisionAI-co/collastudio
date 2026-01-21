'use client';

import React from 'react';
import styles from './EditorialParagraph.module.css';

// Local image assets
const imgOrientationLeft = '/assets/Paragraphs/figma/Paragraphs/imgOrientationLeft.png';
const imgOrientationRight = '/assets/Paragraphs/figma/Paragraphs/imgOrientationRight.png';

export type EditorialParagraphOrientation = 'Left' | 'Right';

export interface EditorialParagraphProps {
  className?: string;
  smallTitle?: string;
  paragraph?: string;
  title?: string;
  showSmallTitle?: boolean;
  showParagraph?: boolean;
  showTitle?: boolean;
  orientation?: EditorialParagraphOrientation;
}

export function EditorialParagraph({
  className,
  smallTitle = 'a piedi per il mondo changing skin',
  paragraph = 'Just like in nature, there comes a time when you must change your form to grow, while keeping your essence intact.',
  title = "That's how we naturally evolve into Wayure.",
  showSmallTitle = true,
  showParagraph = true,
  showTitle = true,
  orientation = 'Left',
}: EditorialParagraphProps) {
  const isLeft = orientation === 'Left';
  const backgroundImage = isLeft ? imgOrientationLeft : imgOrientationRight;

  return (
    <div
      data-node-id={isLeft ? '2615:40307' : '2726:52422'}
      className={`${styles.editorialParagraph} ${styles[`orientation${orientation}`]} ${className || ''}`}
    >
      <img
        className={styles.backgroundImage}
        alt=""
        src={backgroundImage}
      />
      <div
        data-node-id={isLeft ? '2615:40624' : '2726:52423'}
        className={styles.gradient}
        data-name="Gradient"
      />
      <div
        data-node-id={isLeft ? '2615:40326' : '2726:52424'}
        className={`${styles.headline} ${isLeft ? styles.headlineLeft : styles.headlineRight}`}
        data-name="Headline"
      >
        {isLeft ? (
          <>
            {showSmallTitle && (
              <p
                data-node-id="2615:40327"
                className={`${styles.smallTitle} ${styles.smallTitleLeft}`}
              >
                {smallTitle}
              </p>
            )}
            <div
              data-node-id="2615:40328"
              className={styles.headlineContent}
              data-name="Headline"
            >
              {showParagraph && (
                <p
                  data-node-id="2615:40329"
                  className={styles.paragraph}
                >
                  {paragraph}
                </p>
              )}
              {showTitle && (
                <p
                  data-node-id="2615:40330"
                  className={styles.title}
                >
                  {title}
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <div
              data-node-id="2726:52426"
              className={styles.headlineContent}
              data-name="Headline"
            >
              {showParagraph && (
                <p
                  data-node-id="2726:52427"
                  className={styles.paragraph}
                >
                  {paragraph}
                </p>
              )}
              {showTitle && (
                <p
                  data-node-id="2726:52428"
                  className={styles.title}
                >
                  {title}
                </p>
              )}
            </div>
            {showSmallTitle && (
              <p
                data-node-id="2726:52425"
                className={`${styles.smallTitle} ${styles.smallTitleRight}`}
              >
                {smallTitle}
              </p>
            )}
          </>
        )}
      </div>
      <div
        data-node-id={isLeft ? '2615:40123' : '2726:52429'}
        className={`${styles.content} ${isLeft ? styles.contentLeft : styles.contentRight}`}
        data-name="Content"
      >
        <div
          data-node-id={isLeft ? '2615:40336' : '2726:52430'}
          className={styles.container}
          data-name="Container"
        >
          <div
            data-node-id={isLeft ? '2615:40340' : '2726:52431'}
            className={styles.eventInfo}
            data-name="Event Info"
          >
            <div
              data-node-id="I2615:40340;2105:4853"
              className={styles.date}
              data-name="Date"
            >
              <p
                data-node-id="I2615:40340;2105:4856"
                className={styles.dateSubtitle}
              >
                A piedi per il mondo was our first step, the root of our<br />
                passion. Today, that journey leads us to a broader<br />
                horizon.
              </p>
              <p
                data-node-id="I2615:40340;2105:4857"
                className={styles.dateBody}
              >
                This evolution is a shift towards a more refined experience. We have chosen a new name to fully reflect who we have become: a premium guide for your personal exploration. It is a promise of continuity: the same authentic heart, but with a new, deeper awareness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
