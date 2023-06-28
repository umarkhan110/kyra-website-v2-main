import React from "react";
import { PageWrapper } from "@/ui/templates";
import { VimeoPlayer } from "@/ui/molecules";
import styles from "../page.module.scss";

export default async function Page() {
  return (
    <PageWrapper>
      <div className={styles.page}>
        <div className={styles.pageContent}>
          <VimeoPlayer
            video="https://vimeo.com/823077796/3a176940a8"
            responsive
          />
        </div>
      </div>
    </PageWrapper>
  );
}
