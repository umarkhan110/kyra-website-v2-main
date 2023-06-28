import Image from "next/image";
import Link from "next/link";
import { PageWrapper } from "@/ui/templates";
import {
  Hero,
  TopBrands,
  Basic,
  Blank,
  Creators,
  BrandEngagements,
} from "@/ui/organisms";
import {
  ScrollMarquee,
  Accordion,
  PayOut,
  HubspotFormCreators,
} from "@/ui/molecules";
import { Button } from "@/ui/atoms";
import AppStore from "@/assets/svg/app_store.svg";

export const metadata = {
  title: "Kyra - Creators",
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

export default async function Brands() {
  const brandsData = await getData();
  const siteData = brandsData.data.attributes;
  // Sign Up URL
  const creatorSignUpURL = siteData.creator_signup;
  // App Store URL
  const appStoreURL = siteData.app_download;
  // Header Video
  const headerVideo = siteData.header_video;
  const headerVideoUrl = headerVideo.data.attributes.url;
  // Header Video Mobile
  const mobileVideo = siteData.header_video_mobile;
  const mobileVideoUrl = mobileVideo.data.attributes.url;
  // Creator FAQs
  const creatorFAQs = siteData.creator_faqs.data;
  // Hero
  const hero = siteData.heroes.data;
  const filteredHeroItems = hero.filter(
    (item: any) => item.attributes.screen === "creators"
  );
  // Top Brands
  const topBrands = siteData.brands.data;
  // Creators Data
  const creatorsData = siteData.creators.data;
  // Creator Blocks
  const creatorBlocks = siteData.creator_blocks.data;

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
          modalContent={<HubspotFormCreators />}
          label="sign up today"
          size="large"
        />
      </Hero>

      <ScrollMarquee
        message={filteredHeroItems.map((item: any) => item.attributes.scroller)}
      />

      <TopBrands label="Work with the biggest brands" brandsData={topBrands}>
        <Button
          modal
          modalContent={<HubspotFormCreators />}
          label="Sign up today"
          size="large"
        />
      </TopBrands>

      <BrandEngagements
        page="creators"
        brandsData={creatorBlocks}
        signUpURL={creatorSignUpURL}
        label="unleash your creative potential with kyra: effortless briefing and collaboration with the world's best brands."
      />
      <PayOut value={siteData.total_creator_payout} />

      <Creators label="Join these creators" creatorsData={creatorsData}>
        <Button
          modal
          modalContent={<HubspotFormCreators />}
          label="Sign up today"
          size="large"
        />
      </Creators>

      <Blank label="faqs" align="left">
        {creatorFAQs.map((item: any, index: number) => (
          <Accordion
            key={index}
            title={item.attributes.question}
            content={item.attributes.answer}
          />
        ))}
      </Blank>

      <Basic label="Join the community of 1000+ creators today">
        <p>
          Click below to download the app now and start earning money from your
          content!
        </p>
        <Link href={appStoreURL}>
          <Image src={AppStore} alt="" />
        </Link>
      </Basic>
    </PageWrapper>
  );
}
