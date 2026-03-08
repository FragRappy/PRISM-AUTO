import EcoSection from "@/app/ui/frontend/section/Eco";
import { HighlightSection } from "@/app/ui/frontend/section/Highlight";
import { PriceSection } from "@/app/ui/frontend/section/Price";
import { Footer } from "../../ui/frontend/navbar/Footer";
import { Header } from "../../ui/frontend/navbar/Header";

export const metadata = { title: "Lavage et Nettoyage" };

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section>
          <PriceSection />
          <EcoSection />
          <HighlightSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
