"use client";

import clsx from "clsx";
import styles from "./YearReview.module.scss";
interface YearReviewProps {
  primary?: boolean;
  label: string;
  children?: any;
  theme?: "default" | "dark";
}

export const YearReview = ({
  label,
  children,
  theme,
  primary = false,
}: YearReviewProps) => {
  const classes = clsx(styles.sectionReview, {
    [styles.primary]: primary,
    [styles.dark]: theme === "dark",
  });
  return (
    <div className={classes}>
      <div className={styles.container}>
        <h2>{label}</h2>
        {children}
      </div>
    </div>
  );
};
