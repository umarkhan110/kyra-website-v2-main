import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SloganCard } from "./SloganCard";

import "@/styles/storybook.scss";

const meta: Meta<typeof SloganCard> = {
  title: "Molecules/Slogan Card",
  component: SloganCard,
  decorators: [
    (Story) => (
      <div className="centerContentWrapper">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SloganCard>;

export const Primary: Story = {
  render: () => (
    <SloganCard heading="Heading" subHeading="Sub heading" primary />
  ),
};
