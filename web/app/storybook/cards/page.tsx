'use client';

import React, { useState } from 'react';
import {
  DestinationCard,
  CardImage,
  CardTravel,
  CardTravelServiceClasses,
  BlogCard,
  ValueCard,
  IgCard,
  CardGiftCard,
  ItineraryCard,
  CardStepSlide,
  FlightTransferDetails,
  HotelDetails,
  MapWaypoint,
  Review,
  TeamRole,
  CardTeam,
  VideoYt,
} from '../../../components/Card';
import { ComponentPlaygroundModal, ControlConfig } from '../../../components/Playground';
import styles from './page.module.css';

const cardStepSlideControls: ControlConfig[] = [
  {
    name: 'device',
    label: 'Device',
    type: 'select',
    defaultValue: 'Default',
    options: [
      { label: 'Default', value: 'Default' },
      { label: 'Mobile', value: 'Mobile' },
    ],
  },
  {
    name: 'status',
    label: 'Status',
    type: 'boolean',
    defaultValue: true,
  },
  {
    name: 'number',
    label: 'Number',
    type: 'text',
    defaultValue: '02',
    placeholder: 'Step number',
  },
  {
    name: 'title',
    label: 'Title',
    type: 'text',
    defaultValue: 'Add details and book',
    placeholder: 'Step title',
  },
  {
    name: 'paragraph',
    label: 'Paragraph',
    type: 'textarea',
    defaultValue: 'This is where the dream becomes a plan. Choose your dates, group size (or travel solo), and your preferred comfort level (Essence, Comfort, or Serenity). You can even add flights or extensions.',
    placeholder: 'Description text',
  },
  {
    name: 'showPlus',
    label: 'Show plus',
    type: 'boolean',
    defaultValue: true,
  },
  {
    name: 'showPaymentInfo',
    label: 'Show payment info',
    type: 'boolean',
    defaultValue: true,
  },
];

