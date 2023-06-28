"use client";
import { Widget } from "@typeform/embed-react";
import styles from "./TypeformWidget.module.scss";

interface TypeformProps {
  id: string;
}

export const TypeformWidget = ({ id }: TypeformProps) => {
  return (
    <div className={styles.widget}>
      <Widget id={id} className={styles.embed} />
    </div>
  );
};
