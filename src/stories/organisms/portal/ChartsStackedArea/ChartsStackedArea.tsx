"use client";

import { useState, useEffect } from "react";
import moment from "moment";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartTooltip } from "@/ui/atoms";
import { numbers } from "@/utils/numbers";

import styles from "./ChartsStackedArea.module.scss";

interface Data {
  followers_cnt: any[];
  hearts_cnt: any[];
  posts_cnt: any[];
}

interface StackedAreaChartProps {
  userID: number | string;
  stats?: any;
}

export const StackedAreaChart = ({ userID, stats }: StackedAreaChartProps) => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://strapi.kyra.com/creators/charts/${userID}`,
        {
          next: { revalidate: 10 },
        }
      );
      const data: Data = await res.json();
      setFollowersData(data.followers_cnt);
      setHeartsData(data.hearts_cnt);
      setPostsData(data.posts_cnt);
      setActiveData(data.followers_cnt);
    };

    fetchData();
  }, []);

  const [followersData, setFollowersData] = useState<any[]>([]);
  const [heartsData, setHeartsData] = useState<any[]>([]);
  const [postsData, setPostsData] = useState<any[]>([]);
  const [activeData, setActiveData] = useState<any[]>([]);
  const [activeButton, setActiveButton] = useState<
    "followersData" | "heartsData" | "postsData"
  >("followersData");

  const firstTimestamp = activeData[0]?.timestamp;
  const lastTimestamp = activeData[activeData.length - 1]?.timestamp;

  const handleToggleData = (
    dataType: "followersData" | "heartsData" | "postsData"
  ) => {
    if (dataType === "followersData") {
      setActiveData(followersData);
    } else if (dataType === "heartsData") {
      setActiveData(heartsData);
    } else if (dataType === "postsData") {
      setActiveData(postsData);
    }
    setActiveButton(dataType);
  };

  const total_hearts = stats[0].total_hearts;
  const total_posts = stats[0].total_posts;
  const total_followers = stats[0].total_followers;

  const heartsAbbr = numbers(total_hearts);
  const postsAbbr = numbers(total_posts);
  const followersAbbr = numbers(total_followers);

  return (
    <div className={styles.chartSection}>
      <h2>Historical data</h2>
      <div className={styles.chartWrapper}>
        <div className={styles.chartNav}>
          <button
            onClick={() => handleToggleData("followersData")}
            className={activeButton === "followersData" ? styles.active : ""}
          >
            Followers
            <span>{followersAbbr}</span>
          </button>
          <button
            onClick={() => handleToggleData("heartsData")}
            className={activeButton === "heartsData" ? styles.active : ""}
          >
            Hearts
            <span>{heartsAbbr}</span>
          </button>
          <button
            onClick={() => handleToggleData("postsData")}
            className={activeButton === "postsData" ? styles.active : ""}
          >
            Posts
            <span>{postsAbbr}</span>
          </button>
        </div>
        <ResponsiveContainer width="99.8%" aspect={1.5}>
          <AreaChart width={400} height={400} data={activeData}>
            <XAxis
              dataKey="timestamp"
              tickFormatter={(timeStr) => moment(timeStr).format("MMM DD")}
              name="Time"
              type="number" // Required for time series
              domain={["dataMin", "dataMax"]}
              scale="time"
              tickLine={false} // Vertical ticks
              tickCount={6}
              minTickGap={28}
              axisLine={false}
              padding="gap"
              interval="preserveStartEnd" // Preserve first and last tick
              ticks={[firstTimestamp, lastTimestamp]}
              tick={{
                fill: "#FFFFFF",
                fontSize: 12,
              }}
            />
            <YAxis yAxisId="left" hide={true} />
            <YAxis yAxisId="right" hide={true} orientation="right" />

            <Tooltip
              content={<ChartTooltip activeData={activeButton} />}
              cursor={{
                stroke: "var(--color-white)",
                strokeDasharray: 10,
                strokeWidth: 2,
              }}
            />

            <Area
              type="monotone"
              dataKey={
                activeData === postsData
                  ? "posts_cnt"
                  : activeData === heartsData
                  ? "hearts_cnt"
                  : "followers_cnt"
              }
              stroke="var(--color-pink)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorAlt)"
              yAxisId="left"
            />
            <Area
              type="monotone"
              dataKey={
                activeData === postsData
                  ? "daily_posts_cnt"
                  : activeData === heartsData
                  ? "daily_hearts_cnt"
                  : "daily_followers_cnt"
              }
              stroke="var(--color-green)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorMain)"
              yAxisId="right"
            />
            <defs>
              <linearGradient id="colorMain" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-green)"
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-green)"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorAlt" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-pink)"
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-pink)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
