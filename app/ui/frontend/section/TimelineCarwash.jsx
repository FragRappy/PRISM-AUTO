"use client";

import { Text, Timeline } from "@mantine/core";

export function TimelineCarwashSection() {
  return (
    <Timeline active={5} bulletSize={24} lineWidth={2} mt={30} mb={30}>
      <Timeline.Item bullet="1" title="Prise de rendez-vous">
        <Text c="dimmed" fz="sm">
          Choisissez la date et l'heure qui vous conviennent pour le lavage de
          votre voiture.
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet="2"
        title="Préparation de votre voiture"
        mt="xs"
        align="right"
      >
        <Text c="dimmed" fz="sm">
          Nous préparons votre voiture en la protégeant et en la nettoyant
          rapidement pour garantir un lavage de qualité.
        </Text>
      </Timeline.Item>
      <Timeline.Item bullet="3" title="Lavage extérieur">
        <Text c="dimmed" fz="sm">
          Nous lavons soigneusement l'extérieur de votre voiture en utilisant
          des produits écologiques pour un résultat impeccable.
        </Text>
      </Timeline.Item>
      <Timeline.Item bullet="4" title="Nettoyage intérieur" mt="xs">
        <Text c="dimmed" fz="sm">
          Nous nettoyons l'intérieur de votre voiture en aspirant les sièges,
          les tapis et en nettoyant les surfaces pour un intérieur frais et
          propre.
        </Text>
      </Timeline.Item>
      <Timeline.Item bullet="5" title="Finition et contrôle qualité">
        <Text c="dimmed" fz="sm">
          Nous effectuons une finition minutieuse et un contrôle qualité pour
          nous assurer que votre voiture est parfaitement propre et brillante.
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
