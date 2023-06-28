"use client";

import React from "react";
import clsx from "clsx";
import styles from "./ScrollMarquee.module.scss";

interface ScrollMarqueeProps {
  message?: string;
  theme?: "default" | "dark";
}
export const ScrollMarquee = ({ message, theme }: ScrollMarqueeProps) => {
  const text = message || "Scroll";
  const marqueeClasses = clsx(styles.scrollMarquee, {
    [styles.dark]: theme === "dark",
  });

  const wordCount = String(message).length;
  const items = wordCount > 15 ? 5 : 12;
  return (
    <div className={styles.scrollMarqueeContainer}>
      <div className={styles.scrollOverflow}>
        <div className={marqueeClasses} data-char={wordCount}>
          <ul>
            {[...Array(items)].map((_, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>

          <ul aria-hidden="true">
            {[...Array(items)].map((_, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
