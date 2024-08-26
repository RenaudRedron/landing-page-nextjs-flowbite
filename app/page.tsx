import Description from "@/components/Description";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ListFeature from "@/components/ListFeature";
import LogoCompany from "@/components/LogoCompany";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <LogoCompany />
      <ListFeature />
      <Description />
    </main>
  );
}
