'use client';

import React from 'react';
import styles from './CardStepSlide.module.css';

// Figma image assets
const imgStar = '/assets/icons/figma/ServiceIcon/Union.svg';
const imgChevronLeft = '/assets/Card/figma/CardStepSlide/imgChevronLeft.svg';
const imgChevronRight = '/assets/Card/figma/CardStepSlide/imgChevronRight.svg';
const imgSeparator = '/assets/Card/figma/CardStepSlide/imgSeparator.svg';
const imgVisual = '/assets/Card/figma/CardStepSlide/imgVisual.jpg';
const imgVisualSmall = '/assets/Card/figma/CardStepSlide/imgVisualSmall.png';
const imgStarSmall = '/assets/icons/figma/ServiceIcon/Union.svg';

export interface CardStepSlideProps {
  number?: string;
  title?: string;
  paragraph?: string;
  showPlus?: boolean;
  showPaymentInfo?: boolean;
  device?: 'Default' | 'Mobile';
  status?: 'Off' | 'On';
  className?: string;
}

// Calendar component to reuse
const CalendarComponent = ({ isStatusOn, imgChevronLeft, imgChevronRight, imgSeparator }: { isStatusOn: boolean; imgChevronLeft: string; imgChevronRight: string; imgSeparator: string }) => (
  <div
    data-node-id={isStatusOn ? 'I2722:52022;2717:6915' : 'I2731:69051;2717:6915'}
    className={styles.calendar}
    data-name="Calendar"
  >
    <div
      className={styles.calendarCaption}
      data-name="Caption"
      data-node-id={isStatusOn ? 'I2722:52022;2717:6916' : 'I2731:69051;2717:6916'}
    >
      <div className={styles.calendarChevronLeft}>
        <div
          className={styles.chevronIcon}
          data-name="Service icon/Chevron left"
          data-node-id={isStatusOn ? 'I2722:52022;2717:6918' : 'I2731:69051;2717:6918'}
        >
          <div
            className={styles.iconLabel}
            data-name="Icon lable"
            data-node-id={isStatusOn ? 'I2722:52022;2717:6918;2419:28963' : 'I2731:69051;2717:6918;2419:28963'}
          >
            <img
              className={styles.iconImage}
              alt=""
              src={imgChevronLeft}
            />
          </div>
        </div>
      </div>
      <div className={styles.calendarMonthYear}>
        <div
          className={styles.month}
          data-name="Month"
          data-node-id={isStatusOn ? 'I2722:52022;2717:6920' : 'I2731:69051;2717:6920'}
        >
          <div
            className={styles.monthText}
            data-node-id={isStatusOn ? 'I2722:52022;2717:6920;2419:27256' : 'I2731:69051;2717:6920;2419:27256'}
          >
            <p>June</p>
          </div>
        </div>
        <div
          className={styles.year}
          data-name="Year"
          data-node-id={isStatusOn ? 'I2722:52022;2717:6921' : 'I2731:69051;2717:6921'}
        >
          <div
            className={styles.yearText}
            data-node-id={isStatusOn ? 'I2722:52022;2717:6921;2419:27281' : 'I2731:69051;2717:6921;2419:27281'}
          >
            <p>2026</p>
          </div>
        </div>
      </div>
      <div className={styles.calendarChevronRight}>
        <div
          className={styles.chevronIcon}
          data-name="Service icon/Chevron right"
          data-node-id={isStatusOn ? 'I2722:52022;2717:6923' : 'I2731:69051;2717:6923'}
        >
          <div
            className={styles.iconLabel}
            data-name="Icon lable"
            data-node-id={isStatusOn ? 'I2722:52022;2717:6923;2419:28964' : 'I2731:69051;2717:6923;2419:28964'}
          >
            <img
              className={styles.iconImage}
              alt=""
              src={imgChevronRight}
            />
          </div>
        </div>
      </div>
    </div>
    <div
      className={styles.calendarBody}
      data-name="Body"
      data-node-id={isStatusOn ? 'I2722:52022;2717:6924' : 'I2731:69051;2717:6924'}
    >
      <div
        className={styles.weekdays}
        data-name="Weekdays"
        data-node-id={isStatusOn ? 'I2722:52022;2717:6925' : 'I2731:69051;2717:6925'}
      >
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
          <div
            key={index}
            className={styles.weekday}
            data-name="Weekday"
          >
            <div className={styles.weekdayText}>
              <p className={index === 0 ? styles.weekdayTextGray : index >= 5 ? styles.weekdayTextRed : ''}>
                {day}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className={styles.separator}
        data-name="Separator"
        data-node-id={isStatusOn ? 'I2722:52022;2717:6940' : 'I2731:69051;2717:6940'}
      >
        <div className={styles.separatorOverlay}>
          <img
            className={styles.separatorImage}
            alt=""
            src={imgSeparator}
          />
        </div>
      </div>
      <div className={styles.calendarDays}>
        <div className={styles.week}>
          <div className={styles.day}>
            <div className={styles.dayText}>
              <p className={styles.dayTextRed}>1</p>
            </div>
          </div>
        </div>
        <div className={styles.week}>
          {[2, 3, 4, 5, 6, 7, 8].map((day) => (
            <div key={day} className={styles.day}>
              <div className={styles.dayText}>
                <p className={day >= 7 ? styles.dayTextRed : ''}>{day}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.week}>
          {[9, 10, 11, 12, 13, 14, 15].map((day) => (
            <div key={day} className={styles.day}>
              <div className={styles.dayText}>
                <p className={day <= 11 ? styles.dayTextGray : day >= 14 ? styles.dayTextRed : ''}>{day}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.week}>
          {[16, 17, 18, 19, 20, 21, 22].map((day) => {
            const isSelected = day >= 18 && day <= 22;
            const isFirstSelected = day === 18;
            const isLastSelected = day === 22;
            return (
              <div
                key={day}
                className={`${styles.day} ${isSelected ? styles.daySelected : ''} ${isFirstSelected ? styles.daySelectedFirst : ''} ${isLastSelected ? styles.daySelectedLast : ''}`}
              >
                <div className={styles.dayText}>
                  <p>{day}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.week}>
          {[23, 24, 25, 26, 27, 28, 29].map((day) => (
            <div key={day} className={styles.day}>
              <div className={styles.dayText}>
                <p className={day >= 28 ? styles.dayTextRed : ''}>{day}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.week}>
          {[30, 31].map((day) => (
            <div key={day} className={styles.day}>
              <div className={styles.dayText}>
                <p>{day}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Visual images component to reuse
const VisualImagesComponent = ({ isStatusOn, imgVisual, imgVisualSmall, imgStarSmall }: { isStatusOn: boolean; imgVisual: string; imgVisualSmall: string; imgStarSmall: string }) => (
  <>
    <div
      data-node-id={isStatusOn ? 'I2722:52022;2717:7039' : 'I2731:69051;2717:7039'}
      className={styles.visualImage}
      data-name="Image"
    >
      <div className={styles.imageOverlay} aria-hidden="true">
        <img
          className={styles.imageElement}
          alt=""
          src={imgVisual}
        />
        <div className={styles.imageDarken} />
      </div>
      <div
        className={styles.imageTags}
        data-name="Container"
        data-node-id={isStatusOn ? 'I2722:52022;2717:7044' : 'I2731:69051;2717:7044'}
      >
        {['4 Stars hotels', 'Breakfast', 'Dinner included'].map((tag, index) => (
          <div
            key={index}
            className={styles.imageTag}
            data-name="Plus"
            style={index === 2 ? { gridColumn: '1 / 2' } : undefined}
          >
            <div
              className={styles.tagContent}
              data-name="Feature Content"
            >
              <div className={styles.tagStarWrapper}>
                <div
                  className={styles.tagStar}
                  data-name="Star"
                >
                  <div className={styles.tagStarFill}>
                    <img
                      className={styles.tagStarImage}
                      alt=""
                      src={imgStarSmall}
                    />
                  </div>
                </div>
              </div>
              <p className={styles.tagText}>
                {tag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div
      data-node-id={isStatusOn ? 'I2722:52022;2717:7057' : 'I2731:69051;2717:7057'}
      className={styles.visualSmall}
      data-name="Container"
    >
      <img
        className={styles.visualSmallImage}
        alt=""
        src={imgVisualSmall}
      />
    </div>
  </>
);

export function CardStepSlide({
  number = '02',
  title = 'Add details and book',
  paragraph = 'This is where the dream becomes a plan. Choose your dates, group size (or travel solo), and your preferred comfort level (Essence, Comfort, or Serenity). You can even add flights or extensions.',
  showPlus = true,
  showPaymentInfo = false,
  device = 'Default',
  status = 'Off',
  className,
}: CardStepSlideProps) {
  const isStatusOn = status === 'On';
  const isDeviceMobile = device === 'Mobile';

  return (
    <div
      data-node-id={isStatusOn ? (isDeviceMobile ? '2722:48669' : '2722:48658') : '2717:4378'}
      className={`${styles.cardStepSlide} ${className || ''}`}
    >
      <div
        data-node-id={isStatusOn ? (isDeviceMobile ? '2722:52403' : '2722:52021') : '2722:49420'}
        className={`${styles.cardContainer} ${isStatusOn ? styles.cardContainerOn : styles.cardContainerOff} ${isDeviceMobile ? styles.cardContainerMobile : ''}`}
        data-name="Card container"
      >
        {/* Desktop: Header first, Mobile: Header first */}
        <div
          data-node-id={isStatusOn ? (isDeviceMobile ? '2722:52405' : '2722:52023') : '2717:3460'}
          className={styles.stepHeader}
          data-name="Step header"
        >
          <p className={styles.stepNumber} data-node-id={isStatusOn ? (isDeviceMobile ? '2722:52406' : '2722:52024') : '2717:3461'}>
            {number}
          </p>
          <div
            data-node-id={isStatusOn ? (isDeviceMobile ? '2722:52407' : '2722:52025') : '2717:3462'}
            className={styles.plusAndTitle}
            data-name="Plus and title"
          >
            {showPlus && (
              <div
                className={styles.consultantTag}
                data-name="Plus"
                data-node-id={isStatusOn ? (isDeviceMobile ? '2722:52408' : '2722:52026') : '2717:4379'}
              >
                <div
                  className={styles.featureContent}
                  data-name="Feature Content"
                  data-node-id={isStatusOn ? (isDeviceMobile ? 'I2722:52408;2006:11381' : 'I2722:52026;2006:11381') : 'I2717:4379;2006:11381'}
                >
                  <div className={styles.starWrapper}>
                    <div
                      className={styles.star}
                      data-name="Star"
                      data-node-id={isStatusOn ? (isDeviceMobile ? 'I2722:52408;2006:11385' : 'I2722:52026;2006:11385') : 'I2717:4379;2006:11385'}
                    >
                      <div className={styles.starFill}>
                        <img
                          alt=""
                          className={styles.starImage}
                          src={imgStar}
                        />
                      </div>
                    </div>
                  </div>
                  <p
                    className={styles.consultantText}
                    data-node-id={isStatusOn ? (isDeviceMobile ? 'I2722:52408;2006:11383' : 'I2722:52026;2006:11383') : 'I2717:4379;2006:11383'}
                  >
                    wayure consultant by your side
                  </p>
                </div>
              </div>
            )}
            <p
              className={styles.title}
              data-node-id={isStatusOn ? (isDeviceMobile ? '2722:52409' : '2722:52027') : '2717:3464'}
            >
              {title}
            </p>
          </div>
        </div>

        {/* Desktop: Step body with visual container and body content side by side */}
        {!isDeviceMobile && (
          <div
            data-node-id={isStatusOn ? '2722:52028' : '2717:4900'}
            className={styles.stepBody}
            data-name="Step body"
          >
            <div
              data-node-id={isStatusOn ? '2722:52022' : '2731:69051'}
              className={styles.visualContainer}
              data-name="Step visual container"
            >
              <div
                data-node-id={isStatusOn ? 'I2722:52022;2717:6914' : 'I2731:69051;2717:6914'}
                className={styles.visual2}
                data-name="Visual 2"
              >
                <CalendarComponent
                  isStatusOn={isStatusOn}
                  imgChevronLeft={imgChevronLeft}
                  imgChevronRight={imgChevronRight}
                  imgSeparator={imgSeparator}
                />
                <VisualImagesComponent
                  isStatusOn={isStatusOn}
                  imgVisual={imgVisual}
                  imgVisualSmall={imgVisualSmall}
                  imgStarSmall={imgStarSmall}
                />
              </div>
            </div>
            {isStatusOn && (
              <div
                data-node-id="2722:52029"
                className={styles.bodyContent}
                data-name="Body"
              >
                <p
                  className={styles.paragraph}
                  data-node-id="2722:52030"
                >
                  {paragraph}
                </p>
                {showPaymentInfo && (
                  <div
                    className={styles.paymentInfo}
                    data-name="Next steps/payment recap"
                    data-node-id="2722:52031"
                  >
                    <div
                      className={styles.paymentField}
                      data-name="Field 1"
                      data-node-id="I2722:52031;2543:40910"
                    >
                      <div
                        className={styles.paymentFieldContent}
                        data-node-id="I2722:52031;2543:40911"
                      >
                        <p
                          className={styles.paymentText}
                          data-node-id="I2722:52031;2543:40912"
                        >
                          Lock it in with a flat €129 deposit
                        </p>
                      </div>
                    </div>
                    <div
                      className={styles.paymentFooter}
                      data-node-id="I2722:52031;2543:40917"
                    >
                      <p
                        className={styles.paymentFooterText}
                        data-node-id="I2722:52031;2543:40918"
                      >
                        And we'll take it from there, crafting every detail of the trip just for you.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Mobile: Step body with paragraph and payment info first, then visual container below */}
        {isDeviceMobile && isStatusOn && (
          <>
            <div
              data-node-id="2722:52410"
              className={styles.stepBodyMobile}
              data-name="Step body"
            >
              <div
                data-node-id="2722:52411"
                className={styles.bodyContent}
                data-name="Body"
              >
                <p
                  className={styles.paragraph}
                  data-node-id="2722:52412"
                >
                  {paragraph}
                </p>
                {showPaymentInfo && (
                  <div
                    className={styles.paymentInfo}
                    data-name="Next steps/payment recap"
                    data-node-id="2722:52413"
                  >
                    <div
                      className={styles.paymentField}
                      data-name="Field 1"
                      data-node-id="I2722:52413;2543:40910"
                    >
                      <div
                        className={styles.paymentFieldContent}
                        data-node-id="I2722:52413;2543:40911"
                      >
                        <p
                          className={styles.paymentText}
                          data-node-id="I2722:52413;2543:40912"
                        >
                          Lock it in with a flat €129 deposit
                        </p>
                      </div>
                    </div>
                    <div
                      className={styles.paymentFooter}
                      data-node-id="I2722:52413;2543:40917"
                    >
                      <p
                        className={styles.paymentFooterText}
                        data-node-id="I2722:52413;2543:40918"
                      >
                        And we'll take it from there, crafting every detail of the trip just for you.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Mobile: Visual container positioned below the content */}
            <div
              data-node-id="2722:52404"
              className={styles.visualContainerMobile}
              data-name="Step visual container"
            >
              <div
                data-node-id="I2722:52404;2717:6914"
                className={styles.visual2}
                data-name="Visual 2"
              >
                <CalendarComponent
                  isStatusOn={isStatusOn}
                  imgChevronLeft={imgChevronLeft}
                  imgChevronRight={imgChevronRight}
                  imgSeparator={imgSeparator}
                />
                <VisualImagesComponent
                  isStatusOn={isStatusOn}
                  imgVisual={imgVisual}
                  imgVisualSmall={imgVisualSmall}
                  imgStarSmall={imgStarSmall}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CardStepSlide;
