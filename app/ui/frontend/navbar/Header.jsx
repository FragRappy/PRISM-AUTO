"use client";

import {
  ActionIcon,
  AspectRatio,
  Burger,
  Container,
  Drawer,
  Group,
  Image,
  Overlay,
  Paper,
  Pill,
  Popover,
  SimpleGrid,
  Stack,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconMoon, IconSun } from "@tabler/icons-react";
import cx from "clsx";
import NextImage from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Cleanfx from "../../../../public/cleanfx.png";
import Clearfx from "../../../../public/clearfx.jpg";
import Headlight from "../../../../public/headlightfx.jpg";
import Leatherfx from "../../../../public/leatherfx.jpg";
import Paintfx from "../../../../public/paintfx.jpg";
import Restorfx from "../../../../public/restorfx.jpg";
import Trimfx from "../../../../public/trimfx.jpg";
import { LogoCompany } from "../logo/Company";
import classes from "./Header.module.css";

const links = [
  {
    href: "/services",
    label: "Nos services",
    icon: IconChevronDown,
    sublinks: [
      {
        active: true,
        href: "/services/restorfx",
        label: "Restauration du vernis",
        img: Restorfx,
      },
      {
        active: true,
        href: "/services/headlightfx",
        label: "Restauration des phares",
        img: Headlight,
      },
      {
        active: true,
        href: "/services/trimfx",
        label: "Restauration des plastiques",
        img: Trimfx,
      },
      {
        active: true,
        href: "/services/leatherfx",
        label: "Restauration des cuirs",
        img: Leatherfx,
      },
      {
        active: true,
        href: "/services/paintfx",
        label: "Retouche peinture",
        img: Paintfx,
      },
      {
        active: true,
        href: "/services/clearfx",
        label: "Protection céramique",
        img: Clearfx,
      },
      {
        active: true,
        href: "/services/cleanfx",
        label: "Lavage et Nettoyage",
        img: Cleanfx,
      },
    ],
  },
  { href: "/contact", label: "Nous contacter" },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [servicesOpen, { toggle: toggleServices }] = useDisclosure(false);
  const [servicesPopoverOpen, setServicesPopoverOpen] = useState(false);
  const { setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const pathname = usePathname();

  const scrollStartY = useRef(0);

  useEffect(() => {
    if (!servicesPopoverOpen) return;

    scrollStartY.current = window.scrollY;

    const onScroll = () => {
      const delta = Math.abs(window.scrollY - scrollStartY.current);

      if (delta >= 70) {
        setServicesPopoverOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [servicesPopoverOpen]);

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <LogoCompany />

        <Group gap={5} visibleFrom="xs">
          {links.map((link) =>
            link.sublinks ? (
              <Popover
                key={link.label}
                position="bottom"
                shadow="xs"
                offset={{ mainAxis: 40, crossAxis: 0 }}
                zIndex={1001}
                className={classes.popover}
                opened={servicesPopoverOpen}
                onChange={setServicesPopoverOpen}
                transitionProps={{ transition: "scale-y", duration: 220 }}
              >
                <Popover.Target
                  onClick={() => setServicesPopoverOpen((o) => !o)}
                >
                  <Group align="center" gap={0}>
                    <Text
                      className={classes.link}
                      data-active={servicesPopoverOpen ? true : undefined}
                    >
                      {link.label} {servicesPopoverOpen ? "⏶" : "⏷"}
                    </Text>
                  </Group>
                </Popover.Target>
                <Popover.Dropdown p="md" maw={"95%"}>
                  <SimpleGrid cols={2} spacing="xs" maw={1000}>
                    {link.sublinks.map((sub) => (
                      <Paper
                        component={Link}
                        key={sub.label}
                        href={sub.href}
                        withBorder
                        radius="md"
                        className={classes.card}
                        miw={300}
                      >
                        <AspectRatio className={classes.imageWrapper}>
                          <Image
                            component={NextImage}
                            src={sub.img}
                            alt={sub.label}
                            fill
                            style={{
                              objectFit: "cover",
                            }}
                          />
                          <Overlay className={classes.overlay} />
                        </AspectRatio>

                        <div className={classes.content}>
                          <Text fw={500} size="md">
                            {sub.label}
                          </Text>
                        </div>
                      </Paper>
                    ))}
                  </SimpleGrid>
                </Popover.Dropdown>
              </Popover>
            ) : (
              <Text
                key={link.label}
                component={Link}
                href={link.href}
                className={classes.link}
                data-active={pathname === link.href || undefined}
                scroll={false}
              >
                {link.label}
              </Text>
            )
          )}
        </Group>

        <Drawer
          opened={opened}
          onClose={close}
          withCloseButton={false}
          position="bottom"
          size="50%"
          zIndex={10000}
          aria-label="Menu de navigation mobile"
          styles={{
            content: {
              borderTopLeftRadius: "var(--mantine-radius-lg)",
              borderTopRightRadius: "var(--mantine-radius-lg)",
            },
          }}
        >
          <Pill w={150} h={4} mx="auto" display={"block"} bg={"darkgray"} />

          <Stack mt={70} spacing="sm">
            {links.map((link) =>
              link.sublinks ? (
                <div key={link.label}>
                  <Text
                    component="button"
                    className={classes.link}
                    onClick={toggleServices}
                    style={{ width: "100%", textAlign: "left" }}
                  >
                    {link.label}
                  </Text>
                  {servicesOpen && (
                    <Stack pl="md" spacing="xs">
                      {link.sublinks.map((sub) => (
                        <Text
                          key={sub.label}
                          component={Link}
                          href={sub.href}
                          className={classes.link}
                        >
                          {sub.label}
                        </Text>
                      ))}
                    </Stack>
                  )}
                </div>
              ) : (
                <Text
                  key={link.label}
                  component={Link}
                  href={link.href}
                  className={classes.link}
                >
                  {link.label}
                </Text>
              )
            )}
          </Stack>
        </Drawer>

        {/* Actions */}
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
