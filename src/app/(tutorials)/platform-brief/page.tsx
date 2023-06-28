import React from "react";
import { PageWrapper } from "@/ui/templates";
import { TypeformWidget } from "@/ui/molecules";
import styles from "../page.module.scss";

export default async function Page() {
  return (
    <PageWrapper>
      <div className={styles.page}>
        <div className={styles.pageContent}>
          <TypeformWidget id="gOEgzvOB" />
        </div>
      </div>
    </PageWrapper>
  );
}
