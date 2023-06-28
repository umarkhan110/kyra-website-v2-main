import { Metadata } from "next";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import moment from "moment";
import styles from "./page.module.scss";
import { Button } from "@/ui/atoms";

interface PostParams {
  params: {
    slug: string;
  };
  searchParams: {
    id: any;
  };
}

async function getData() {
  const res = await fetch("https://strapi.kyra.com/blog", {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
}

// Meta Data Function
export async function generateMetadata({
  params,
  searchParams,
}: PostParams): Promise<Metadata> {
  const data = await getData();
  const postId = parseInt(searchParams.id);

  const postIndex = data.data.findIndex(
    (item: { id: number }) => item.id === postId
  );

  const postData = data.data[postIndex];

  const post = postData.attributes;

  return {
    title: post.title + " | Kyra Blog",
  };
}

export default async function Page({ params, searchParams }: PostParams) {
  const data = await getData();
  const postId = parseInt(searchParams.id);

  const postIndex = data.data.findIndex(
    (item: { id: number }) => item.id === postId
  );
  if (postIndex === -1) {
    return <div>Post not found.</div>;
  }

  const postData = data.data[postIndex];

  const post = postData.attributes;

  const postImage = post.header_image.data.attributes;
  const postImageURL = postImage.url;
  const postImageFormatL = postImage.formats.large;

  const postDate = moment(post.publishedAt).format("MMMM Do YYYY");

  return (
    <div
      className={styles.blogPost}
      data-param-id={postId}
      data-param-slug={params.slug}
    >
      <div className={styles.postHeader}>
        <h1>{post.title}</h1>
        <p className={styles.postDate}>Posted {postDate}</p>
      </div>

      <div className={styles.postImage}>
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

      <div className={styles.postContent}>
        <Markdown>{post.article_text}</Markdown>
      </div>

      <div className={styles.postFooter}>
        <Button label="Back to Blog" size="normal" color="dark" link="/blog" />
      </div>
    </div>
  );
}
