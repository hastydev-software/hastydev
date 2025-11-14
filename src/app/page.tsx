import { Header } from "@/client/layout/Header/Header";
import { SkipLink } from "@/client/components/SkipLink";
import { Hero } from "@/client/partials/Hero";
import { Stats } from "@/client/partials/Stats";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
      </main>
    </>
  );
}
