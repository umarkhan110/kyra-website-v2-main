import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";

import { Button } from "./Button";

import "@/styles/storybook.scss";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  decorators: [
    (Story) => {
      return (
        <div className="">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => {
    const wrapperClasses = clsx("buttonWrapper", {
      dark: args.color === "dark",
    });
    return (
      <div className={wrapperClasses}>
        <Button
          label={args.label}
          color={args.color}
          size={args.size}
          width={args.width}
        />
      </div>
    );
  },
  args: {
    label: "Button",
  },
};
