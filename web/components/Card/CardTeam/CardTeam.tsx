'use client';

import React from 'react';
import { TeamRole } from '../TeamRole';
import { Plus } from '../../Labels';
import styles from './CardTeam.module.css';

// Figma image assets
const imgImage = '/assets/Card/figma/CardTeam/imgImage.png';
const imgStar = '/assets/icons/figma/Star/imgStarVariant2.svg';

export interface CardTeamProps {
  name?: string;
  typology?: 'Specific' | 'Generic';
  teamRoles?: Array<{
    number?: string;
    jobTitle?: string;
    showNumber?: boolean;
  }>;
  className?: string;
}

export function CardTeam({
  name = 'Deborah Torreggiani',
  typology = 'Specific',
  teamRoles = [
    { number: '1', jobTitle: 'Project Manager Intern', showNumber: true },
    { number: '2', jobTitle: 'Digital Marketing Specialist', showNumber: true },
    { number: '1', jobTitle: 'Creative Strategist', showNumber: true },
    { number: '1', jobTitle: 'Experiential Designer', showNumber: true },
  ],
  className,
}: CardTeamProps) {
  const isGeneric = typology === 'Generic';
  const isSpecific = typology === 'Specific';

  return (
    <div
      id={isSpecific ? 'node-2633_38457' : isGeneric ? 'node-2633_38539' : ''}
      className={`${styles.cardTeam} ${isSpecific ? styles.cardTeamSpecific : styles.cardTeamGeneric} ${className || ''}`}
    >
      {isSpecific && (
        <div
          data-node-id="2633:38341"
          className={styles.image}
          data-name="Image"
        >
          <div className={styles.imageOverlay}>
            <img
              className={styles.imageElement}
              alt=""
              src={imgImage}
            />
            <div className={styles.imageGradient} />
          </div>
        </div>
      )}
      <div
        id={isSpecific ? 'node-2633_38344' : isGeneric ? 'node-2633_38541' : ''}
        className={`${styles.container} ${isSpecific ? styles.containerSpecific : styles.containerGeneric}`}
        data-name="Container"
      >
        {isSpecific && (
          <div
            data-node-id="2633:38345"
            className={styles.title}
            data-name="Title"
          >
            <p
              className={styles.name}
              data-node-id="2633:38348"
            >
              {name}
            </p>
            <div
              data-node-id="2633:38373"
              className={styles.plus}
              data-name="Plus"
            >
              <div
                data-node-id="I2633:38373;2006:11381"
                className={styles.plusContent}
                data-name="Feature Content"
              >
                <div className={styles.starWrapper}>
                  <div
                    data-node-id="I2633:38373;2006:11385"
                    className={styles.star}
                    data-name="Star"
                  >
                    <div className={styles.starFill}>
                      <img
                        className={styles.starImage}
                        alt=""
                        src={imgStar}
                      />
                    </div>
                  </div>
                </div>
                <p
                  data-node-id="I2633:38373;2006:11383"
                  className={styles.plusText}
                >
                  Founder & Head Of Travel
                </p>
              </div>
            </div>
          </div>
        )}
        {isGeneric && (
          <>
            <p
              data-node-id="2633:38877"
              className={styles.growingTeam}
            >
              + A growing team
            </p>
            <div
              data-node-id="2633:38881"
              className={styles.listing}
              data-name="Listing"
            >
              {teamRoles.map((role, index) => (
                <TeamRole
                  key={index}
                  number={role.number}
                  jobTitle={role.jobTitle}
                  showNumber={role.showNumber}
                  className={styles.teamRoleItem}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
