"use client";

import Image from "next/image";
import { Button } from "@/ui/atoms";
import { HubspotFormCreators } from "@/ui/molecules";
import { numbers } from "@/utils/numbers";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

import styles from "./CreatorSidebar.module.scss";

interface CreatorSidebarProps {
  profile: {
    user_id: string;
    username: string;
    display_name: string;
    region: string;
    description: string;
    followers_cnt: string;
    avg_play_cnt: string;
    avg_heart_cnt: string;
    average_er: string;
    instagram: string;
    youtube: string;
  };
}

export const CreatorSidebar = ({ profile }: CreatorSidebarProps) => {
  const {
    user_id,
    username,
    display_name,
    region,
    description,
    followers_cnt,
    avg_play_cnt,
    avg_heart_cnt,
    average_er,
    instagram,
    youtube,
  } = profile;
  const tiktok = "https://www.tiktok.com/@" + username;

  // Followers
  const followersCntNumber = parseInt(followers_cnt, 10);
  const followers = numbers(followersCntNumber);

  // Avg Views
  const viewsCntNumber = parseInt(avg_play_cnt, 10);
  const views = numbers(viewsCntNumber);

  // Avg Views
  const likesCntNumber = parseInt(avg_heart_cnt, 10);
  const likes = numbers(likesCntNumber);

  // Avg Engagement
  const valueNumber = parseFloat(average_er);
  const percentageEngagement = (valueNumber * 100).toFixed(1) + "%";

  // Creator Avatar
  const creatorAvatar =
    "https://dz59t6y8jvnrr.cloudfront.net/profile/" + user_id + ".jpg";

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarFixed}>
        <div className={styles.creatorAvatar} data-creator-id={user_id}>
          <Image
            fill
            src={creatorAvatar}
            alt={username ? username : "Avatar"}
            sizes="160px"
          />
        </div>
        <div className={styles.creatorMeta}>
          {username && <h2>{username}</h2>}
          {display_name && <h3>{display_name}</h3>}
          <p>{region}</p>
          {description && <p>{description}</p>}
        </div>
        <div className={styles.creatorSocials}>
          <a href={tiktok} rel="nofollow" target="_blank">
            <FaTiktok />
          </a>
          {instagram && (
            <a
              href={`https://instagram.com/${instagram}`}
              rel="nofollow"
              target="_blank"
            >
              <FaInstagram />
            </a>
          )}
          {youtube && (
            <a
              href={`https://youtube.com/channel/${youtube}`}
              rel="nofollow"
              target="_blank"
            >
              <FaYoutube />
            </a>
          )}
        </div>
        <div className={styles.heading}>
          <h3>Stats</h3>
        </div>
        <div className={styles.creatorStats}>
          <div className={styles.stat}>
            <h4>Followers</h4>
            <p>{followers}</p>
          </div>
          <div className={styles.stat}>
            <h4>Avg views</h4>
            <p>{views}</p>
          </div>
          <div className={styles.stat}>
            <h4>Avg Likes</h4>
            <p>{likes}</p>
          </div>
          <div className={styles.stat}>
            <h4>Avg Engagement</h4>
            <p>{percentageEngagement}</p>
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            modal
            modalContent={<HubspotFormCreators />}
            size="normal"
            width="fill"
            label="Sign up today"
          />
        </div>
      </div>
    </div>
  );
};
