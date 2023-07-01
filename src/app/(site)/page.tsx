import { PageWrapper } from "@/ui/templates";
import { Button } from "@/ui/atoms";
import dynamic from "next/dynamic";

const HomeHero = dynamic(() => import('@/ui/organisms/sections/Hero/HomeHero'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <PageWrapper>
      <HomeHero primary>
        <Button link="/brands" label="brands" size="large" />
        <Button link="/creators" label="creators" size="large" />
      </HomeHero>
    </PageWrapper>
  );
}
