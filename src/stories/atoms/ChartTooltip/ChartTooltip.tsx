"use client";

import React, { useEffect, useState } from "react";
import moment from "moment";
import { numbers } from "@/utils/numbers";
import styles from "./ChartTooltip.module.scss";

interface ChartTooltipProps {
  active?: any;
  label?: any;
  payload?: any;
  activeData?: any;
}

export const ChartTooltip = ({
  active,
  payload,
  label,
  activeData,
}: ChartTooltipProps) => {
  const [followersCntNumber, setFollowersCntNumber] = useState<number>(0);
  const [change, setChange] = useState<number>(0);
  const [dataLabel, setDataLabel] = useState<string>("");

  useEffect(() => {
    if (active && payload && payload.length > 0) {
      if (activeData === "followersData") {
        setFollowersCntNumber(payload[0]?.payload?.followers_cnt ?? 0);
        setChange(payload[0]?.payload?.daily_followers_cnt ?? 0);
        setDataLabel("Followers");
      } else if (activeData === "heartsData") {
        setFollowersCntNumber(payload[0]?.payload?.hearts_cnt ?? 0);
        setChange(payload[0]?.payload?.daily_hearts_cnt ?? 0);
        setDataLabel("Hearts");
      } else if (activeData === "postsData") {
        setFollowersCntNumber(payload[0]?.payload?.posts_cnt ?? 0);
        setChange(payload[0]?.payload?.daily_posts_cnt ?? 0);
        setDataLabel("Posts");
      }
    }
  }, [active, payload, activeData]);

  if (active && followersCntNumber !== undefined) {
    const followers = numbers(followersCntNumber);
    const ttDate = moment(label).format("MMM Do YY");

    return (
      <div className={styles.tooltip}>
        <span className={styles.ttFollowers}>{ttDate}</span>
        <div>
          {dataLabel}: {followers}
        </div>
        <div>Change: {change}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default ChartTooltip;
