"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import "./slick.scss";
import styles from "./Creators.module.scss";

interface CreatorsProps {
  label?: string;
  creatorsData?: any;
  children?: any;
}

export const Creators = ({ label, creatorsData, children }: CreatorsProps) => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: styles.creatorsScroll + " creatorsScroller",
    focusOnSelect: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480,
        centerPadding: "0px",
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sectionCreators}>
      <div className={styles.container}>
        <h2>{label}</h2>
        <Slider {...settings}>
          {creatorsData.map((creator: any) => {
            const avatar = creator.attributes.avatar.data.attributes;
            return (
              <div key={creator.id} className={styles.creator}>
                <div className={styles.creatorAvatar}>
                  <Image
                    src={avatar.url}
                    alt={creator.attributes.handle}
                    fill
                  />
                </div>
                <div className={styles.creatorInfoWrapper}>
                  <div className={`bubble ${styles.creatorInfo}`}>
                    <h3>{creator.attributes.name}</h3>
                    <h4>{creator.attributes.handle}</h4>
                    <p>{creator.attributes.quote}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        {children}
      </div>
    </div>
  );
};
