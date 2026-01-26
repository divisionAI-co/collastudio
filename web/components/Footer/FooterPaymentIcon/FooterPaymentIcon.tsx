'use client';

import React from 'react';
import styles from './FooterPaymentIcon.module.css';

// Local icon assets - using same assets as Icon layer but within Footer layer
const imgMastercard = '/assets/icons/figma/PaymentMethodIcon/imgMastercard.svg';
const imgVisa = '/assets/icons/figma/PaymentMethodIcon/imgVisa.svg';
const imgAmex = '/assets/icons/figma/PaymentMethodIcon/imgAmex.svg';
const imgApplePay = '/assets/icons/figma/PaymentMethodIcon/imgApplePay.svg';
const imgGooglePay = '/assets/icons/figma/PaymentMethodIcon/imgGooglePay.svg';
const imgGooglePayG = '/assets/icons/figma/PaymentMethodIcon/imgGooglePayG.svg';
const imgCB = '/assets/icons/figma/PaymentMethodIcon/imgCB.svg';

export type FooterPaymentMethod = 'Mastercard' | 'Visa' | 'Amex' | 'Apple pay' | 'Google Pay' | 'CB';

export interface FooterPaymentIconProps {
  method?: FooterPaymentMethod;
  className?: string;
}

export const FooterPaymentIcon: React.FC<FooterPaymentIconProps> = ({
  method = 'Mastercard',
  className = '',
}) => {
  const classes = [
    styles.footerPaymentIcon,
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

export default FooterPaymentIcon;
