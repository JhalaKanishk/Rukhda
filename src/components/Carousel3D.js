"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Carousel3D.module.css";

const items = [
  "gallery/s1.jpg",
  "gallery/s2.jpg",
  "gallery/s3.jpg",
  "gallery/s4.jpg",
  "gallery/s5.jpg",
  "gallery/s6.jpg",
  "gallery/s7.jpg",
  "gallery/s8.jpg",
  "gallery/s9.jpg",
  "gallery/s10.jpg",
];

export default function Carousel3D() {
  const [centerIndex, setCenterIndex] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.gallery}>
        {items.map((item, index) => {
          let offset = index - centerIndex;

          if (offset < -Math.floor(items.length / 2)) offset += items.length;
          if (offset > Math.floor(items.length / 2)) offset -= items.length;

          // ✅ Skip if not in visible range
          if (Math.abs(offset) > 3) return null;

          return (
            <li
              key={index}
              className={`${styles.card} ${
                styles[`pos${offset}`] || styles.hidden
              }`}
            >
              <img
                src={item}
                alt={`Image ${index + 1}`}
                className={styles.image}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
