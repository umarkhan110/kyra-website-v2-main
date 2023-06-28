"use client";

import React from "react";
import clsx from "clsx";
import Plx from "react-plx";
import styles from "./SloganCard.module.scss";

interface SloganCardProps {
  sloganID?: number;
  primary?: boolean;
  heading: string;
  subHeading: string;
}

// Parallax data
const goRight = [
  {
    start: "self",
    startOffset: "0",
    end: "self",
    endOffset: "50vh",
    properties: [
      {
        startValue: 20,
        endValue: 0,
        unit: "vw",
        property: "translateX",
      },
    ],
  },
];
const goLeft = [
  {
    start: "self",
    startOffset: "0",
    end: "self",
    endOffset: "50vh",
    properties: [
      {
        startValue: -20,
        endValue: 0,
        unit: "vw",
        property: "translateX",
      },
    ],
  },
];

export const SloganCard = ({
  sloganID,
  heading,
  subHeading,
  primary = false,
}: SloganCardProps) => {
  const sloganCardClasses = clsx(styles.sloganCard, "slogan-card");
  const cardId = `slogan-card-${sloganID}`;

  return (
    <div className={sloganCardClasses} id={cardId}>
      <div className={styles.container}>
        <Plx parallaxData={goRight}>
          <h3>{heading}</h3>
        </Plx>
        <Plx parallaxData={goLeft}>
          <h4>{subHeading}</h4>
        </Plx>
      </div>
    </div>
  );
};
