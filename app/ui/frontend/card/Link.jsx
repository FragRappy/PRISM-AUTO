import { Card, Image } from "@mantine/core";
import NextImage from "next/image";

export function LinksCard({ active, href, label, img }) {
  return (
    <Card>
      <Card.Section>
        <Image
          component={NextImage}
          src={img}
          alt={label}
          height={120}
          fit="cover"
        />
      </Card.Section>
    </Card>
  );
}
