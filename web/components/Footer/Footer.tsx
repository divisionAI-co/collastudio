'use client';

import React from 'react';
import styles from './Footer.module.css';
import { FooterLogo } from './FooterLogo';
import { FooterSocialIcon } from './FooterSocialIcon';
import { FooterPaymentIcon } from './FooterPaymentIcon';
import { FooterLanguageSelector } from './FooterLanguageSelector';
import { FooterBrandLogo } from './FooterBrandLogo';

// Local assets
const imgLine26 = '/assets/Footer/figma/Footer/imgLine26.svg';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const classes = [styles.footer, className].filter(Boolean).join(' ');

  return (
    <div className={classes} data-name="Footer" data-node-id="2202:10176">
      {/* Brand Section */}
      <div className={styles.brandSection} data-node-id="2202:10009">
        <div className={styles.brandContainer} data-name="Brand" data-node-id="2202:10172">
          <FooterBrandLogo data-node-id="I2202:10172;2202:9842" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className={styles.mainContent} data-node-id="2202:10081">
        <div className={styles.container}>
          {/* Links Section */}
          <div className={styles.linksSection} data-node-id="2202:10013">
          {/* Logo */}
          <div className={styles.logoSection} data-node-id="2187:28483">
            <FooterLogo className={styles.logo} />
          </div>

          {/* Links Columns */}
          <div className={styles.linksColumns} data-node-id="2187:28489">
            {/* Destinations Column */}
            <div className={styles.linkColumn} data-node-id="2202:9930">
              <p className={styles.columnTitle} data-node-id="2202:9931">
                DESTINATIONS
              </p>
              <div className={styles.linkList} data-node-id="2202:9932">
                {[
                  'Saint james way',
                  'Italy',
                  'France',
                  'Portugal',
                  'Spain',
                  'Malta',
                  'Japan',
                  'England',
                  'Ireland',
                ].map((link, index) => (
                  <div
                    key={index}
                    className={styles.linkItem}
                    data-name="Small links"
                    data-node-id={`2202:${9933 + index}`}
                  >
                    <p className={styles.linkText} data-node-id={`I2202:${9933 + index};2202:9879`}>
                      {link}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* About Us Column */}
            <div className={styles.linkColumn} data-node-id="2202:9968">
              <p className={styles.columnTitle} data-node-id="2202:9969">
                ABOUT US
              </p>
              <div className={styles.linkList} data-node-id="2202:9970">
                {[
                  'Who we are',
                  'How it works',
                  'Self guided travel',
                  'Reviews',
                  'Stories',
                ].map((link, index) => (
                  <div
                    key={index}
                    className={styles.linkItem}
                    data-name="Small links"
                    data-node-id={`2202:${9971 + index}`}
                  >
                    <p className={styles.linkText} data-node-id={`I2202:${9971 + index};2202:9879`}>
                      {link}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Column */}
            <div className={styles.linkColumn} data-node-id="2202:10082">
              <p className={styles.columnTitle} data-node-id="2202:10083">
                SUPPPORT
              </p>
              <div className={styles.linkList} data-node-id="2202:10084">
                {[
                  'Cancellations and refunds',
                  'During the trip',
                  'Accommodations and service classes',
                  'Payments and billing',
                  'Travel and tickets',
                ].map((link, index) => (
                  <div
                    key={index}
                    className={styles.linkItem}
                    data-name="Small links"
                    data-node-id={`2202:${10085 + index}`}
                  >
                    <p className={styles.linkText} data-node-id={`I2202:${10085 + index};2202:9879`}>
                      {link}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Language Selector */}
        <div className={styles.socialLanguageSection} data-node-id="2202:10138">
          <div className={styles.socialIcons} data-node-id="2202:31911">
            <FooterSocialIcon type="Instagram" size={27} className={styles.socialIcon} />
            <FooterSocialIcon type="Facebook" size={24} className={styles.socialIcon} />
            <FooterSocialIcon type="Youtube" size={29} className={styles.socialIcon} />
          </div>
          <FooterLanguageSelector language="ENG" className={styles.languageSelector} />
        </div>

        {/* Divider */}
        <div className={styles.divider} data-node-id="2202:10017">
          <div className={styles.dividerLine}>
            <img alt="" className={styles.dividerImage} src={imgLine26} />
          </div>
        </div>

        {/* Legal Information */}
        <div className={styles.legalSection} data-node-id="2202:10019">
          <div className={styles.legalText} data-node-id="2202:10020">
            <p className={styles.legalParagraph}>
              Wayure is part of Get Walks Travel SL
            </p>
            <p className={styles.legalParagraph}>
              VAT ESB67844159 - Plaza Olimpio Perez, 15706 Santiago de Compostela - España | XG License - 803
            </p>
          </div>
          <p className={styles.termsText} data-node-id="2202:10021">
            Privacy & cookie policy| Terms and conditions
          </p>
        </div>

        {/* Payment Methods */}
        <div className={styles.paymentSection} data-node-id="2202:10022">
          <div className={styles.paymentContent} data-node-id="2202:10024">
            <div className={styles.paymentLabel} data-node-id="2202:10161">
              <p className={styles.paymentLabelText}>Secure payments via:</p>
            </div>
            <div className={styles.paymentIcons} data-node-id="2202:10163">
              <div className={styles.paymentIconWrapper} data-name="Payment method icon" data-node-id="2202:10025">
                <FooterPaymentIcon method="Mastercard" className={styles.paymentIcon} />
              </div>
              <div className={styles.paymentIconWrapper} data-name="Payment method icon" data-node-id="2202:10026">
                <FooterPaymentIcon method="Visa" className={styles.paymentIcon} />
              </div>
              <div className={styles.paymentIconWrapper} data-name="Payment method icon" data-node-id="2202:10027">
                <FooterPaymentIcon method="Amex" className={styles.paymentIcon} />
              </div>
              <div className={styles.paymentIconWrapper} data-name="Payment method icon" data-node-id="2202:10028">
                <FooterPaymentIcon method="Apple pay" className={styles.paymentIcon} />
              </div>
              <div className={styles.paymentIconWrapper} data-name="Payment method icon" data-node-id="2202:10029">
                <FooterPaymentIcon method="Google Pay" className={styles.paymentIcon} />
              </div>
              <div className={styles.paymentIconWrapper} data-name="Payment method icon" data-node-id="2202:10030">
                <FooterPaymentIcon method="CB" className={styles.paymentIcon} />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
