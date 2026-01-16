import React from 'react';
import {
  Star,
  ReviewStar,
  Flag,
  DifficultyRating,
  PaymentMethodIcon,
  ServiceIcon,
} from '../../../components/Icon';
import styles from './page.module.css';

export default function IconsStorybookPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Icon Storybook</h1>
        <p className={styles.subtitle}>Complete design system icons from Figma</p>

        {/* Star Icons */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Star Icons</h2>
          <div className={styles.iconGroup}>
            <h3 className={styles.groupTitle}>Star Sizes</h3>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <Star size="big" />
                <span className={styles.iconLabel}>Big</span>
              </div>
              <div className={styles.iconItem}>
                <Star size="Variant2" />
                <span className={styles.iconLabel}>Variant2</span>
              </div>
            </div>
          </div>
          <div className={styles.iconGroup}>
            <h3 className={styles.groupTitle}>Review Stars</h3>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <ReviewStar isFilled={true} />
                <span className={styles.iconLabel}>Filled</span>
              </div>
              <div className={styles.iconItem}>
                <ReviewStar isFilled={false} />
                <span className={styles.iconLabel}>Outline</span>
              </div>
            </div>
          </div>
        </section>

        {/* Flag Icons */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Flag Icons</h2>
          <div className={styles.iconGroup}>
            <h3 className={styles.groupTitle}>Languages</h3>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <Flag language="ITA" />
                <span className={styles.iconLabel}>ITA</span>
              </div>
              <div className={styles.iconItem}>
                <Flag language="ENG" />
                <span className={styles.iconLabel}>ENG</span>
              </div>
              <div className={styles.iconItem}>
                <Flag language="FRA" />
                <span className={styles.iconLabel}>FRA</span>
              </div>
              <div className={styles.iconItem}>
                <Flag language="DEU" />
                <span className={styles.iconLabel}>DEU</span>
              </div>
              <div className={styles.iconItem}>
                <Flag language="ESP" />
                <span className={styles.iconLabel}>ESP</span>
              </div>
            </div>
          </div>
        </section>

        {/* Difficulty Rating */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Difficulty Rating</h2>
          <div className={styles.iconGroup}>
            <h3 className={styles.groupTitle}>Difficulty Levels</h3>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <DifficultyRating difficulty="Easy" />
                <span className={styles.iconLabel}>Easy</span>
              </div>
              <div className={styles.iconItem}>
                <DifficultyRating difficulty="Mid" />
                <span className={styles.iconLabel}>Mid</span>
              </div>
              <div className={styles.iconItem}>
                <DifficultyRating difficulty="Hard" />
                <span className={styles.iconLabel}>Hard</span>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Method Icons */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Payment Method Icons</h2>
          <div className={styles.iconGroup}>
            <h3 className={styles.groupTitle}>Payment Methods</h3>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <PaymentMethodIcon method="Mastercard" />
                <span className={styles.iconLabel}>Mastercard</span>
              </div>
              <div className={styles.iconItem}>
                <PaymentMethodIcon method="Visa" />
                <span className={styles.iconLabel}>Visa</span>
              </div>
              <div className={styles.iconItem}>
                <PaymentMethodIcon method="Amex" />
                <span className={styles.iconLabel}>Amex</span>
              </div>
              <div className={styles.iconItem}>
                <PaymentMethodIcon method="Apple pay" />
                <span className={styles.iconLabel}>Apple Pay</span>
              </div>
              <div className={styles.iconItem}>
                <PaymentMethodIcon method="Google Pay" />
                <span className={styles.iconLabel}>Google Pay</span>
              </div>
              <div className={styles.iconItem}>
                <PaymentMethodIcon method="CB" />
                <span className={styles.iconLabel}>CB</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Icons */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Service Icons</h2>
          
          <div className={styles.iconGroup}>
            <h3 className={styles.groupTitle}>Navigation</h3>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <ServiceIcon type="ChevronLeft" />
                <span className={styles.iconLabel}>Chevron Left</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="ChevronRight" />
                <span className={styles.iconLabel}>Chevron Right</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="ChevronUp" />
                <span className={styles.iconLabel}>Chevron Up</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="ChevronDown" />
                <span className={styles.iconLabel}>Chevron Down</span>
              </div>
            </div>
          </div>

          <div className={styles.iconGroup}>
            <h3 className={styles.groupTitle}>User & Account</h3>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <ServiceIcon type="User" />
                <span className={styles.iconLabel}>User</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Logout" />
                <span className={styles.iconLabel}>Logout</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Backpack" />
                <span className={styles.iconLabel}>Backpack</span>
              </div>
            </div>
          </div>

          <div className={styles.iconGroup}>
            <h3 className={styles.groupTitle}>Actions</h3>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <ServiceIcon type="Check" />
                <span className={styles.iconLabel}>Check</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Plus" />
                <span className={styles.iconLabel}>Plus</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Close" />
                <span className={styles.iconLabel}>Close</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Search" />
                <span className={styles.iconLabel}>Search</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Filter" />
                <span className={styles.iconLabel}>Filter</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Download" />
                <span className={styles.iconLabel}>Download</span>
              </div>
            </div>
          </div>

          <div className={styles.iconGroup}>
            <h3 className={styles.groupTitle}>Favorites & Rating</h3>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <ServiceIcon type="HeartOn" />
                <span className={styles.iconLabel}>Heart On</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="HeartOff" />
                <span className={styles.iconLabel}>Heart Off</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Star" />
                <span className={styles.iconLabel}>Star</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="StarEmpty" />
                <span className={styles.iconLabel}>Star Empty</span>
              </div>
            </div>
          </div>

          <div className={styles.iconGroup}>
            <h3 className={styles.groupTitle}>Communication</h3>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <ServiceIcon type="Phone" />
                <span className={styles.iconLabel}>Phone</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Whatsapp" />
                <span className={styles.iconLabel}>Whatsapp</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="ExternalLink" />
                <span className={styles.iconLabel}>External Link</span>
              </div>
            </div>
          </div>

          <div className={styles.iconGroup}>
            <h3 className={styles.groupTitle}>Social Media</h3>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <ServiceIcon type="Facebook" />
                <span className={styles.iconLabel}>Facebook</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Instagram" />
                <span className={styles.iconLabel}>Instagram</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Youtube" />
                <span className={styles.iconLabel}>Youtube</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Google" />
                <span className={styles.iconLabel}>Google</span>
              </div>
            </div>
          </div>

          <div className={styles.iconGroup}>
            <h3 className={styles.groupTitle}>Location & Travel</h3>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <ServiceIcon type="Map" />
                <span className={styles.iconLabel}>Map</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Bed" />
                <span className={styles.iconLabel}>Bed</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Calendar" />
                <span className={styles.iconLabel}>Calendar</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Flight" />
                <span className={styles.iconLabel}>Flight</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Clock" />
                <span className={styles.iconLabel}>Clock</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Bus" />
                <span className={styles.iconLabel}>Bus</span>
              </div>
            </div>
          </div>

          <div className={styles.iconGroup}>
            <h3 className={styles.groupTitle}>UI Elements</h3>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <ServiceIcon type="Menu" />
                <span className={styles.iconLabel}>Menu</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Info" />
                <span className={styles.iconLabel}>Info</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Circle" />
                <span className={styles.iconLabel}>Circle</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="CircleCheck" />
                <span className={styles.iconLabel}>Circle Check</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="CheckTrue" />
                <span className={styles.iconLabel}>Check True</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="CheckFalse" />
                <span className={styles.iconLabel}>Check False</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="EyeOpen" />
                <span className={styles.iconLabel}>Eye Open</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="EyeClosed" />
                <span className={styles.iconLabel}>Eye Closed</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Pen" />
                <span className={styles.iconLabel}>Pen</span>
              </div>
            </div>
          </div>

          <div className={styles.iconGroup}>
            <h3 className={styles.groupTitle}>Services & Features</h3>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <ServiceIcon type="Breakfast" />
                <span className={styles.iconLabel}>Breakfast</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Shield" />
                <span className={styles.iconLabel}>Shield</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Assistance" />
                <span className={styles.iconLabel}>Assistance</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Guide" />
                <span className={styles.iconLabel}>Guide</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="App" />
                <span className={styles.iconLabel}>App</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="GpsTrack" />
                <span className={styles.iconLabel}>GPS Track</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Tree" />
                <span className={styles.iconLabel}>Tree</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Gift" />
                <span className={styles.iconLabel}>Gift</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Spinner" />
                <span className={styles.iconLabel}>Spinner</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Pdf" />
                <span className={styles.iconLabel}>PDF</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Stopwatch" />
                <span className={styles.iconLabel}>Stopwatch</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Invoice" />
                <span className={styles.iconLabel}>Invoice</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Contract" />
                <span className={styles.iconLabel}>Contract</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Estimate" />
                <span className={styles.iconLabel}>Estimate</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Sign" />
                <span className={styles.iconLabel}>Sign</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Shop" />
                <span className={styles.iconLabel}>Shop</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="QRCode" />
                <span className={styles.iconLabel}>QR Code</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Kilometers" />
                <span className={styles.iconLabel}>Kilometers</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="Union" />
                <span className={styles.iconLabel}>Union</span>
              </div>
              <div className={styles.iconItem}>
                <ServiceIcon type="ArrowToBottom" />
                <span className={styles.iconLabel}>Arrow To Bottom</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
