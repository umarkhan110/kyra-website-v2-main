import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ScrollMarquee } from "./ScrollMarquee";

import "@/styles/storybook.scss";

const meta: Meta<typeof ScrollMarquee> = {
  title: "Molecules/Scroll Marquee",
  component: ScrollMarquee,
  decorators: [
    (Story) => (
      <div className="marquee">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ScrollMarquee>;

export const Primary: Story = {
  render: (args) => <ScrollMarquee message={args.message} theme={args.theme} />,
  args: {
    message: "Text to scroll",
    theme: "default",
  },
};
