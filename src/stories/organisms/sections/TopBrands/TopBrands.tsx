"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import "./slick.scss";
import styles from "./TopBrands.module.scss";

interface BrandProps {
  primary?: boolean;
  label: string;
  brandsData?: any;
  headlineData?: any;
  children?: any;
}

export const TopBrands = ({
  label,
  children,
  brandsData,
  headlineData,
  primary = false,
}: BrandProps) => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1400,
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 5,
    className: styles.brandScroll + " brandScroll",
    lazyLoad: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sectionBrands}>
      <div className={styles.container}>
        <h2>{label}</h2>

        <Slider {...settings}>
          {brandsData.map((brand: any) => (
            <div key={brand.id} className={styles.brand} attr-id={brand.id}>
              <Image
                width={brand.attributes.logo.data.attributes.width}
                height={brand.attributes.logo.data.attributes.height}
                src={brand.attributes.logo.data.attributes.url}
                alt={brand.attributes.name}
                priority
              />
            </div>
          ))}
        </Slider>

        {headlineData && (
          <div className={styles.headlines}>
            {headlineData.map((headline: any) => {
              const headlineLogo = headline.attributes.logo.data.attributes;
              const headlineQuote = headline.attributes.quote;
              const quote = headlineQuote.replace(/['"]+/g, "");
              return (
                <div key={headline.id} className={styles.headline}>
                  <p>{quote}</p>

                  <div className={styles.headlineLogoWrapper}>
                    {headlineLogo?.formats?.thumbnail ? (
                      <Image
                        src={headlineLogo.formats.thumbnail.url}
                        width={headlineLogo.formats.thumbnail.width}
                        height={headlineLogo.formats.thumbnail.height}
                        alt="logo"
                        className={styles.headlineLogo}
                      />
                    ) : (
                      <Image
                        src={headlineLogo.url}
                        width={headlineLogo.width}
                        height={headlineLogo.height}
                        alt="logo"
                        className={styles.headlineLogo}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {children}
      </div>
    </div>
  );
};
