import React from "react";
import clsx from "clsx";
import { isMobile } from "react-device-detect";
import styles from "./Hero.module.scss";

interface HeroProps {
  primary?: boolean;
  children?: any;
  headerVideoUrl: string;
  mobileVideoUrl: string;
  title: string[];
  subtitle: string[];
}

const HomeHero: React.FC<HeroProps> = ({
  children,
  primary = false,
  headerVideoUrl,
  mobileVideoUrl,
  title,
  subtitle,
}) => {
  const heroClasses = clsx(styles.hero, {
    [styles.primary]: primary === true,
  });

  return (
    <div className={heroClasses}>
      <div className={styles.heroVideo}>
        {isMobile && mobileVideoUrl ? (
          <video autoPlay loop muted playsInline>
            <source src="https://strapi-new-s3.s3.eu-west-1.amazonaws.com/header_106dad8c7c.mp4" type="application/x-mpegURL" />
          </video>
        ) : (
          <video autoPlay loop muted playsInline>
            <source src="https://strapi-new-s3.s3.eu-west-1.amazonaws.com/header_106dad8c7c.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div className={styles.heroContent}>
        <div className={styles.container}>
          {title && title.length > 0 ? (
            <h1 dangerouslySetInnerHTML={{ __html: title[0] }} />
          ) : (
            <h1>
              The <b>home</b> of <b>creators</b>
            </h1>
          )}
          <div className={styles.subContent}>
            {subtitle && subtitle.length > 0 ? <p>{subtitle[0]}</p> : null}
            {children ? <div className={styles.buttons}>{children}</div> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch("https://strapi.kyra.com/home");
    if (!res.ok) {
      throw new Error("Failed");
    }
    const data = await res.json();
    const siteData = data.data.attributes;

    const headerVideoUrl = siteData.header_video.data.attributes.url;
    const mobileVideoUrl = siteData.header_video_m3u8;

    const hero = siteData.heroes.data;
    const filteredHeroItems = hero.filter(
      (item: any) => item.attributes.screen === "home"
    );
    const titles = filteredHeroItems.map((item: any) => item.attributes.title);
    const subtitles = filteredHeroItems.map((item: any) => item.attributes.subtitle);

    return {
      props: {
        headerVideoUrl,
        mobileVideoUrl,
        title: titles,
        subtitle: subtitles,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        headerVideoUrl: "",
        mobileVideoUrl: "",
        title: [],
        subtitle: [],
      },
    };
  }
}

export default HomeHero;
