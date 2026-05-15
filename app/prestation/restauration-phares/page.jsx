import { FaqSection } from "@/app/ui/frontend/section/Faq";
import { Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { Footer } from "../../ui/frontend/navbar/Footer";
import { Header } from "../../ui/frontend/navbar/Header";

export const metadata = { title: "Restauration des phares" };

const faq = [
  {
    question: "Pourquoi mes phares jaunissent-ils avec le temps ?",
    answer: "Le polycarbonate des optiques se dégrade sous l'effet des UV, de la chaleur et des projections. Ce jaunissement réduit la portée lumineuse de jusqu'à 80 % et peut être signalé au contrôle technique comme un défaut de sécurité.",
  },
  {
    question: "Combien de temps dure la restauration des phares ?",
    answer: "L'intervention prend généralement entre 1 et 2 heures selon l'état des optiques. Le véhicule est prêt à être récupéré le jour même.",
  },
  {
    question: "Le résultat est-il durable ?",
    answer: "Oui. Contrairement à un simple polissage qui ne dure que quelques mois, notre traitement intègre une protection UV qui préserve la clarté des optiques sur le long terme.",
  },
  {
    question: "Peut-on restaurer tous types de phares ?",
    answer: "La restauration s'applique à la grande majorité des phares en polycarbonate (halogènes, xénon, LED). Les optiques fissuré ou structurellement endommagés ne peuvent pas être traités et doivent être remplacés.",
  },
  {
    question: "Est-ce moins cher que de remplacer les phares ?",
    answer: "Très souvent, oui. Le remplacement d'un jeu de phares peut coûter plusieurs centaines d'euros. La restauration représente une fraction de ce coût pour un résultat équivalent sur des optiques en bon état structurel.",
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
                Restauration des phares
              </Title>
              <Text c="dimmed" ta="center" fz="md" lh={1.8} maw={640} mx="auto">
                Des phares jaunis ou opaques réduisent votre visibilité et peuvent être
                signalés au contrôle technique. Nous restaurons leur clarté et les
                protégeons contre les futures dégradations UV.
              </Text>

              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" mt="xl">
                <Stack gap="sm">
                  <Text fw={600}>Clarté retrouvée, sécurité restaurée</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Le jaunissement des optiques réduit la portée lumineuse de vos phares
                    de façon significative. Notre traitement élimine l'opacité accumulée
                    et redonne aux verres leur transparence d'origine, améliorant
                    directement votre visibilité nocturne.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Protection UV intégrée</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Contrairement au simple polissage qui n'est qu'une solution temporaire,
                    notre procédé inclut une couche de protection UV appliquée en fin
                    d'intervention. Elle ralentit considérablement la re-dégradation
                    des verres exposés au soleil.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Intervention rapide, sans démontage</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    La restauration se réalise directement sur le véhicule, sans dépose
                    des optiques. L'intervention prend 1 à 2 heures selon l'état des
                    phares. Votre véhicule est rendu le jour même, prêt à rouler.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Alternative économique au remplacement</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Le remplacement d'un jeu de phares représente une dépense souvent
                    élevée. La restauration vous permet de retrouver un résultat
                    équivalent à une fraction du coût, à condition que les optiques
                    soient structurellement intactes.
                  </Text>
                </Stack>
              </SimpleGrid>
            </Stack>
          </Container>

          <FaqSection
            title="Questions fréquentes sur la restauration des phares"
            items={faq}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
