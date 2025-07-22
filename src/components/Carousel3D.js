"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Carousel3D.module.css";
import Image from "next/image";

const items = [
  "/gallery/s1.JPG",
  "/gallery/s2.JPG",
  "/gallery/s3.JPG",
  "/gallery/s4.JPG",
  "/gallery/s5.JPG",
  "/gallery/s6.JPG",
  "/gallery/s7.JPG",
  "/gallery/s8.JPG",
  "/gallery/s9.JPG",
  "/gallery/s10.JPG",
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
