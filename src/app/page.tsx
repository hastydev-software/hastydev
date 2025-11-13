import { Header } from "@/client/layout/Header/Header";
import { SkipLink } from "@/client/components/SkipLink";
import { Hero } from "@/client/partials/Hero";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
      </main>
    </>
  );
}
