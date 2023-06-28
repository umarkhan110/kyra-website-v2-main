import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BrandEngagements } from "./BrandEngagements";

import "@/styles/storybook.scss";

// Mock data
import { brandsData } from "./data.js";

const meta: Meta<typeof BrandEngagements> = {
  title: "Organisms/Sections/Brand Engagements",
  component: BrandEngagements,
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BrandEngagements>;

export const Primary: Story = {
  render: (args) => (
    <BrandEngagements
      primary
      label={args.label}
      signUpURL="#"
      brandsData={brandsData}
      page={args.page}
    />
  ),

  args: {
    label: "Section title",
    page: "brands",
    // align: "center",
  },
};
