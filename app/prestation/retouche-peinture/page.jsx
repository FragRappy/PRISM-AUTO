import { FaqSection } from "@/app/ui/frontend/section/Faq";
import { Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { Footer } from "../../ui/frontend/navbar/Footer";
import { Header } from "../../ui/frontend/navbar/Header";

export const metadata = { title: "Retouche peinture" };

const faq = [
  {
    question: "Quels types de dommages peut-on corriger en retouche ?",
    answer: "Éclats de gravillons, rayures profondes atteignant la couche de base, impacts localisés sur portières ou pare-chocs. La retouche est adaptée aux dommages ponctuels sur des zones définies, sans nécessiter une remise en peinture complète.",
  },
  {
    question: "Le résultat est-il vraiment invisible ?",
    answer: "Notre procédé comble l'impact et nivelle la surface avec la peinture environnante. Sur une peinture d'origine en bon état, le résultat est très discret. Lors de la prise en charge, nous évaluons le rendu possible en fonction de l'ancienneté et de l'état de la teinte.",
  },
  {
    question: "Combien de temps prend une retouche ?",
    answer: "Une retouche ponctuelle prend généralement 2 à 4 heures selon le nombre de zones à traiter. Pour plusieurs éléments, comptez une journée.",
  },
  {
    question: "Faut-il repeindre tout l'élément (portière, pare-chocs) ?",
    answer: "Non, c'est justement l'avantage de la retouche locale. Nous intervenons uniquement sur la zone endommagée, en préservant la peinture d'origine autour. Cela évite les écarts de teinte liés à une remise en peinture partielle.",
  },
  {
    question: "La retouche est-elle adaptée aux véhicules sous garantie ?",
    answer: "Oui. La retouche n'affecte pas la garantie constructeur puisqu'elle n'implique pas de travaux structurels. Elle est également recommandée pour les véhicules en fin de leasing pour éviter les pénalités de restitution.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container mt={80} mb={20}>
            <Stack gap="xl" maw={860} mx="auto">
              <Title order={1} fz={36} fw={700} ta="center">
                Retouche peinture
              </Title>
              <Text c="dimmed" ta="center" fz="md" lh={1.8} maw={640} mx="auto">
                Éclats de gravillons, rayures profondes, impacts localisés — notre
                service de retouche peinture corrige les dommages ponctuels sans
                repeindre l'ensemble de l'élément.
              </Text>

              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" mt="xl">
                <Stack gap="sm">
                  <Text fw={600}>Correction locale, sans remise en peinture totale</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Notre procédé de retouche comble l'impact avec la teinte exacte de
                    votre véhicule, puis nivelle la surface au ras de la peinture
                    d'origine. Seule la zone abîmée est traitée, ce qui préserve
                    la peinture environnante et évite tout risque de variation de teinte.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Adapté aux éclats et rayures profondes</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Les éclats de gravillons, les rayures atteignant la couche de base
                    et les impacts localisés sur portières ou pare-chocs sont les cas
                    typiques traités en retouche. Le résultat est discret et bien plus
                    économique qu'une remise en peinture complète.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Protection contre la corrosion</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Un éclat non traité expose le métal à l'air et à l'humidité,
                    favorisant l'apparition de rouille. Intervenir rapidement avec
                    une retouche adaptée stoppe ce processus et protège la structure
                    de la carrosserie sur le long terme.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Idéal pour les fins de leasing et la revente</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Avant de restituer un véhicule en leasing ou de le mettre en vente,
                    une retouche peinture ciblée permet d'éliminer les défauts
                    visibles, d'éviter les pénalités de restitution et de valoriser
                    votre véhicule sans investissement disproportionné.
                  </Text>
                </Stack>
              </SimpleGrid>
            </Stack>
          </Container>

          <FaqSection
            title="Questions fréquentes sur la retouche peinture"
            items={faq}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
