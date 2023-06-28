import { Button } from "@/ui/atoms";
import { PageWrapper } from "@/ui/templates";
import { Blank } from "@/ui/organisms";
import { RankCard, HubspotForm } from "@/ui/molecules";

import styles from "./page.module.scss";

export const metadata = {
  title: "Fastest Growing TikTok Accounts | Kyra",
};

async function getData() {
  const res = await fetch("https://strapi.kyra.com/trends/creators", {
    next: { revalidate: 900 }, // 900 seconds = 15 minutes
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
}

export default async function Trends() {
  const trendsData = await getData();
  const trends = trendsData;

  return (
    <PageWrapper>
      <div className={styles.overflow}>
        <div className={styles.trendsPage}>
          <div className={styles.pageHeader}>
            <h1>
              fastest growing
              <br /> <b>tiktok accounts</b>
              <br />
              from the last 7 days
            </h1>
          </div>
          <div className={styles.trendsWrapper}>
            <ol className={styles.trends}>
              {trends !== null && trends !== undefined ? (
                trends.slice(0, 50).map((trend: any, index: number) => {
                  return <RankCard key={index} data={trend} />;
                })
              ) : (
                <p>No data found</p>
              )}
            </ol>
          </div>
          <Blank padding="slim">
            <p className={styles.bulletin}>
              Looking for the top 50 for YouTube shorts or instagram?
            </p>
            <Button
              modal
              modalContent={<HubspotForm />}
              label="get in touch"
              size="large"
              width="fill"
              color="dark"
            />
          </Blank>
        </div>
      </div>
    </PageWrapper>
  );
}
