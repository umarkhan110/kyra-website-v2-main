import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Blank } from "./Blank";

import "@/styles/storybook.scss";

const meta: Meta<typeof Blank> = {
  title: "Organisms/Sections/Blank",
  component: Blank,
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Blank>;

export const Primary: Story = {
  render: (args) => (
    <Blank
      label={args.label}
      theme={args.theme}
      align={args.align}
      padding={args.padding}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        blanditiis maiores beatae perferendis quod vitae cumque dolorum at
        voluptatum. Rerum modi fugiat reprehenderit soluta incidunt tenetur enim
        in, placeat odio.
      </p>
    </Blank>
  ),

  args: {
    label: "Section",
    theme: "dark",
    align: "center",
    padding: "default",
  },
};
