import React from "react";
import clsx from "clsx";

import styles from "./Blank.module.scss";

interface BlankProps {
  label?: string;
  children?: any;
  theme?: "default" | "dark";
  align?: "left" | "center" | "right";
  padding?: "default" | "slim";
}

export const Blank = ({
  label,
  children,
  theme,
  align,
  padding,
}: BlankProps) => {
  const sectionClasses = clsx(styles.sectionBlank, {
    [styles.dark]: theme === "dark",
    [styles.slim]: padding === "slim",
  });
  const containerClasses = clsx(styles.container, {
    [styles.left]: align === "left",
    [styles.center]: align === "center",
    [styles.right]: align === "right",
  });

  return (
    <div className={sectionClasses}>
      <div className={containerClasses}>
        {label && <h2>{label}</h2>}
        {children}
      </div>
    </div>
  );
};
