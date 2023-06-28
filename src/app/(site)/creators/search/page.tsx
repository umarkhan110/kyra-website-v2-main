import { SearchTrends } from "@/ui/organisms";
import styles from "../../creators/page.module.scss";

async function getData() {
  const res = await fetch("https://strapi.kyra.com/trends/creators", {
    next: { revalidate: 900 }, // 900 seconds = 15 minutes
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
}

export default async function SearchPage() {
  const trendsData = await getData();

  return (
    <div className={styles.page}>
      <div className={styles.pageContent}>
        <SearchTrends data={trendsData} />
      </div>
    </div>
  );
}
