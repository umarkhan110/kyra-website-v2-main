"use client";

import React from "react";
import clsx from "clsx";
import { isMobile } from "react-device-detect";
import styles from "./Hero.module.scss";

interface HeroProps {
  primary?: boolean;
  videoUrl: string;
  mobileVideoUrl?: string;
  title?: string;
  subtitle?: string;
  children?: any;
}

export const Hero = ({
  videoUrl,
  mobileVideoUrl,
  children,
  title,
  subtitle,
  primary = false,
}: HeroProps) => {
  const heroClasses = clsx(styles.hero, {
    [styles.primary]: primary === true,
  });
  return (
    <div className={heroClasses}>
      <div className={styles.heroVideo}>
        {isMobile && mobileVideoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            // poster="/images/mobile-video-cover.webp"
          >
            <source src={mobileVideoUrl} type="application/x-mpegURL" />
          </video>
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            // poster="/images/desktop-video-cover.png"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
      </div>
      <div className={styles.heroContent}>
        <div className={styles.container}>
          {title && title.length > 0 ? (
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
          ) : (
            <h1>
              The <b>home</b> of <b>creators</b>
            </h1>
          )}
          <div className={styles.subContent}>
            {subtitle && subtitle.length > 0 ? <p>{subtitle}</p> : null}
            {children ? <div className={styles.buttons}>{children}</div> : null}
          </div>
        </div>
      </div>
    </div>
  );
};
