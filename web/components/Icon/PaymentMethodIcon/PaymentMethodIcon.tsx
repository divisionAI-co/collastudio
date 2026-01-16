'use client';

import React from 'react';
import styles from './PaymentMethodIcon.module.css';

// Figma asset URLs (valid for 7 days)
const imgMastercard = 'https://www.figma.com/api/mcp/asset/078d72f2-fb4c-4828-a671-0a93b24075bb';
const imgVisa = 'https://www.figma.com/api/mcp/asset/f955a1fb-70b4-4648-8fcc-4c75419233ca';
const imgAmex = 'https://www.figma.com/api/mcp/asset/473d2289-f630-43c3-b294-a74b4590e29e';
const imgApplePay = 'https://www.figma.com/api/mcp/asset/746227c4-12e6-481d-9b75-64fddc28fde1';
const imgGooglePay = 'https://www.figma.com/api/mcp/asset/b2e06e3a-acd5-42c0-b186-2750301838f6';
const imgGooglePayG = 'https://www.figma.com/api/mcp/asset/2b8506ae-59e7-41da-b970-f9444795cce8';
const imgCB = 'https://www.figma.com/api/mcp/asset/319ec533-e2b2-4b43-acd4-3a7653550845';

export type PaymentMethod = 'Mastercard' | 'Visa' | 'Amex' | 'Apple pay' | 'Google Pay' | 'CB';

export interface PaymentMethodIconProps {
  method?: PaymentMethod;
  className?: string;
}

export const PaymentMethodIcon: React.FC<PaymentMethodIconProps> = ({
  method = 'Mastercard',
  className = '',
}) => {
  const classes = [
    styles.paymentMethodIcon,
    method === 'Amex' ? styles.amex : '',
    method === 'CB' ? styles.cb : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderIcon = () => {
    switch (method) {
      case 'Mastercard':
        return (
          <div className={styles.mastercardContainer}>
            <img src={imgMastercard} alt="Mastercard" className={styles.paymentImage} />
          </div>
        );
      case 'Visa':
        return (
          <div className={styles.visaContainer}>
            <img src={imgVisa} alt="Visa" className={styles.paymentImage} />
          </div>
        );
      case 'Amex':
        return (
          <div className={styles.amexContainer}>
            <img src={imgAmex} alt="American Express" className={styles.paymentImage} />
          </div>
        );
      case 'Apple pay':
        return (
          <div className={styles.applePayContainer}>
            <img src={imgApplePay} alt="Apple Pay" className={styles.paymentImage} />
          </div>
        );
      case 'Google Pay':
        return (
          <div className={styles.googlePayContainer}>
            <div className={styles.googlePayPay}>
              <img src={imgGooglePay} alt="Google Pay" className={styles.paymentImage} />
            </div>
            <div className={styles.googlePayG}>
              <img src={imgGooglePayG} alt="Google Pay G" className={styles.paymentImage} />
            </div>
          </div>
        );
      case 'CB':
        return (
          <div className={styles.cbContainer}>
            <img src={imgCB} alt="CB" className={styles.paymentImage} />
          </div>
        );
      default:
        return null;
    }
  };

  return <div className={classes}>{renderIcon()}</div>;
};

export default PaymentMethodIcon;
