import { FaqSection } from "@/app/ui/frontend/section/Faq";
import { Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { Footer } from "../../ui/frontend/navbar/Footer";
import { Header } from "../../ui/frontend/navbar/Header";

export const metadata = { title: "Restauration RestorFX" };

const faq = [
  {
    question: "Combien de temps dure le traitement RestorFX ?",
    answer: "Le traitement RestorFX est permanent et garanti 10 ans sur une peinture d'origine non repeinte. Contrairement au polish qui s'efface après quelques lavages, il se lie chimiquement au vernis existant de manière durable.",
  },
  {
    question: "Quel est le temps d'immobilisation du véhicule ?",
    answer: "Comptez 24 à 48 heures pour un traitement complet. Si vous ajoutez une protection céramique, prévoyez 1 à 2 jours supplémentaires.",
  },
  {
    question: "Quelle est l'entretien après le traitement ?",
    answer: "Pendant 2 à 3 semaines après l'application, évitez tout lavage mécanique ou chimique. Un simple rinçage à l'eau est possible si nécessaire. Passé ce délai, l'entretien redevient normal.",
  },
  {
    question: "RestorFX peut-il corriger tous les types de dégâts ?",
    answer: "RestorFX élimine jusqu'à 99 % des micro-rayures, de l'oxydation, des traces de virages et des contaminations chimiques sur la peinture d'origine. En revanche, il ne peut pas corriger les dommages profonds atteignant la couche de base ou les problèmes structurels.",
  },
  {
    question: "Quelle est la différence avec le polish ou la céramique ?",
    answer: "Le polish est abrasif et temporaire. La céramique protège mais ne corrige pas. RestorFX régénère le vernis de l'intérieur par fusion chimique — c'est un traitement correctif et permanent, complémentaire à la protection céramique.",
  },
  {
    question: "Le traitement affecte-t-il la peinture d'origine ?",
    answer: "Non. RestorFX se fusionne avec le vernis existant sans enlever de matière ni modifier la teinte. Il n'y a aucun risque de variation de couleur, contrairement à une remise en peinture.",
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
                Restauration de vernis RestorFX (VSP)
              </Title>
              <Text c="dimmed" ta="center" fz="md" lh={1.8} maw={640} mx="auto">
                Une technologie chimique unique qui régénère votre vernis de l'intérieur —
                sans ponçage agressif, sans repeinture, avec une garantie de 10 ans.
              </Text>

              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" mt="xl">
                <Stack gap="sm">
                  <Text fw={600}>Une fusion chimique avec votre vernis</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Le procédé PCR (Paintless Clearcoat Repair) réactive et régénère le
                    vernis d'origine par voie chimique. Le produit se lie moléculairement
                    au vernis existant, comble les micro-fissures et élève la dureté de
                    surface à 7H — contre 2 à 5H pour un vernis d'usine standard.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Jusqu'à 99 % des défauts éliminés</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Micro-rayures, oxydation, toiles d'araignées, marques de virages,
                    contaminations chimiques — le traitement en 3 étapes (diagnostic,
                    préparation, application) efface la quasi-totalité des dégradations
                    de surface sans toucher à la couche de base.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Garanti 10 ans sur peinture d'origine</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    RestorFX est un traitement permanent. La garantie de 10 ans s'applique
                    sur toute peinture d'origine non repeinte. Une fois lié au vernis, il
                    résiste à l'équivalent de 7 ans d'exposition UV avec moins de 2 % de
                    perte de brillance.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Une alternative à la repeinture</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Plus rapide, plus économique et sans risque de variation de teinte :
                    RestorFX convient parfaitement aux fins de leasing, aux véhicules de
                    collection, aux prépararations avant revente ou à tout véhicule dont
                    la peinture d'origine est structurellement saine mais visuellement dégradée.
                  </Text>
                </Stack>
              </SimpleGrid>
            </Stack>
          </Container>

          <FaqSection
            title="Questions fréquentes sur RestorFX"
            items={faq}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
