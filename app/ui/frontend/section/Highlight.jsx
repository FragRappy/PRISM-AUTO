import { Container, SimpleGrid, Text } from "@mantine/core";
import { IconCertificate, IconLeaf, IconThumbUp } from "@tabler/icons-react";
import classes from "./Highlight.module.css";

function Feature({ icon: Icon, title, description, className, ...others }) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={38} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconLeaf,
    title: "Des produits écologiques",
    description:
      "Tous nos forfaits utilisent des produits écologiques de haute qualité pour un lavage de voiture respectueux de l'environnement.",
  },
  {
    icon: IconCertificate,
    title: "Une Équipe certifiée",
    description:
      "Notre équipe est formée et certifiée pour garantir un service de lavage de voiture de qualité.",
  },
  {
    icon: IconThumbUp,
    title: "Votre satisfaction est notre priorité",
    description:
      "Nous nous engageons à offrir un service de lavage de voiture exceptionnel pour assurer votre satisfaction totale.",
  },
];

export function HighlightSection() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={70} mb={30} size="lg">
      <Text align="center" fz="xl" fw={700} mb={50}>
        Pourquoi choisir Prism Auto ?
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
