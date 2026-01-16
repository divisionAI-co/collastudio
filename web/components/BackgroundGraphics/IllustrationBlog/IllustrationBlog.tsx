'use client';

import React from 'react';
import styles from './IllustrationBlog.module.css';

// Figma asset URLs
const imgProperty1Big = 'https://www.figma.com/api/mcp/asset/6ea4332b-5b58-4b20-b5c4-728f8d6a8796';
const imgVector = 'https://www.figma.com/api/mcp/asset/d1a277e8-f8a6-419b-9ae6-c4731e090321';
const imgVector1 = 'https://www.figma.com/api/mcp/asset/4a57e614-2153-4fb8-b1ca-5478b65d9109';
const imgVector2 = 'https://www.figma.com/api/mcp/asset/4360ac82-42b9-42b6-9a48-aab8fa742939';
const imgVector3 = 'https://www.figma.com/api/mcp/asset/aa4da8cc-ae3f-4d2d-87f0-2b4e7757ae30';
const imgVector4 = 'https://www.figma.com/api/mcp/asset/fbd78b89-1d09-436a-92d9-1cd10bf9fe0e';

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
