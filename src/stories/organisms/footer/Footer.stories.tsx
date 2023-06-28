import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

import "@/styles/storybook.scss";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  render: () => <Footer primary />,
};
