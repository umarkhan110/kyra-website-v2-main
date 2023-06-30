"use client"
import { useEffect, useState } from "react";
import { PageWrapper } from "@/ui/templates";
import { Hero } from "@/ui/organisms";
import { Button } from "@/ui/atoms";

async function fetchData() {
  const res = await fetch("https://strapi.kyra.com/home");
  if (!res.ok) {
    throw new Error("Failed");
  }
  const data = await res.json();
  return data.data.attributes;
}

export default function HomePage() {
  const [headerVideoUrl, setHeaderVideoUrl] = useState("");
  const [mobileVideoUrl, setMobileVideoUrl] = useState("");
  const [heroItems, setHeroItems] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchVideoData = async () => {
      try {
        const siteData = await fetchData();
        const filteredHeroItems = siteData.heroes.data.filter(
          (item) => item.attributes.screen === "home"
        );

        if (isMounted) {
          setHeaderVideoUrl(siteData.header_video.data.attributes.url);
          setMobileVideoUrl(siteData.header_video_m3u8);
          setHeroItems(filteredHeroItems);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchVideoData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <PageWrapper>
      {headerVideoUrl && (
        <Hero
          primary
          videoUrl={headerVideoUrl}
          mobileVideoUrl={mobileVideoUrl}
          title={heroItems.map((item) => item.attributes.title)}
          subtitle={heroItems.map((item) => item.attributes.subtitle)}
        >
          <Button link="/brands" label="brands" size="large" />
          <Button link="/creators" label="creators" size="large" />
        </Hero>
      )}
    </PageWrapper>
  );
}
