import { PageWrapper } from "@/ui/templates";

import styles from "../page.module.scss";

export default async function TosPage() {
  return (
    <PageWrapper>
      <div className={styles.page}>
        <div className={styles.pageHeader}>
          <h1>Terms &amp; Conditions</h1>
        </div>
        <div className={styles.pageContent}>
          <iframe
            style={{
              // width 100%
              width: "100%",
              height: "100vh",
            }}
            src="https://docs.google.com/document/d/e/2PACX-1vRTBsSIXh4uZ-jOKmesNJhwzU14Q3qEijwMHRDBRZymjVZSVFTUpuPxhkiliPqMhyLiGgBUXkM9vywZ/pub?embedded=true"
          ></iframe>
        </div>
      </div>
    </PageWrapper>
  );
}
