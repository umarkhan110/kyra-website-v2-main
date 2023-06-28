"use client";

import Image from "next/image";
import Link from "next/link";
import { numbers } from "@/utils/numbers";
import Plx from "react-plx";

import styles from "./RankCard.module.scss";

interface RankCardProps {
  data: {
    tiktok_id: string;
    username: string;
    last_follower: string;
    total_increase: string;
    user_img: string;
    posts: [img: any, link: any];
  };
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
        startValue: 10,
        endValue: 0,
        unit: "vw",
        property: "translateY",
      },
    ],
  },
];

export const RankCard = ({ data }: RankCardProps) => {
  // Abbreviate numbers
  const totalFollowersNumber = parseInt(data.last_follower);
  const abbreviatedTotalFollowers = numbers(totalFollowersNumber);
  const totalIncreaseNumber = parseInt(data.total_increase);
  const abbreviatedTotalIncrease = numbers(totalIncreaseNumber);

  const imageUrl = data.user_img;
  let modifiedImageUrl = imageUrl;

  if (imageUrl.includes("cloudfront.net/")) {
    const index =
      imageUrl.indexOf("cloudfront.net/") + "cloudfront.net/".length;
    modifiedImageUrl =
      imageUrl.slice(0, index) + "profile/" + imageUrl.slice(index);
  }

  return (
    <Plx parallaxData={goRight}>
      <li className={styles.trendUser}>
        <Link href={`/creator/${data.username}`}>
          <div className={styles.userContent}>
            <div className={styles.userAvatar}>
              <Image
                loader={() => modifiedImageUrl}
                src={modifiedImageUrl}
                alt={data.username}
                width="94"
                height="94"
              />
            </div>
            <div className={styles.userDetails}>
              <h2 className={styles.userName}>@{data.username}</h2>
              <span className={styles.meta}>
                +{abbreviatedTotalIncrease} follower growth
              </span>
              <span className={styles.meta}>
                {abbreviatedTotalFollowers} total followers
              </span>
            </div>
          </div>
          <div className={styles.userLatest}>
            {data.posts.slice(0, 3).map((post: any, index: number) => {
              return (
                <a
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    loader={() => post.img}
                    src={post.img}
                    alt={data.username}
                    width="50"
                    height="94"
                  />
                </a>
              );
            })}
          </div>
        </Link>
      </li>
    </Plx>
  );
};
