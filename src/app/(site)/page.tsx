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

  return {
    props: {
      data,
    },
  };
}

export default async function Home({data}) {
  
  const siteData = data?.data.attributes;

  // Header Video
  const headerVideo = siteData.header_video;
  const headerVideoUrl = headerVideo.data.attributes.url;
  // Header Video Mobile
  const mobileVideoUrl = siteData.header_video_m3u8;
  // const mobileVideoUrl = mobileVideo.data.attributes.url;
  // Hero
  const hero = siteData.heroes.data;
  const filteredHeroItems = hero.filter(
    (item: any) => item.attributes.screen === "home"
  );

  return (
    <PageWrapper>
      <Hero
        primary
        videoUrl={headerVideoUrl}
        mobileVideoUrl={mobileVideoUrl}
        title={filteredHeroItems.map((item: any) => item.attributes.title)}
        subtitle={filteredHeroItems.map(
          (item: any) => item.attributes.subtitle
        )}
      >
        <Button link="/brands" label="brands" size="large" />
        <Button link="/creators" label="creators" size="large" />
      </Hero>
    </PageWrapper>
  );
}
