import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Basic } from "./Basic";

import "@/styles/storybook.scss";

const meta: Meta<typeof Basic> = {
  title: "Organisms/Sections/Basic",
  component: Basic,
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Basic>;

export const Primary: Story = {
  render: () => (
    <Basic primary label="Basic Section">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        blanditiis maiores beatae perferendis quod vitae cumque dolorum at
        voluptatum. Rerum modi fugiat reprehenderit soluta incidunt tenetur enim
        in, placeat odio.
      </p>
    </Basic>
  ),
};
