"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import clsx from "clsx";
import styles from "./PayOut.module.scss";
import "./Odometer.scss";

interface PayOutProps {
  value: number;
  theme?: "default" | "dark";
}

const motionVariants = {
  in: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

let loadedCallback: (() => void) | null = null;
let loaded = false;

const Odometer = dynamic(
  async () => {
    const mod = await import("react-odometerjs");
    loaded = true;
    if (loadedCallback != null) {
      loadedCallback();
    }
    return mod;
  },
  {
    ssr: false,
    loading: () => <>0</>,
  }
);

export const PayOut = ({ value, theme }: PayOutProps) => {
  const [odometerLoaded, setOdometerLoaded] = useState(false);
  const [odometerValue, setOdometerValue] = useState(0);

  loadedCallback = () => {
    setOdometerLoaded(true);
  };

  useEffect(() => {
    if (odometerLoaded) {
      let interval = setInterval(() => {
        setOdometerValue((prevValue) => prevValue + 0.01);
      }, 2000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [odometerLoaded]);

  useEffect(() => {
    setOdometerValue(1035815.03);
  }, []);

  // Motion
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    amount: 1,
    margin: "0px 0px -50px 0px",
  });

  const odometerClasses = clsx(styles.odometerWrapper, {
    [styles.dark]: theme === "dark",
  });

  return (
    <motion.div
      ref={ref}
      animate={inView ? "in" : "out"}
      variants={motionVariants}
      className={odometerClasses}
      data-payout={value}
    >
      <div className={styles.odometer}>
        $
        <Odometer
          value={odometerValue}
          format="(d,ddd,ddd).dd"
          theme="default"
        />
      </div>
      <div className={styles.label}>Paid out to creators</div>
    </motion.div>
  );
};
