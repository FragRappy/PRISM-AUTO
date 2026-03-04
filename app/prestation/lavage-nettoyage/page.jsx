import { Footer } from "../../ui/frontend/navbar/Footer";
import { Header } from "../../ui/frontend/navbar/Header";
import { PricingSection } from "../../ui/frontend/section/Pricing";

export const metadata = { title: "Lavage et Nettoyage" };

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* <Contact /> */}
        <section>
          <PricingSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
