import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./Hero";

import "@/styles/storybook.scss";

const meta: Meta<typeof Hero> = {
  title: "Organisms/Sections/Hero",
  component: Hero,
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Primary: Story = {
  render: (args) => (
    <Hero
      title={args.title}
      subtitle={args.subtitle}
      primary
      videoUrl="http://thenewcode.com/assets/videos/polina.mp4"
    />
  ),
  args: {
    title: "This is <b>your hero</b> title",
    subtitle: "And your Hero Subtitle",
  },
};
