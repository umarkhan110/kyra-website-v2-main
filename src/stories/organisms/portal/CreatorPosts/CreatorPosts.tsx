"use client";

import { useState, useRef, Suspense } from "react";
import Image from "next/image";
import { Button } from "@/ui/atoms";
import { numbers } from "@/utils/numbers";
import { FiEye, FiPercent } from "react-icons/fi";
import LoadingPost from "./LoadingPost";
import styles from "./CreatorPosts.module.scss";

interface CreatorPostsProps {
  posts: any;
}

export const CreatorPosts = ({ posts }: CreatorPostsProps) => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const showNextPosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 3);
  };

  const showLessPosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts - 3);
  };

  // Video Interaction
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const handleHover = (index: number) => {
    const videoRef = videoRefs.current[index];
    if (videoRef && videoRef.paused) {
      videoRef.play().catch(console.error);
    }
  };

  const handleLeave = (index: number) => {
    const videoRef = videoRefs.current[index];
    if (videoRef && !videoRef.paused) {
      videoRef.pause();
      videoRef.currentTime = 0;
    }
  };

  return (
    <div className={styles.creatorPosts}>
      <div className={styles.posts}>
        {posts.slice(0, visiblePosts).map((post: any, id: number) => {
          const postID = post.id;
          const videoURL =
            "https://dz59t6y8jvnrr.cloudfront.net/video/" + postID + ".jpg";
          const views = numbers(post.play_cnt);
          const videoLink =
            "https://www.tiktok.com/@" + post.username + "/video/" + postID;

          return (
            <a
              key={id}
              href={videoLink}
              rel="nofollow"
              target="_blank"
              className={styles.post}
              onMouseEnter={() => handleHover(id)}
              onMouseLeave={() => handleLeave(id)}
            >
              <Image
                width="300"
                height="400"
                src={videoURL}
                alt=""
                priority
                className={styles.postImage}
              />
              <video
                ref={(ref) => (videoRefs.current[id] = ref)}
                loop
                muted
                playsInline
                className={styles.postVideo}
              >
                <source
                  src={`https://dz59t6y8jvnrr.cloudfront.net/video/${postID}.mp4`}
                  type="video/mp4"
                />
              </video>
              <div className={styles.postMeta}>
                {post.brand_id && (
                  <div className={styles.brandLogo}>
                    <Image
                      src={`https://dz59t6y8jvnrr.cloudfront.net/profile/${post.brand_id}.jpg`}
                      alt={post.brand_name ? post.brand_name : "Brand"}
                      width={64}
                      height={64}
                    />
                  </div>
                )}
                {post.brand_name && (
                  <div className={styles.brandName}>{post.brand_name}</div>
                )}

                <div className={styles.views}>
                  <FiEye /> <span>{views}</span>
                </div>

                {post.engagement_rate && (
                  <div className={styles.engagement} title="Engagement rate">
                    <FiPercent />{" "}
                    <span>{(post.engagement_rate * 100).toFixed(1)}%</span>
                  </div>
                )}
              </div>
            </a>
          );
        })}
      </div>
      {posts.length > visiblePosts && (
        <div className={styles.controls}>
          <Button onClick={showNextPosts} label="Show More" size="small" />
          {visiblePosts > 6 && (
            <Button onClick={showLessPosts} label="Show less" size="small" />
          )}
        </div>
      )}
    </div>
  );
};
