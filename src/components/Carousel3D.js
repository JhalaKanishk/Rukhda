'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/Carousel3D.module.css';

const items = [0, 1, 2, 3, 4, 5, 6];

export default function Carousel3D() {
  const [centerIndex, setCenterIndex] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % items.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.gallery}>
        {items.map((item, index) => {
          let offset = index - centerIndex;

          // Wrap-around logic
          if (offset < -Math.floor(items.length / 2)) {
            offset += items.length;
          }
          if (offset > Math.floor(items.length / 2)) {
            offset -= items.length;
          }

          return (
            <li
              key={index}
              className={`${styles.card} ${
                styles[`pos${offset}`] || styles.hidden
              }`}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
