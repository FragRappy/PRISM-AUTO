import { FaqSection } from "@/app/ui/frontend/section/Faq";
import { Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { Footer } from "../../ui/frontend/navbar/Footer";
import { Header } from "../../ui/frontend/navbar/Header";

export const metadata = { title: "Restauration des plastiques" };

const faq = [
  {
    question: "Quels éléments plastiques peuvent être restaurés ?",
    answer: "Pare-chocs, baguettes de protection, montants de portes, garnitures de bas de caisse, rétroviseurs — tous les éléments plastiques extérieurs grisés ou décolorés sont éligibles au traitement.",
  },
  {
    question: "Le résultat est-il durable ?",
    answer: "Oui. Le traitement re-teinte et stabilise la couleur en profondeur. Il ne s'agit pas d'un simple graissage de surface qui disparaît au premier lavage, mais d'une restauration qui tient dans la durée.",
  },
  {
    question: "Peut-on traiter des plastiques très dégradés ?",
    answer: "Dans la plupart des cas, oui. Même des plastiques fortement blanchis ou abîmés par les UV peuvent retrouver un aspect proche du neuf. Lors de votre prise en charge, nous évaluons l'état des pièces et vous informons des résultats attendus.",
  },
  {
    question: "Faut-il démonter les éléments pour les traiter ?",
    answer: "Non, le traitement se réalise directement sur le véhicule, sans dépose des pièces. L'intervention est rapide et le véhicule vous est rendu le jour même.",
  },
  {
    question: "Peut-on traiter les plastiques intérieurs ?",
    answer: "Notre prestation restauration plastiques concerne principalement les éléments extérieurs. Pour les plastiques intérieurs (tableau de bord, garnitures), nous proposons un entretien intérieur dans le cadre de nos prestations de lavage.",
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
                Restauration des plastiques extérieurs
              </Title>
              <Text c="dimmed" ta="center" fz="md" lh={1.8} maw={640} mx="auto">
                Pare-chocs grisés, baguettes décolorées, garnitures blanchies par les UV —
                nous redonnons aux plastiques extérieurs de votre véhicule leur teinte
                et leur éclat d'origine.
              </Text>

              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" mt="xl">
                <Stack gap="sm">
                  <Text fw={600}>Re-teinture en profondeur</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Contrairement aux produits de brillance classiques qui se contentent
                    de graisser la surface, notre traitement FX Trim pénètre en profondeur
                    dans la matière pour restaurer la teinte et la densité visuelle des
                    éléments plastiques extérieurs.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Protection contre les UV</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Le vieillissement des plastiques est principalement dû aux rayonnements
                    ultraviolets. Notre traitement intègre des agents protecteurs qui
                    ralentissent ce processus et préservent la couleur restaurée sur
                    la durée.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Tous les éléments extérieurs traités</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Pare-chocs avant et arrière, baguettes latérales, montants de portes,
                    bas de caisse, rétroviseurs, passages de roues — tous les éléments
                    plastiques accessibles sont traités en une seule intervention, sans
                    dépose de pièces.
                  </Text>
                </Stack>
                <Stack gap="sm">
                  <Text fw={600}>Résultat immédiat et durable</Text>
                  <Text c="dimmed" fz="sm" lh={1.8}>
                    Le résultat est visible dès la fin de l'intervention. La teinte est
                    homogène, profonde et résistante aux lavages. Une valorisation
                    immédiate de l'aspect extérieur de votre véhicule, à une fraction
                    du coût d'un remplacement de pièces.
                  </Text>
                </Stack>
              </SimpleGrid>
            </Stack>
          </Container>

          <FaqSection
            title="Questions fréquentes sur la restauration des plastiques"
            items={faq}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
