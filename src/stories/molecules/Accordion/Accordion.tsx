"use client";

import React, { useState } from "react";
import styles from "./Accordion.module.scss";

interface AccordionProps {
  title: string;
  content: any;
}

export const Accordion = ({ title, content }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <div
        className={styles.accordionItemHeading}
        onClick={() => setIsActive(!isActive)}
      >
        <span className={styles.title}>{title}</span>
        <span className={styles.icon}>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className={styles.accordionItemContent}>{content}</div>}
    </div>
  );
};
