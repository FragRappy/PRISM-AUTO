import { Footer } from "../ui/frontend/navbar/Footer";
import { Header } from "../ui/frontend/navbar/Header";
import { PrivacySection } from "../ui/frontend/section/Privacy";

export const metadata = { title: "Mentions légales" };

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PrivacySection />
      </main>
      <Footer />
    </>
  );
}
