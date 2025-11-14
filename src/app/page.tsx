import { Header } from "@/client/layout/Header/Header";
import { SkipLink } from "@/client/components/SkipLink";
import { Hero } from "@/client/partials/Hero";
import { Stats } from "@/client/partials/Stats";
import { Products } from "@/client/partials/Products";
import { Tech } from "@/client/partials/Tech";
import { About } from "@/client/partials/About";
import { Contact } from "@/client/partials/Contact";
import { FAQSection } from "@/client/partials/FAQ";
import { Footer } from "@/client/partials/Footer";

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
        {/* <Testimonial /> */}
        <About />
        <Contact />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
