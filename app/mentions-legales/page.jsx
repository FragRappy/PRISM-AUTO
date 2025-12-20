import { Footer } from "../ui/frontend/navbar/Footer";
import { Header } from "../ui/frontend/navbar/Header";
import { LegalSection } from "../ui/frontend/section/Legal";

export const metadata = { title: "Mentions légales" };

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <LegalSection />
      </main>
      <Footer />
    </>
  );
}
