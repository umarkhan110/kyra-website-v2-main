import React from "react";
import { PageWrapper } from "@/ui/templates";
import { HubspotForm } from "@/ui/molecules";
import styles from "../page.module.scss";

export default async function Page() {
  return (
    <PageWrapper>
      <div className={styles.page}>
        <div className={styles.pageContent}>
          <div className={styles.formWrapper}>
            <HubspotForm />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
