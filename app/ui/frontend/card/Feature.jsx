"use client";

import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import {
  IconArrowRight,
  IconCarCrash,
  IconCookie,
  IconGauge,
  IconPalette,
  IconTestPipe,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import classes from "./Feature.module.css";

const mockdata = [
  {
    title: "RestorFX",
    description:
      "Texte à propos de RestorFX, ses avantages et ses caractéristiques uniques.",
    icon: IconGauge,
    href: "/prestation/restorfx",
  },
  {
    title: "Restauration des phares",
    description:
      "Texte à propos de ClearFX, ses avantages et ses caractéristiques uniques.",
    icon: IconUser,
    href: "/prestation/restauration-phares",
  },
  {
    title: "Restauration des plastiques",
    description:
      "Texte à propos de Number, ses avantages et ses caractéristiques uniques.",
    icon: IconCookie,
    href: "/prestation/restauration-plastiques",
  },
  {
    title: "Retouche peinture",
    description:
      "Texte à propos de CleanFX, ses avantages et ses caractéristiques uniques.",
    icon: IconPalette,
    href: "/prestation/retouche-peinture",
  },
  {
    title: "protection céramique",
    description:
      "Texte à propos de paintFX, ses avantages et ses caractéristiques uniques.",
    icon: IconTestPipe,
    href: "/prestation/protection-ceramique",
  },
  {
    title: "Lavage et Nettoyage",
    description:
      "Texte à propos de shapeFX, ses avantages et ses caractéristiques uniques.",
    icon: IconCarCrash,
    href: "/prestation/lavage-nettoyage",
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
      <Button
        component={Link}
        href={feature.href}
        variant="light"
        fullWidth
        mt="xl"
        radius="md"
        justify="space-between"
        rightSection={<IconArrowRight size={14} />}
        leftSection={<span />}
        className={classes.cta}
      >
        En savoir plus
      </Button>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg" className={classes.badge}>
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
