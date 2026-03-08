"use client";

import { AreaChart } from "@mantine/charts";
import {
  Badge,
  Box,
  Container,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconDroplet, IconLeaf, IconWind } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function EcoSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [mounted, setMounted] = useState(false);

  // Le chart ne sera rendu qu'après que le DOM est prêt
  useEffect(() => {
    setMounted(true);
  }, []);

  // On attend le DOM pour mesurer correctement
  if (!mounted) return null;

  const data = [
    { methode: "Prism Auto", eau: 8 },
    {
      methode: isMobile ? "Haute pression" : "Nettoyeur haute pression",
      eau: 100,
    },
    { methode: isMobile ? "Tunnel" : "Tunnel de lavage", eau: 150 },
  ];

  return (
    <Container mt={40}>
      <Text size="xl" align="center" td="underline" fz="xl" fw={700} mb={50}>
        En quoi nos lavages et nettoyages sont-ils écologiques ?
      </Text>
      <Box gap={70}>
        <Stack align="center" ta="center" maw={720} mx="auto">
          <Badge size="lg" variant="light" color="green">
            Jusqu'à 90% d'eau économisée
          </Badge>

          <Text order={2} size="lg">
            Nous utilisons principalement une{" "}
            <b>machine vapeur professionnelle</b> qui permet de nettoyer,
            dégraisser et désinfecter un véhicule tout en utilisant très peu
            d’eau.
          </Text>

          <Text order={2} size="lg">
            Un nettoyage complet peut être réalisé avec{" "}
            <b>moins de 10 litres d’eau</b>, contre plus de 100 litres pour un
            nettoyage classique au nettoyeur haute pression.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={40} mb={40}>
          <Paper p="xl" radius="lg" withBorder shadow="sm">
            <ThemeIcon size={50} radius="xl" color="blue" mb="md">
              <IconDroplet size={26} />
            </ThemeIcon>

            <Title order={3}>≈ 8L</Title>

            <Text c="dimmed">
              Consommation moyenne d’eau pour nettoyer un véhicule avec la
              méthode Prism Auto.
            </Text>
          </Paper>

          <Paper p="xl" radius="lg" withBorder shadow="sm">
            <ThemeIcon size={50} radius="xl" color="green" mb="md">
              <IconLeaf size={26} />
            </ThemeIcon>

            <Title order={3}>90%</Title>

            <Text c="dimmed">
              d’eau économisée par rapport aux méthodes de lavage
              traditionnelles.
            </Text>
          </Paper>

          <Paper p="xl" radius="lg" withBorder shadow="sm">
            <ThemeIcon size={50} radius="xl" color="indigo" mb="md">
              <IconWind size={26} />
            </ThemeIcon>

            <Title order={3}>Vapeur</Title>

            <Text c="dimmed">
              La vapeur permet de nettoyer efficacement les surfaces tout en
              limitant l’utilisation d’eau et de produits chimiques.
            </Text>
          </Paper>
        </SimpleGrid>

        {/* CHART */}
        <Stack gap="md" miw={0}>
          <Title order={3} ta="center">
            Comparaison de la consommation d’eau
          </Title>
          <Box w="100%" h={isMobile ? 260 : 320} miw={0}>
            <AreaChart
              key={mounted ? "chart-mounted" : "chart-loading"}
              yAxisProps={{ domain: [0, 170] }}
              xAxisProps={{
                padding: {
                  left: isMobile ? 10 : 50,
                  right: isMobile ? 10 : 50,
                },
              }}
              w="100%"
              h="100%"
              data={data}
              dataKey="methode"
              withTooltip={false}
              curveType="natural"
              series={[
                {
                  name: "eau",
                  label: "Consommation d'eau",
                  color: "var(--chart-color)",
                },
              ]}
              valueFormatter={(value) => `${value} L`}
              areaProps={{
                label: (props) => {
                  const { x, y, value } = props;
                  return (
                    <text
                      x={x}
                      y={y - 12}
                      textAnchor="middle"
                      fontSize={isMobile ? 10 : 14}
                      fill="currentColor"
                    >
                      {value} L
                    </text>
                  );
                },
              }}
              style={{
                "--chart-color":
                  "light-dark(var(--mantine-color-blue-filled), var(--mantine-color-yellow-5))",
                minWidth: 0,
                minHeight: 0,
              }}
            />
          </Box>
          <Text size="xs" ta="center" c="dimmed">
            Grâce au nettoyage vapeur, Prism Auto utilise beaucoup moins d’eau
            qu’un lavage automobile traditionnel tout en garantissant un
            résultat professionnel.
          </Text>
        </Stack>
      </Box>
    </Container>
  );
}
