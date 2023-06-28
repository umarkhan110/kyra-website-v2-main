import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TopBrands } from "./TopBrands";

import "@/styles/storybook.scss";

// Mock Data
import { brandsData, headlinesData } from "./data.js";

const meta: Meta<typeof TopBrands> = {
  title: "Organisms/Sections/Top Brands",
  component: TopBrands,
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TopBrands>;

export const Primary: Story = {
  render: (args) => (
    <TopBrands
      primary
      label={args.label}
      brandsData={brandsData}
      headlineData={headlinesData}
    />
  ),
  args: {
    label: "Top Brands",
  },
};
