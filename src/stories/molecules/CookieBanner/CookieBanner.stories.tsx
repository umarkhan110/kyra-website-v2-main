import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CookieBanner } from "./CookieBanner";

import "@/styles/storybook.scss";

const meta: Meta<typeof CookieBanner> = {
  title: "Molecules/Cookie Banner",
  component: CookieBanner,
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CookieBanner>;

export const Primary: Story = {
  render: () => <CookieBanner />,
};
