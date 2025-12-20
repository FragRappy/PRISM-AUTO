"use client";

import {
  ActionIcon,
  Burger,
  Container,
  Drawer,
  Group,
  Pill,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMoon, IconSun } from "@tabler/icons-react";
import cx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoCompany } from "../logo/Company";
import classes from "./Header.module.css";

const links = [
  { href: "/restorfx", label: "RestorFX" },
  { href: "/nettoyage", label: "Nettoyage" },
  { href: "/contact", label: "Nous contacter" },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const pathname = usePathname();

  const items = links.map((link) => (
    <Text
      component={Link}
      key={link.label}
      href={link.href}
      className={classes.link}
      data-active={pathname === link.href || undefined}
      scroll={false}
    >
      {link.label}
    </Text>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <LogoCompany />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Drawer
          opened={opened}
          onClose={close}
          withCloseButton={false}
          position="bottom"
          radius={20}
          size="40%"
          zIndex={1000000}
          aria-label="Menu de navigation mobile"
        >
          <Pill w={150} h={4} mx="auto" display={"block"} bg={"darkgray"} />

          <Group style={{ flexDirection: "column" }} mt={70}>
            {items}
          </Group>
        </Drawer>
        <Group>
          <ActionIcon
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
            variant="default"
            size="lg"
            aria-label="Basculement entre le thème clair et le thème sombre"
          >
            <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
          </ActionIcon>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="md" />
        </Group>
      </Container>
    </header>
  );
}
