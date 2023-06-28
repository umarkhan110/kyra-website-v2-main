"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Plx from "react-plx";
import { Button } from "@/ui/atoms";
import styles from "./ShowcaseCard.module.scss";
import { HubspotFormCreators } from "../HubspotFormCreators/HubspotFormCreators";
import { HubspotForm } from "../HubspotForm/HubspotForm";

interface ShowcaseCardProps {
  primary?: boolean;
  heading?: string | React.ReactNode;
  subHeading: string;
  firstStatistic?: string;
  secondStatistic?: string;
  campaignDescription?: string;
  campaignImage?: string;
  campaignVideo?: any;
  logo?: any;
  id?: number;
  signUpURL?: string;
  page?: "creators" | "brands";
  theme?: "dark" | "light";
}

// Parallax data
const goRight = [
  {
    start: "self",
    startOffset: "15vh",
    end: "self",
    endOffset: "85vh",
    // easing: "easeIn",
    properties: [
      {
        startValue: 0,
        endValue: -100,
        property: "translateX",
      },
    ],
  },
];
const goLeft = [
  {
    start: "self",
    startOffset: "15vh",
    end: "self",
    endOffset: "85vh",
    properties: [
      {
        startValue: 0,
        endValue: 100,
        property: "translateX",
      },
    ],
  },
];
const cardData = [
  {
    start: "self",
    startOffset: "80vh",
    end: "self",
    endOffset: "100vh",
    properties: [
      {
        startValue: 1,
        endValue: 0.9,
        property: "scale",
      },
    ],
  },
];

export const ShowcaseCard = ({
  subHeading,
  heading,
  firstStatistic,
  secondStatistic,
  campaignDescription,
  campaignImage,
  campaignVideo,
  logo,
  id,
  theme,
  signUpURL,
  page,
  primary = false,
}: ShowcaseCardProps) => {
  const cardClasses = clsx(styles.showcaseCard, {
    [styles.dark]: theme === "dark",
    [styles.light]: theme === "light",
  });

  return (
    <Plx parallaxData={cardData} className={cardClasses} id={`card-${id}`}>
      <div className={styles.container}>
        <div className={styles.showcase}>
          {campaignVideo && campaignVideo.data !== null ? (
            <div className={styles.videoWrap}>
              <video autoPlay loop muted playsInline>
                <source
                  src={campaignVideo.data.attributes.url}
                  type="video/mp4"
                />
              </video>
            </div>
          ) : campaignImage ? (
            <div className={styles.imageWrap}>
              <Image src={campaignImage} alt="App Screenshot" fill />
            </div>
          ) : (
            <div className={styles.imageWrap}>No Media</div>
          )}

          {firstStatistic && (
            <Plx parallaxData={goRight} className={styles.tagTop}>
              {firstStatistic}
            </Plx>
          )}
          {secondStatistic && (
            <Plx parallaxData={goLeft} className={styles.tagBottom}>
              {secondStatistic}
            </Plx>
          )}
        </div>

        <div className={styles.showcaseDetails}>
          {logo ? (
            <div className={styles.logo}>
              <Image
                src={logo.url}
                width={logo.width}
                height={logo.height}
                alt="Logo"
                priority
              />
            </div>
          ) : (
            <h2 className={styles.cardHeading}>{heading}</h2>
          )}

          <h3>{subHeading}</h3>
          {campaignDescription ? (
            <p>{campaignDescription}</p>
          ) : (
            "No description"
          )}
          <Button
            modal
            modalContent={
              page === "brands" ? (
                <HubspotForm />
              ) : page === "creators" ? (
                <HubspotFormCreators />
              ) : null
            }
            label="Sign up today"
            width="fill"
            size="normal"
            color={theme === "light" ? "dark" : undefined}
          />
        </div>
      </div>
    </Plx>
  );
};
