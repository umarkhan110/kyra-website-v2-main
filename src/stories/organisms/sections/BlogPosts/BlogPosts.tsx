"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { Button } from "@/ui/atoms";
import styles from "./BlogPosts.module.scss";

interface BlogPost {
  id: number;
  attributes: {
    title: string;
    slug: string;
    createdAt: string;
    header_image: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
          formats: {
            large: {
              url: string;
              width: number;
              height: number;
            };
          };
        };
      };
    };
  };
}

interface BlogPostsProps {
  data: BlogPost[];
}

export const BlogPosts = ({ data }: BlogPostsProps) => {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const showNextPosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4);
  };

  const showLessPosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts - 4);
  };

  return (
    <div className={styles.blogSection}>
      <div className={styles.blogPosts}>
        {data.slice(0, visiblePosts).map((item: BlogPost) => {
          const post = item.attributes;
          const postDate = moment(post.createdAt).format("MMMM Do YYYY");
          const postImage = post.header_image.data.attributes;
          const postImageURL = postImage.url;
          const postImageFormatL = postImage.formats.large;
          return (
            <Link
              key={item.id}
              className={styles.blogPost}
              href={{
                pathname: "/blog/" + post.slug,
                query: { id: item.id },
              }}
              replace
            >
              <div className={styles.blogPostImage}>
                {!postImage || !postImageFormatL ? (
                  <Image
                    src={postImageURL}
                    width={postImage.width}
                    height={postImage.height}
                    alt={post.title}
                  />
                ) : (
                  <Image
                    src={postImageFormatL.url}
                    width={postImageFormatL.width}
                    height={postImageFormatL.height}
                    alt={post.title}
                  />
                )}
              </div>
              <div className={styles.blogPostDetails}>
                <h2>{post.title}</h2>
                <p>{postDate}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.controls}>
        {data.length > visiblePosts && (
          <Button
            onClick={showNextPosts}
            label="Show More"
            size="normal"
            color="dark"
          />
        )}
        {visiblePosts > 4 && (
          <Button
            onClick={showLessPosts}
            label="Show less"
            size="normal"
            color="dark"
          />
        )}
      </div>
    </div>
  );
};
