'use client';

import React from 'react';
import styles from './Newsletter.module.css';
import { ServiceIcon } from '../../Icon';

// Local image assets
const imgNewsletter = '/assets/Banners/figma/Newsletter/imgNewsletter.jpg';

export interface NewsletterProps {
  title?: string;
  privacyText?: string;
  inputFieldNewsletter?: boolean;
  className?: string;
}

export function Newsletter({
  title = 'Inspiration funded! Get the 2026 Travel Guide, straight to your inbox',
  privacyText = 'We will use this email to create your Wayure account, if you do not already have one.',
  inputFieldNewsletter = true,
  className,
}: NewsletterProps) {
  return (
    <div
      className={`${styles.newsletter} ${className || ''}`}
      data-name="Newsletter"
      data-node-id="2187:26574"
    >
      <div className={styles.background} aria-hidden="true">
        <img
          className={styles.backgroundImage}
          alt=""
          src={imgNewsletter}
        />
        <div className={styles.overlay} />
      </div>
      <div
        className={styles.container}
        data-name="Container"
        data-node-id="2187:25229"
      >
        <div
          className={styles.eventInfo}
          data-name="Event Info"
          data-node-id="2187:25314"
        >
          <div
            className={styles.date}
            data-name="Date"
            data-node-id="2187:25315"
          >
            <p className={styles.title} data-node-id="2187:25317">
              {title}
            </p>
            <div
              className={styles.formContainer}
              data-node-id="2187:25597"
            >
              {inputFieldNewsletter && (
                <div
                  className={styles.formRow}
                  data-node-id="2187:25572"
                >
                  <div
                    className={styles.formAtom}
                    data-name="Form Atom"
                    data-node-id="2187:25341"
                  >
                    <div
                      className={styles.formContainerInner}
                      data-name="Form Container"
                      data-node-id="I2187:25341;2125:5188"
                    >
                      <div
                        className={styles.dropdown}
                        data-name="Dropdown"
                        data-node-id="I2187:25341;2125:5167"
                      >
                        <div
                          className={styles.dropdownText}
                          data-name="Dropdown Text"
                          data-node-id="I2187:25341;2125:5224"
                        >
                          <div
                            className={styles.iconContainer}
                            data-name="Icon container"
                            data-node-id="I2187:25341;2125:5224;3080:76166"
                          />
                          <p
                            className={styles.inputPlaceholder}
                            data-node-id="I2187:25341;2125:5224;2125:5195"
                          >
                            Your E-mail address
                          </p>
                        </div>
                        <div
                          className={styles.dropdownBadge}
                          data-name="Dropdown Badge"
                          data-node-id="I2187:25341;2125:7625"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={styles.ctaButton}
                    data-name="CTA"
                    data-node-id="2187:25577"
                  >
                    <div
                      className={styles.buttonText}
                      data-name="Create Button"
                      data-node-id="I2187:25577;2006:1681"
                    >
                      <p data-node-id="I2187:25577;2006:1682">
                        SUBSCRIBE to newsletter
                      </p>
                    </div>
                    <div
                      className={styles.chevronIcon}
                      data-name="Service icon/Chevron right"
                      data-node-id="I2187:25577;2187:9790"
                    >
                      <ServiceIcon type="ChevronRight" size={17} />
                    </div>
                  </div>
                </div>
              )}
              <div
                className={styles.privacyText}
                data-node-id="2187:25598"
              >
                <p className={styles.privacyParagraph}>{privacyText}</p>
                <p className={styles.privacyParagraph}>
                  By proceeding, I declare that I have read the Privacy Policy
                  and accept the Terms and Conditions of use for the services
                  on the site. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