export default function CardsStorybookPage() {
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cards Components</h1>
        <p className={styles.subtitle}>Complete design system cards from Figma</p>

        {/* Destination Card Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Destination Card</h2>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Property 1: Off</h3>
            <div className={styles.componentRow}>
              <DestinationCard text="Ireland" number="6" property1={false} />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Property 1: On</h3>
            <div className={styles.componentRow}>
              <DestinationCard text="Ireland" number="6" property1={true} />
            </div>
          </div>
        </section>

        {/* Card Image Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Card Image</h2>
          <div className={styles.componentGroup}>
            <div className={styles.componentRow}>
              <CardImage />
            </div>
          </div>
        </section>

        {/* Card Travel Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Card Travel</h2>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Property 1: Off</h3>
            <div className={styles.componentRow}>
              <CardTravel
                title="The Portuguese Way: From Vigo to Santiago and back"
                destination="ST.JAMES WAY "
                price="515"
                property1={false}
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Property 1: On</h3>
            <div className={styles.componentRow}>
              <CardTravel
                title="The Portuguese Way: From Vigo to Santiago and back"
                destination="ST.JAMES WAY "
                price="515"
                property1={true}
              />
            </div>
          </div>
        </section>

        {/* Card Travel Service Classes Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Card Travel Service Classes</h2>
          <div className={styles.componentGroup}>
            <div className={styles.componentRow}>
              <CardTravelServiceClasses
                type="ESSENCE"
                title="The Portuguese Way: From Vigo to Santiago and back"
                showPlus1={true}
                showPlus2={true}
                showPlus3={true}
                showPlus4={true}
              />
            </div>
          </div>
        </section>

        {/* Blog Card Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Blog Card</h2>
          <div className={styles.componentGroup}>
            <div className={styles.componentRow}>
              <BlogCard
                showCta={true}
                title="How to approach (and enjoy) your first walking holiday"
                showTag={true}
              />
            </div>
          </div>
        </section>

        {/* Value Card Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Value Card</h2>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Status: On</h3>
            <div className={styles.componentRow}>
              <ValueCard
                headline="Modern life obsesses over shortcuts; we choose the curve"
                body="We value the winding path over the efficient route, because we know that nature and personal growth does not move in straight lines. We celebrate the detour, for that is often where the most transformative moments are found."
                status={true}
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Status: Off</h3>
            <div className={styles.componentRow}>
              <ValueCard
                headline="Modern life obsesses over shortcuts; we choose the curve"
                body="We value the winding path over the efficient route, because we know that nature and personal growth does not move in straight lines. We celebrate the detour, for that is often where the most transformative moments are found."
                status={false}
              />
            </div>
          </div>
        </section>

        {/* IG Card Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>IG Card</h2>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Typology: Post</h3>
            <div className={styles.componentRow}>
              <IgCard
                copy="Ieri 17 Aprile abbiamo ritirato, a Santiago de Compostela, il premio 🏅 &quot;Calidad Turistica&quot; che ci certifica come Tour Operator che offre servizi di qualità in Spagna."
                typology="Post"
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Typology: Reel</h3>
            <div className={styles.componentRow}>
              <IgCard
                copy="Ieri 17 Aprile abbiamo ritirato, a Santiago de Compostela, il premio 🏅 &quot;Calidad Turistica&quot; che ci certifica come Tour Operator che offre servizi di qualità in Spagna."
                typology="Reel"
              />
            </div>
          </div>
        </section>

        {/* Card Gift Card Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Card Gift Card</h2>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Status: On</h3>
            <div className={styles.componentRow}>
              <CardGiftCard
                title="200€ Gift Card"
                body="Best for someone who keeps saying &quot;I'll go next year.&quot;"
                status={true}
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Status: Off</h3>
            <div className={styles.componentRow}>
              <CardGiftCard
                title="200€ Gift Card"
                body="Best for someone who keeps saying &quot;I'll go next year.&quot;"
                status={false}
              />
            </div>
          </div>
        </section>

        {/* Itinerary Card Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Itinerary Card</h2>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Property 1: On (Expanded)</h3>
            <div className={styles.componentRow}>
              <ItineraryCard
                date="02 Novembre"
                title="From Vigo to Nigaran"
                km="1.500"
                hoursWalking="2"
                elevation="1.500"
                showKm={true}
                showFlightTransferDetails={true}
                showHotelDetails={true}
                showElevationContainer={true}
                property1={true}
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Property 1: Off (Collapsed)</h3>
            <div className={styles.componentRow}>
              <ItineraryCard
                date="02 Novembre"
                title="From Vigo to Nigaran"
                km="1.500"
                hoursWalking="2"
                elevation="1.500"
                showKm={true}
                showFlightTransferDetails={true}
                showHotelDetails={true}
                showElevationContainer={true}
                property1={false}
              />
            </div>
          </div>
        </section>

        {/* Card Step Slide Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Card Step Slide</h2>
            <button
              className={styles.exploreButton}
              onClick={() => setIsPlaygroundOpen(true)}
            >
              Explore component behavior
            </button>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Device: Default, Status: Off</h3>
            <div className={styles.componentRow}>
              <CardStepSlide
                number="02"
                title="Add details and book"
                showPlus={true}
                device="Default"
                status="Off"
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Device: Default, Status: On</h3>
            <div className={styles.componentRow}>
              <CardStepSlide
                number="02"
                title="Add details and book"
                paragraph="This is where the dream becomes a plan. Choose your dates, group size (or travel solo), and your preferred comfort level (Essence, Comfort, or Serenity). You can even add flights or extensions."
                showPlus={true}
                showPaymentInfo={true}
                device="Default"
                status="On"
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Device: Mobile, Status: Off</h3>
            <div className={styles.componentRow}>
              <CardStepSlide
                number="02"
                title="Add details and book"
                showPlus={true}
                device="Mobile"
                status="Off"
              />
            </div>
          </div>
          <div className={styles.componentGroup}>
            <h3 className={styles.groupTitle}>Device: Mobile, Status: On</h3>
            <div className={styles.componentRow}>
              <CardStepSlide
                number="02"
                title="Add details and book"
                paragraph="This is where the dream becomes a plan. Choose your dates, group size (or travel solo), and your preferred comfort level (Essence, Comfort, or Serenity). You can even add flights or extensions."
                showPlus={true}
                showPaymentInfo={true}
                device="Mobile"
                status="On"
              />
            </div>
          </div>
        </section>

        {/* Component Playground Modal */}
        <ComponentPlaygroundModal
          title="Step slide"
          component={(controlProps) => {
            const status = controlProps.status ? 'On' : 'Off';
            const isStatusOn = controlProps.status as boolean;
            return (
              <CardStepSlide
                device={controlProps.device as 'Default' | 'Mobile'}
                status={status}
                number={controlProps.number as string}
                title={controlProps.title as string}
                paragraph={isStatusOn ? (controlProps.paragraph as string) : undefined}
                showPlus={controlProps.showPlus as boolean}
                showPaymentInfo={isStatusOn ? (controlProps.showPaymentInfo as boolean) : false}
              />
            );
          }}
          controls={cardStepSlideControls}
          isOpen={isPlaygroundOpen}
          onClose={() => setIsPlaygroundOpen(false)}
        />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Hotel Details</h2>
        <div className={styles.componentRow}>
          <HotelDetails />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Flight & Transfer Details</h2>
        <div className={styles.componentRow}>
          <FlightTransferDetails />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Map Waypoint</h2>
        <div className={styles.componentRow}>
          <MapWaypoint />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Review</h2>
        <div className={styles.componentGroup}>
          <h3 className={styles.groupTitle}>Property 1: Big</h3>
          <div className={styles.componentRow}>
            <Review
              property1="Big"
              showImage={true}
              rating={4}
            />
          </div>
        </div>
        <div className={styles.componentGroup}>
          <h3 className={styles.groupTitle}>Property 1: Small</h3>
          <div className={styles.componentRow}>
            <Review
              property1="Small"
              showImage={true}
              rating={4}
              showExpand={true}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Team Role</h2>
        <div className={styles.componentRow}>
          <TeamRole
            number="1"
            jobTitle="Project Manager Intern"
            showNumber={true}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Card Team</h2>
        <div className={styles.componentGroup}>
          <h3 className={styles.groupTitle}>Typology: Specific</h3>
          <div className={styles.componentRow}>
            <CardTeam
              name="Deborah Torreggiani"
              typology="Specific"
            />
          </div>
        </div>
        <div className={styles.componentGroup}>
          <h3 className={styles.groupTitle}>Typology: Generic</h3>
          <div className={styles.componentRow}>
            <CardTeam
              typology="Generic"
              teamRoles={[
                { number: '1', jobTitle: 'Project Manager Intern', showNumber: true },
                { number: '2', jobTitle: 'Digital Marketing Specialist', showNumber: true },
                { number: '1', jobTitle: 'Creative Strategist', showNumber: true },
                { number: '1', jobTitle: 'Experiential Designer', showNumber: true },
              ]}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Video YT</h2>
        <div className={styles.componentRow}>
          <VideoYt
            videoTitle="Come Scegliere la scarpa per il tuo cammino di Santiago e non solo"
            showTitle={true}
          />
        </div>
      </section>
      </div>
    </main>
  );
}
