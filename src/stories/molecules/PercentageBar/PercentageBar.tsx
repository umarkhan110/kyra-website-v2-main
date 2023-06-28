import styles from "./PercentageBar.module.scss";

export const PercentageBar = () => {
  return (
    <div className={styles.percentageBarWrapper}>
      <h2>Percentage bar title</h2>
      <div className={styles.percentageBar}>
        <div className={styles.fillGreen} style={{ width: "50%" }} />
        <div className={styles.fillPink} style={{ width: "48%" }} />
        <div className={styles.fillBlue} style={{ width: "2%" }} />
      </div>
      <div className={styles.percentageBarStats}>
        <div className={`${styles.percentageBarStat} ${styles.fillBlue}`}>
          <span className={styles.label}>Stat label</span>
          <span className={styles.value}>50%</span>
        </div>
        <div className={`${styles.percentageBarStat} ${styles.fillBlue}`}>
          <span className={styles.label}>Stat label</span>
          <span className={styles.value}>48%</span>
        </div>
        <div className={`${styles.percentageBarStat} ${styles.fillBlue}`}>
          <span className={styles.label}>Stat label</span>
          <span className={styles.value}>2%</span>
        </div>
      </div>
    </div>
  );
};
