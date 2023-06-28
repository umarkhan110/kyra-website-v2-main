import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RankCard } from "./RankCard";

import "@/styles/storybook.scss";

const meta: Meta<typeof RankCard> = {
  title: "Molecules/RankCard",
  component: RankCard,
  decorators: [
    (Story) => (
      <div className="padded">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RankCard>;

export const Primary: Story = {
  render: () => (
    <RankCard
      data={{
        tiktok_id: "123",
        username: "Ironman",
        last_follower: "17600",
        total_increase: "12000",
        user_img: "/public/images/sb/iron-man-square.jpg",
        // @ts-ignore
        posts: [
          {
            img: "/public/images/placeholder-app.jpg",
            link: "#",
          },
          {
            img: "/public/images/placeholder-app.jpg",
            link: "#",
          },
          {
            img: "/public/images/placeholder-app.jpg",
            link: "#",
          },
        ],
      }}
    />
  ),
};
