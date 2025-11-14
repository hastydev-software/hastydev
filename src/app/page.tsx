import { Header } from "@/client/layout/Header/Header";
import { SkipLink } from "@/client/components/SkipLink";
import { Hero } from "@/client/partials/Hero";
import { Stats } from "@/client/partials/Stats";
import { Products } from "@/client/partials/Products";
import { Tech } from "@/client/partials/Tech";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <Products />
        <Tech />
      </main>
    </>
  );
}
