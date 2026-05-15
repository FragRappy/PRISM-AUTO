import { FaqSection } from "@/app/ui/frontend/section/Faq";
import { PriceSection } from "@/app/ui/frontend/section/Price";
import { Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { Footer } from "../../ui/frontend/navbar/Footer";
import { Header } from "../../ui/frontend/navbar/Header";

export const metadata = { title: "Protection Céramique" };

const packs = [
  { label: "Face avant", value: "face-avant" },
  { label: "Véhicule complet", value: "complet", popular: true },
];

const prices = {
  citadine: { "face-avant": 299, complet: 499 },
  berline: { "face-avant": 349, complet: 599 },
  suv: { "face-avant": 399, complet: 699 },
  utilitaire: { "face-avant": 449, complet: 799 },
};

const faq = [
  {
    question: "Combien de temps dure la protection céramique ?",
    answer: "Notre protection céramique offre une durabilité garantie de 2 ans. Au-delà, une simple décontamination et une nouvelle application permettent de renouveler la protection.",
  },
  {
    question: "Mon véhicule doit-il être préparé avant l'application ?",
    answer: "Oui. Nous effectuons systématiquement un dégraissage et une décontamination chimique de la surface avant toute application, afin de garantir l'adhérence optimale du revêtement.",
  },
  {
    question: "Quelle est la différence entre la formule Face avant et Véhicule complet ?",
    answer: "La formule Face avant couvre les zones les plus exposées : capot, pare-chocs avant et rétroviseurs. La formule Véhicule complet protège l'intégralité de la carrosserie, toit et coffre inclus.",
  },
  {
    question: "Puis-je laver mon véhicule normalement après le traitement ?",
    answer: "Oui, mais il faut respecter un délai de 48h après l'application avant tout lavage. Ensuite, un lavage à la main ou au jet sans brosse est recommandé pour préserver la céramique.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section>
          {/* <PriceSection
            variant="forfait"
            title="Protection céramique : Nos tarifs"
            subtitle="Une protection longue durée pour votre carrosserie, hydrophobe et résistante aux rayures légères"
            packs={packs}
            prices={prices}
          /> */}

          <Container mt={60} mb={20}>
            <Stack gap="xl" maw={860} mx="auto">
              <Title order={2} fz={24} fw={700} ta="center">
                Qu'est-ce que la protection céramique ?
              </Title>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                <Stack gap="sm">
                  <Text fw={600}>Une couche dure et hydrophobe</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    La céramique est un revêtement à base de dioxyde de silicium (SiO₂)
                    appliqué sur la carrosserie. Une fois polymérisé, il forme une surface
                    dure qui repousse l'eau, la saleté, les insectes et les contaminants chimiques.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Jusqu'à 2 ans de protection garantie</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Contrairement à une cire classique qui s'efface en quelques semaines,
                    notre protection céramique dure 2 ans. Elle préserve l'éclat de la peinture
                    et facilite l'entretien au quotidien.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Formule Face avant</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Couvre le capot, le pare-chocs avant et les rétroviseurs — les zones
                    les plus exposées aux projections de gravillons et aux insectes.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Formule Véhicule complet</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Protège l'intégralité de la carrosserie : capot, flancs, toit, coffre
                    et pare-chocs arrière. La solution idéale pour une protection totale.
                  </Text>
                </Stack>
              </SimpleGrid>
            </Stack>
          </Container>

          <FaqSection
            title="Questions fréquentes sur la protection céramique"
            items={faq}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
