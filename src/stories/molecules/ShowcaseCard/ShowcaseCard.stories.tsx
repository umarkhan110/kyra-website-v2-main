import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ShowcaseCard } from "./ShowcaseCard";

import "@/styles/storybook.scss";

// Mock data
import { brandsData } from "./data";

const meta: Meta<typeof ShowcaseCard> = {
  title: "Molecules/Showcase Card",
  component: ShowcaseCard,
  decorators: [
    (Story) => (
      <div style={{ color: "#bbef44" }} className="padded">
        <div className="scroll">
          <div className="cardWrapper">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ShowcaseCard>;

export const Primary: Story = {
  render: (args) => (
    <ShowcaseCard
      id={1}
      primary
      heading={args.heading}
      subHeading={args.subHeading}
      firstStatistic={args.firstStatistic}
      secondStatistic={args.secondStatistic}
      campaignDescription={args.campaignDescription}
      campaignImage={
        brandsData[0].attributes.campaign_image?.data.attributes.url
      }
      campaignVideo={brandsData[0].attributes.campaign_video}
      logo={brandsData[0].attributes.logo?.data.attributes}
      signUpURL="#"
      theme={args.theme}
    />
  ),
  args: {
    heading: "Heading",
    subHeading: "Sub heading",
    firstStatistic: "First statistic",
    secondStatistic: "Second statistic",
    campaignDescription: "This is a short showcase card description.",
    theme: "dark",
  },
};
