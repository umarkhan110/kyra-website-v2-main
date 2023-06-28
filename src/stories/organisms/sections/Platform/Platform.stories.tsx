import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Platform } from "./Platform";

import "@/styles/storybook.scss";

const meta: Meta<typeof Platform> = {
  title: "Organisms/Sections/Platform",
  component: Platform,
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Platform>;

export const Primary: Story = {
  render: () => <Platform primary label="Platform" />,
};
