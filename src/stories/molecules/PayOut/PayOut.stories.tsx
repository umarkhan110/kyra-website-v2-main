import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PayOut } from "./PayOut";

import "@/styles/storybook.scss";

const meta: Meta<typeof PayOut> = {
  title: "Molecules/Pay Out",
  component: PayOut,
  decorators: [
    (Story) => (
      <div className="centerContentWrapper">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PayOut>;

export const Primary: Story = {
  render: (args) => <PayOut value={args.value} theme={args.theme} />,
  args: {
    value: 1000000,
    theme: "default",
  },
};
