"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { isMobile } from "react-device-detect";
import styles from "./Hero.module.scss";

interface HeroProps {
  primary?: boolean;
  children?: any;
}

const HomeHero : React.FC<HeroProps> = ({
  children,
  primary = false,
}) => {
  const [headerVideoUrl, setHeaderVideoUrl] = useState<string>("");
  const [mobileVideoUrl, setMobileVideoUrl] = useState<string>("");
  const [title, setTitle] = useState<string[]>([]);
  const [subtitle, setSubtitle] = useState<string[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch("https://strapi.kyra.com/home");
      if (!res.ok) {
        throw new Error("Failed");
      }
      const data = await res.json();
      const siteData = data.data.attributes;

      // Header Video
      const headerVideo = siteData.header_video;
      setHeaderVideoUrl(headerVideo.data.attributes.url);
      
      // Header Video Mobile
      setMobileVideoUrl(siteData.header_video_m3u8);
      
      // Hero
      const hero = siteData.heroes.data;
      const filteredHeroItems = hero.filter(
        (item: any) => item.attributes.screen === "home"
      );
      const titles = filteredHeroItems.map((item: any) => item.attributes.title);
      const subtitles = filteredHeroItems.map((item: any) => item.attributes.subtitle);

      setTitle(titles);
      setSubtitle(subtitles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
          <source src={headerVideoUrl} type="video/mp4" />
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

export default HomeHero;