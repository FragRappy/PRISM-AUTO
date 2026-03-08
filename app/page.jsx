import { FeaturesCard } from "./ui/frontend/card/Feature";
import { HeroCarousel } from "./ui/frontend/carousel/Hero";
import { Footer } from "./ui/frontend/navbar/Footer";
import { Header } from "./ui/frontend/navbar/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <HeroCarousel />
          <FeaturesCard />
        </section>
      </main>
      <Footer />
    </>
  );
}
