import { PageWrapper } from "@/ui/templates";
import { BlogPosts } from "@/ui/organisms";

import styles from "./page.module.scss";

export const metadata = {
  title: "Kyra - Blog",
};

const Blog = async () => {
  const res = await fetch("https://strapi.kyra.com/blog", {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  const posts = data.data;

  return (
    <PageWrapper>
      <div className={styles.page}>
        <div className={styles.pageHeader}>
          <h1>Blog</h1>
        </div>
        <BlogPosts data={posts} />
      </div>
    </PageWrapper>
  );
};

export default Blog;
