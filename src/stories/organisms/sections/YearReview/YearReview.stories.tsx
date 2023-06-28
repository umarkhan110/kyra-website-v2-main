import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YearReview } from "./YearReview";
import { SloganCard } from "@/ui/molecules";

import "@/styles/storybook.scss";

const meta: Meta<typeof YearReview> = {
  title: "Organisms/Sections/Year in Review",
  component: YearReview,
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof YearReview>;

export const Primary: Story = {
  render: (args) => (
    <YearReview primary label={args.label} theme={args.theme}>
      <SloganCard heading="Thor Odinson" subHeading="The God of Thunder" />

      <SloganCard heading="Black Widow" subHeading="A deadly assassin" />

      <SloganCard heading="Captain America" subHeading="The first avenger" />
    </YearReview>
  ),
  args: {
    label: "Avengers",
    theme: "default",
  },
};
