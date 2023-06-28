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
            video="https://vimeo.com/792790482/f4b0649cd2"
            responsive
          />
        </div>
      </div>
    </PageWrapper>
  );
}
