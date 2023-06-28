import React from "react";
import Image from "next/image";
import styles from "./Platform.module.scss";

interface PlatformProps {
  primary?: boolean;
  children?: any;
}

export const Platform = ({ children, primary = false }: PlatformProps) => {
  return (
    <div className={styles.sectionPlatform}>
      <div className={styles.container}>
        <h2>Our new creator platform</h2>
        <div className={styles.columns}>
          <div className={styles.columnContent}>
            <p>solving your creator marketing issues all at once</p>
            {children}
          </div>
          <div className={styles.columnImage}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/brand-platform.jpg"
                width="864"
                height="768"
                alt="Platform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
