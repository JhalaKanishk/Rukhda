"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Carousel3D.module.css";
import Image from "next/image";

const items = [
  "/gallery/l1.JPG",
  "/gallery/l2.JPG",
  "/gallery/l3.JPG",
  "/gallery/l4.JPG",
  "/gallery/l6.JPG",
  "/gallery/l7.JPG",
  "/gallery/l8.JPG",
  "/gallery/l9.JPG",
  "/gallery/l10.JPG",
  
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
              <Image
                src={item}
                alt={`Image ${index + 1}`}
                className={styles.image}
                width={500} // ⬅️ set your desired width
                height={300}
                priority
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
