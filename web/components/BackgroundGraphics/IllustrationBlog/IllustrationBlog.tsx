'use client';

import React from 'react';
import styles from './IllustrationBlog.module.css';

// Local asset paths
const imgProperty1Big = '/assets/BackgroundGraphics/figma/IllustrationBlog/imgProperty1Big.svg';
const imgVector = '/assets/BackgroundGraphics/figma/IllustrationBlog/imgVector.svg';
const imgVector1 = '/assets/BackgroundGraphics/figma/IllustrationBlog/imgVector1.svg';
const imgVector2 = '/assets/BackgroundGraphics/figma/IllustrationBlog/imgVector2.svg';
const imgVector3 = '/assets/BackgroundGraphics/figma/IllustrationBlog/imgVector3.svg';
const imgVector4 = '/assets/BackgroundGraphics/figma/IllustrationBlog/imgVector4.svg';

export interface IllustrationBlogProps {
  className?: string;
}

export const IllustrationBlog: React.FC<IllustrationBlogProps> = ({ 
  className = '' 
}) => {
  const classes = [styles.illustrationBlog, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.vector1}>
        <div className={styles.vector1Inner}>
          <img className={styles.image} alt="" src={imgVector} />
        </div>
      </div>
      <div className={styles.vector2}>
        <div className={styles.vector2Inner}>
          <img className={styles.image} alt="" src={imgVector1} />
        </div>
      </div>
      <div className={styles.vector3}>
        <div className={styles.vector3Inner}>
          <img className={styles.image} alt="" src={imgVector2} />
        </div>
      </div>
      <div className={styles.vector4}>
        <div className={styles.vector4Inner}>
          <img className={styles.image} alt="" src={imgVector3} />
        </div>
      </div>
      <div className={styles.vector5}>
        <div className={styles.vector5Inner}>
          <img className={styles.image} alt="" src={imgVector4} />
        </div>
      </div>
      <div className={styles.star}>
        <img className={styles.image} alt="" src={imgProperty1Big} />
      </div>
    </div>
  );
};

export default IllustrationBlog;
