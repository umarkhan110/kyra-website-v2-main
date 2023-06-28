import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

import "@/styles/storybook.scss";

// Dummy Data
import { accordionData } from "../../../utils/accordiondata";

const meta: Meta<typeof Accordion> = {
  title: "Molecules/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="accordionWrapper">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  render: () => (
    <>
      {accordionData.map(({ title, content }, index) => (
        <Accordion key={index} title={title} content={content} />
      ))}
    </>
  ),
};
