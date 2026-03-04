"use client";

import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import {
  IconCarCrash,
  IconCookie,
  IconGauge,
  IconPalette,
  IconTestPipe,
  IconUser,
} from "@tabler/icons-react";
import classes from "./Feature.module.css";

const mockdata = [
  {
    title: "RestorFX",
    description:
      "Texte à propos de RestorFX, ses avantages et ses caractéristiques uniques.",
    icon: IconGauge,
  },
  {
    title: "Restauration des phares",
    description:
      "Texte à propos de ClearFX, ses avantages et ses caractéristiques uniques.",
    icon: IconUser,
  },
  {
    title: "Restauration des plastiques",
    description:
      "Texte à propos de Number, ses avantages et ses caractéristiques uniques.",
    icon: IconCookie,
  },
  {
    title: "Retouche peinture",
    description:
      "Texte à propos de CleanFX, ses avantages et ses caractéristiques uniques.",
    icon: IconPalette,
  },
  {
    title: "protection céramique",
    description:
      "Texte à propos de paintFX, ses avantages et ses caractéristiques uniques.",
    icon: IconTestPipe,
  },
  {
    title: "Lavage et Nettoyage",
    description:
      "Texte à propos de shapeFX, ses avantages et ses caractéristiques uniques.",
    icon: IconCarCrash,
  },
];

export function FeaturesCard() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={50} stroke={1.5} className={classes.icon} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          L'innovation pour votre véhicule
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Texte à propos des fonctionnalités
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Texte long pour décrire les fonctionnalités et les avantages des
        produits ou services proposés. Cela peut inclure des informations sur la
        qualité, la durabilité, la performance, et d'autres aspects importants
        qui intéressent les clients potentiels.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
