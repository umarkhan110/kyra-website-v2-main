import React from "react";
import styles from "./Basic.module.scss";

interface BasicProps {
  primary?: boolean;
  label: string;
  children?: React.ReactNode;
}

export const Basic = ({ label, children, primary = false }: BasicProps) => {
  const wrappedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === "p") {
      return <div className={styles.textBlock}>{child}</div>;
    }
    return child;
  });

  return (
    <div className={styles.sectionBasic}>
      <div className={styles.container}>
        <h2>{label}</h2>
        {wrappedChildren}
      </div>
    </div>
  );
};
