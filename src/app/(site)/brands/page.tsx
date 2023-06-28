import { PageWrapper } from "@/ui/templates";
import {
  Basic,
  YearReview,
  BrandEngagements,
  Hero,
  Platform,
  TopBrands,
} from "@/ui/organisms";
import {
  SloganCard,
  ScrollMarquee,
  Accordion,
  HubspotForm,
} from "@/ui/molecules";
import { Button } from "@/ui/atoms";

import { sloganData } from "utils/slogandata";

export const metadata = {
  title: "Kyra - Brands",
};

async function getData() {
  const res = await fetch("https://strapi.kyra.com/home", {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
}

interface brandFAQsProps {
  id: number;
  question: string;
  answer: string;
}

export default async function Brands() {
  const brandsData = await getData();
  const siteData = brandsData.data.attributes;

  // Sign Up URL
  const brandSignUpURL = siteData.brand_signup;
  // Header Video
  const headerVideo = siteData.header_video;
  const headerVideoUrl = headerVideo.data.attributes.url;
  // Header Video Mobile
  const mobileVideo = siteData.header_video_mobile;
  const mobileVideoUrl = mobileVideo.data.attributes.url;
  // Hero
  const hero = siteData.heroes.data;
  const filteredHeroItems = hero.filter(
    (item: any) => item.attributes.screen === "brands"
  );

  // Case Studies
  const caseStudies = siteData.brand_case_studies.data;
  // Brand FAQs
  const brandFAQs = siteData.brand_faqs.data;
  // Top Brands
  const topBrands = siteData.brands.data;
  // Headlines
  const headlines = siteData.headlines.data;

  return (
    <PageWrapper>
      <Hero
        videoUrl={headerVideoUrl}
        mobileVideoUrl={mobileVideoUrl}
        title={filteredHeroItems.map((item: any) => item.attributes.title)}
        subtitle={filteredHeroItems.map(
          (item: any) => item.attributes.subtitle
        )}
      >
        <Button
          modal
          modalContent={<HubspotForm />}
          label="get started"
          size="large"
        />
      </Hero>

      <ScrollMarquee
        message={filteredHeroItems.map((item: any) => item.attributes.scroller)}
      />

      <TopBrands
        label="Trusted by world's top brands"
        brandsData={topBrands}
        headlineData={headlines}
      >
        <Button
          modal
          modalContent={<HubspotForm />}
          size="large"
          label="get started"
        />
      </TopBrands>

      <YearReview label="in 2022">
        {sloganData.map((item: any, index: number) => (
          <SloganCard
            key={index}
            sloganID={item.id}
            heading={item.heading}
            subHeading={item.subHeading}
          />
        ))}
      </YearReview>

      <Platform>
        {brandFAQs.map((item: any, index: number) => (
          <Accordion
            key={index}
            title={item.attributes.question}
            content={item.attributes.answer}
          />
        ))}
        <Button
          modal
          modalContent={<HubspotForm />}
          size="normal"
          label="Request a demo"
          width="fill"
          color="dark"
        />
      </Platform>

      <BrandEngagements
        page="brands"
        brandsData={caseStudies}
        signUpURL={brandSignUpURL}
        label="unlock your creator marketing potential: world class creators driving impactful results"
      />

      <Basic label="Join hundreds of global brands today">
        <p>
          The world&apos;s best brands trust Kyra. Whether it&apos;s activating
          your next big launch, creating authentic content to fuel your
          performance marketing, or reacting to the latest brand-relevant trend,
          Kyra for Brands makes it possible.
        </p>
        <Button
          modal
          modalContent={<HubspotForm />}
          label="get started"
          size="large"
          width="fill"
        />
      </Basic>
    </PageWrapper>
  );
}
