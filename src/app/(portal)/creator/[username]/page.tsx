import { Metadata } from "next";
import { CreatorPosts, CreatorSidebar, RelatedCreators } from "@/ui/organisms";
import { StackedAreaChart } from "@/ui/organisms";
import styles from "./page.module.scss";
import { redirect } from "next/navigation";

interface CreatorProps {
  params: {
    username: string;
  };
}

async function getData({ params }: CreatorProps) {
  const res = await fetch(
    `https://strapi.kyra.com/creators/${params.username}`,
    {
      next: { revalidate: 10 },
    }
  );
  if (!res.ok) {
    // throw new Error("Failed");
    redirect("/");
  }
  return res.json();
}

// Meta Data Function
export async function generateMetadata({
  params,
}: CreatorProps): Promise<Metadata> {
  const data = await getData({ params });

  const username = data.profile.username;

  return {
    title: username + " | TikTok Analytics | Kyra",
  };
}

export default async function CreatorPage({ params }: CreatorProps) {
  const data = await getData({ params });
  const profile_id = data.profile.user_id;

  const stats = [
    {
      total_hearts: data.profile.total_hearts,
      total_posts: data.profile.total_posts,
      total_followers: data.profile.followers_cnt,
    },
  ];

  return (
    <div className={styles.creatorWrap} data-uri={params.username}>
      <CreatorSidebar profile={data.profile} />

      <div className={styles.creatorContent}>
        {data.recommended && (
          <>
            <h3>similar creators</h3>
            <RelatedCreators data={data.recommended} />
          </>
        )}

        {data.posts && (
          <>
            <h3>Most recent posts</h3>
            <CreatorPosts posts={data.posts} />
          </>
        )}

        {data.post_ads && (
          <>
            <h3>Ad posts</h3>
            <CreatorPosts posts={data.post_ads} />
          </>
        )}

        <StackedAreaChart userID={profile_id} stats={stats} />
      </div>
    </div>
  );
}
