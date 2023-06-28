"use client";

import React from "react";
import clsx from "clsx";
import { Button } from "@/ui/atoms";
import { ShowcaseCard } from "@/ui/molecules";
import styles from "./BrandEngagements.module.scss";

interface EngagementProps {
  primary?: boolean;
  label: string;
  children?: any;
  brandsData?: any;
  signUpURL?: string;
  page?: "creators" | "brands";
}

export const BrandEngagements = ({
  label,
  children,
  brandsData,
  signUpURL,
  page,
  primary = false,
}: EngagementProps) => {
  const sectionClasses = clsx(styles.sectionEngagements, {
    [styles.green]: page === "creators",
  });
  return (
    <div className={sectionClasses}>
      <div className={styles.container}>
        <h2>{label}</h2>
        <nav className={styles.inlineList}>
          {brandsData.map((item: any, index: number) => {
            const title = item.attributes.name || item.attributes.title;
            return (
              <li key={index}>
                <Button
                  label={title}
                  link={`#card-${item.id}`}
                  color={page === "creators" ? "dark" : undefined}
                />
              </li>
            );
          })}
        </nav>
        <div className={styles.cardContainer}>
          {page === "brands" && (
            <>
              {brandsData.map((item: any) => {
                const itemId = item.id;
                const itemHeading = item.attributes.name;
                const itemSubHeading = item.attributes.campaignName;
                const itemFirstStatistic = item.attributes.first_statistic;
                const itemSecondStatistic = item.attributes.second_statistic;
                const itemDescription = item.attributes.campaignDescription;
                const itemImage =
                  item.attributes.campaign_image?.data.attributes.url;
                const itemLogo = item.attributes.logo?.data.attributes;
                const itemVideo = item.attributes.campaign_video;

                return (
                  <ShowcaseCard
                    key={itemId}
                    id={itemId}
                    heading={itemHeading}
                    subHeading={`#${itemSubHeading}`}
                    firstStatistic={itemFirstStatistic}
                    secondStatistic={itemSecondStatistic}
                    campaignDescription={itemDescription}
                    campaignImage={itemImage}
                    campaignVideo={itemVideo}
                    logo={itemLogo}
                    signUpURL={signUpURL}
                    page="brands"
                  />
                );
              })}
            </>
          )}

          {page === "creators" && (
            <>
              {brandsData.map((item: any) => {
                const itemId = item.id;
                const itemHeading = item.attributes.title;
                const itemSubHeading = item.attributes.subtitle;
                const itemDescription = item.attributes.description;
                const itemImage = item.attributes.image.data.attributes.url;

                return (
                  <ShowcaseCard
                    key={itemId}
                    id={itemId}
                    heading={itemHeading}
                    subHeading={itemSubHeading}
                    campaignDescription={itemDescription}
                    campaignImage={itemImage}
                    theme="light"
                    signUpURL={signUpURL}
                    page="creators"
                  />
                );
              })}
            </>
          )}

          {children}
        </div>
      </div>
    </div>
  );
};
