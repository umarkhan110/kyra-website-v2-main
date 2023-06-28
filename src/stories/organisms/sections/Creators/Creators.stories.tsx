import type { Meta, StoryObj } from "@storybook/react";
import { Creators } from "./Creators";

import "@/styles/storybook.scss";

// Mock Data
import { creatorsData } from "./data.js";

const meta: Meta<typeof Creators> = {
  title: "Organisms/Sections/Creators",
  component: Creators,
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Creators>;

export const Primary: Story = {
  render: (args) => <Creators creatorsData={creatorsData} label={args.label} />,
  args: {
    label: "the avengers",
  },
};
