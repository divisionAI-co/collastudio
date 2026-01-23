'use client';

import React, { useState } from 'react';
import styles from './Review.module.css';

// Figma image assets
const imgImage = '/assets/Card/figma/Review/imgImage.png';
const imgLine27 = '/assets/Card/figma/Review/imgLine27.svg';
const imgStarFilled = '/assets/icons/figma/ServiceIcon/Star.svg';
const imgStarEmpty = '/assets/icons/figma/ServiceIcon/StarEmpty.svg';
const imgStarEasy = '/assets/icons/figma/DifficultyRating/imgStarEasy.svg';
const imgStarEasyEmpty = '/assets/icons/figma/DifficultyRating/imgStarEasyEmpty.svg';

export interface UnderlinedLinksProps {
  className?: string;
  text?: string;
  property1?: 'On';
  onClick?: () => void;
}

function UnderlinedLinks({ className, text = 'CAI Partnership', property1 = 'On', onClick }: UnderlinedLinksProps) {
  return (
    <div
      data-node-id="2301:23965"
      className={`${className} ${onClick ? styles.clickableLink : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      <p className={styles.underlinedLinkText} data-node-id="2301:23966">
        {text}
      </p>
      <div className={styles.underlinedLinkLine} data-node-id="2301:23967">
        <div className={styles.underlinedLinkLineInner}>
          <img className={styles.underlinedLinkImage} alt="" src={imgLine27} />
        </div>
      </div>
    </div>
  );
}

export interface ReviewProps {
  showImage?: boolean;
  property1?: 'Big' | 'Small';
  routeName?: string;
  difficulty?: string;
  duration?: string;
  distance?: string;
  reviewText?: string;
  rating?: number;
  reviewerName?: string;
  reviewerAge?: string;
  showExpand?: boolean;
  className?: string;
}

export function Review({
  showImage = true,
  property1 = 'Big',
  routeName = 'Rota Vincentina - Jan 2024',
  difficulty = 'Easy',
  duration = '8 Days',
  distance = '102 km',
  reviewText = '"It was a wonderful experience, magnificent landscapes and a splendid walk, although challenging. The accommodation was clean and welcoming, and the breakfasts were truly excellent."',
  rating = 4,
  reviewerName = 'Giorgio M.',
  reviewerAge = '38 Y/o',
  showExpand = false,
  className,
}: ReviewProps) {
  const isBig = property1 === 'Big';
  const isSmall = property1 === 'Small';
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      id={isBig ? 'node-2172_2356' : isSmall ? 'node-2256_21369' : ''}
      className={`${styles.review} ${isBig ? styles.reviewBig : styles.reviewSmall} ${className || ''}`}
    >
      {isSmall && showImage && (
        <div
          data-node-id="2698:11718"
          className={styles.imageSmall}
          data-name="Image"
        >
          <img
            className={styles.imageElement}
            alt=""
            src={imgImage}
          />
        </div>
      )}
      {isBig && showImage && (
        <div
          className={styles.image}
          data-name="Image"
          data-node-id="2172:2354"
        >
          <img
            alt=""
            className={styles.imageElement}
            src={imgImage}
          />
        </div>
      )}
      <div
        id={isBig ? 'node-2172_2318' : isSmall ? 'node-2256_21371' : ''}
        className={`${styles.reviewContent} ${isBig ? styles.reviewContentBig : styles.reviewContentSmall}`}
        data-name="Review Content"
      >
        <div
          id={isBig ? 'node-2172_2319' : isSmall ? 'node-2256_21372' : ''}
          className={`${styles.header} ${isBig ? styles.headerBig : styles.headerSmall}`}
          data-name="Header"
        >
          <p
            id={isBig ? 'node-2172_2320' : isSmall ? 'node-2256_21373' : ''}
            className={styles.routeName}
          >
            {routeName}
          </p>
          {isBig && (
            <div
              data-node-id="2172:2321"
              className={styles.specs}
              data-name="Specs"
            >
              <div
                data-node-id="I2172:2321;2084:3967"
                className={styles.specItem}
                data-name="Difficulty"
              >
                <div
                  data-node-id="I2172:2321;2089:7259"
                  className={styles.difficultyRating}
                  data-name="Difficulty rating"
                >
                  <div
                    data-node-id="I2172:2321;2089:7259;2084:3787"
                    className={styles.star}
                    data-name="Star"
                  >
                    <div className={styles.starFill}>
                      <img className={styles.starImage} alt="" src={imgStarEasy} />
                    </div>
                  </div>
                  <div
                    data-node-id="I2172:2321;2089:7259;2084:3788"
                    className={styles.star}
                    data-name="Star"
                  >
                    <div className={styles.starFill}>
                      <img className={styles.starImage} alt="" src={imgStarEasy} />
                    </div>
                  </div>
                  <div
                    data-node-id="I2172:2321;2089:7259;2084:3790"
                    className={styles.star}
                    data-name="Star"
                  >
                    <div className={styles.starFill}>
                      <img className={styles.starImage} alt="" src={imgStarEasy} />
                    </div>
                  </div>
                </div>
                <p
                  data-node-id="I2172:2321;2167:1760"
                  className={styles.specText}
                >
                  {difficulty}
                </p>
              </div>
              <div
                data-node-id="I2172:2321;2084:3969"
                className={styles.specItem}
                data-name="Duration"
              >
                <p
                  data-node-id="I2172:2321;2084:3970"
                  className={styles.specText}
                >
                  {duration}
                </p>
              </div>
              <div
                data-node-id="I2172:2321;2084:3971"
                className={styles.specItem}
                data-name="Distance"
              >
                <p
                  data-node-id="I2172:2321;2084:3972"
                  className={styles.specText}
                >
                  {distance}
                </p>
              </div>
            </div>
          )}
        </div>
        <div
          id={isBig ? 'node-2172_2322' : isSmall ? 'node-2256_21375' : ''}
          className={`${styles.reviewTextContainer} ${isBig ? styles.reviewTextContainerBig : styles.reviewTextContainerSmall}`}
          data-name="Review Text Container"
        >
          <p
            id={isBig ? 'node-2172_2323' : isSmall ? 'node-2256_21376' : ''}
            className={`${styles.reviewText} ${isBig ? styles.reviewTextBig : styles.reviewTextSmall} ${isSmall && !isExpanded ? styles.reviewTextCollapsed : ''}`}
          >
            {reviewText}
          </p>
          {isSmall && showExpand && (
            <UnderlinedLinks
              className={styles.expandLink}
              text={isExpanded ? 'Collapse' : 'Expand'}
              onClick={handleExpandToggle}
            />
          )}
        </div>
        <div
          id={isBig ? 'node-2172_2324' : isSmall ? 'node-2256_21377' : ''}
          className={styles.footer}
          data-name="Footer"
        >
          <div
            id={isBig ? 'node-2172_2325' : isSmall ? 'node-2256_21378' : ''}
            className={styles.rating}
            data-name="Rating"
          >
            {[...Array(5)].map((_, index) => {
              const isFilled = index < rating;
              return (
                <div
                  key={index}
                  id={isBig ? `node-2172_${2326 + index}` : `node-2256_${21379 + index}`}
                  className={styles.starIcon}
                  data-name={isFilled ? 'Service icon/Star' : 'Service icon/Star empty'}
                >
                  <div
                    id={isBig ? `node-I2172_${2326 + index}-2419_28948` : `node-I2256_${21379 + index}-2419_28948`}
                    className={styles.starIconLabel}
                    data-name="Icon lable"
                  >
                    <div className={styles.starIconFill}>
                      <img
                        className={styles.starIconImage}
                        alt=""
                        src={isFilled ? imgStarFilled : imgStarEmpty}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            id={isBig ? 'node-2172_2331' : isSmall ? 'node-2256_21384' : ''}
            className={styles.reviewerInfo}
            data-name="Reviewer Info"
          >
            <p
              id={isBig ? 'node-2172_2332' : isSmall ? 'node-2256_21385' : ''}
              className={styles.reviewerName}
            >
              {reviewerName}
            </p>
            <p
              id={isBig ? 'node-2172_2333' : isSmall ? 'node-2256_21386' : ''}
              className={styles.reviewerAge}
            >
              {reviewerAge}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
