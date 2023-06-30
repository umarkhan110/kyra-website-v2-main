import { PageWrapper } from "@/ui/templates";
import { Hero } from "@/ui/organisms";
import { Button } from "@/ui/atoms";

async function getData() {
  const res = await fetch("https://strapi.kyra.com/home");
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
}

export async function getServerSideProps() {
  const data = await getData();
  const siteData = data.data.attributes;

  return {
    props: {
      headerVideoUrl: siteData.header_video.data.attributes.url,
      mobileVideoUrl: siteData.header_video_m3u8,
      heroItems: siteData.heroes.data.filter(
        (item) => item.attributes.screen === "home"
      ),
    },
  };
}

export default function HomePage({ headerVideoUrl, mobileVideoUrl, heroItems }) {
  return (
    <PageWrapper>
      <Hero
        primary
        videoUrl={headerVideoUrl}
        mobileVideoUrl={mobileVideoUrl}
        title={heroItems ? heroItems.map((item) => item.attributes.title) : []}
        subtitle={heroItems ? heroItems.map((item) => item.attributes.subtitle) : []}
      >
        <Button link="/brands" label="brands" size="large" />
        <Button link="/creators" label="creators" size="large" />
      </Hero>
    </PageWrapper>
  );
}
