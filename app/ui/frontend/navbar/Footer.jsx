"use client";

import { ActionIcon, Group, Text } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";
import Link from "next/link";
import { LogoCompany } from "../logo/Company";
import { MapWithPopup } from "../map/Store";
import classes from "./Footer.module.css";

const links = [{ link: "mentions-legales", label: "Mentions légales" }];

export function Footer() {
  const items = links.map((link) => (
    <Text
      c="dimmed"
      component={Link}
      key={link.label}
      href={link.link}
      lh={1}
      size="sm"
    >
      {link.label}
    </Text>
  ));

  return (
    <footer>
      <MapWithPopup />
      <div className={classes.inner}>
        <Group className={classes.logo} gap={20}>
          <LogoCompany prismsize={60} restorfxsize={10} />
          <Text className={classes.dev} c="dimmed" size="xs">
            Développé avec 💜 par Prism Auto
          </Text>
        </Group>

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <Text
            variant="gradient"
            gradient={{
              from: "rgba(113, 236, 251)",
              to: "rgba(207, 75, 254)",
              deg: 90,
            }}
            size="sm"
          >
            Suivez-nous
          </Text>
          <ActionIcon
            component={Link}
            href="https://www.facebook.com/prismauto"
            target="_blank"
            size="lg"
            variant="default"
            radius="xl"
            aria-label="Ouvre dans une nouvelle page la page facebook de prism auto"
            className={classes.socialIcon}
          >
            <IconBrandFacebook size={25} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component={Link}
            href="test"
            size="lg"
            variant="default"
            radius="xl"
            aria-label="Ouvre dans une nouvelle page la page instagram de prism auto"
            className={classes.socialIcon}
          >
            <IconBrandInstagram size={25} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component={Link}
            href="test"
            size="lg"
            variant="default"
            radius="xl"
            aria-label="Ouvre dans une nouvelle page la page tiktok de prism auto"
            className={classes.socialIcon}
          >
            <IconBrandTiktok size={25} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </footer>
  );
}
