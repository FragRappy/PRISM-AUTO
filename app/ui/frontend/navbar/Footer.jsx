"use client";

import { ActionIcon, Group, Text, useComputedColorScheme } from "@mantine/core";
import { IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";
import Link from "next/link";
import LogoDark from "../../../../public/logo-dark.svg";
import LogoLight from "../../../../public/logo-light.svg";
import RestorFXDark from "../../../../public/restorfx-dark.svg";
import RestorFXLight from "../../../../public/restorfx-light.svg";
import dynamic from "next/dynamic";
import { LogoCompany } from "../logo/Company";
import classes from "./Footer.module.css";

// ssr: false évite le crash de Leaflet qui accède à window au niveau module
const MapWithPopup = dynamic(
  () => import("../map/Store").then((m) => m.MapWithPopup),
  { ssr: false },
);

const links = [{ link: "/mentions-legales", label: "Mentions légales" }];

// SVG imports can be a string URL or a StaticImageData object depending on Next.js version
const toSrc = (logo) => (typeof logo === "string" ? logo : logo.src);

const PAIRS = 8; // pairs per group — 8 × ~520px ≈ 4160px, covers 4K screens

function BannerGroup({ prismSrc, restorfxSrc }) {
  return (
    <div className={classes.bannerGroup}>
      {Array.from({ length: PAIRS }, (_, i) => (
        <div key={i} className={classes.bannerPair}>
          <img src={prismSrc}    alt="Prism Auto" width={40}  height={40}  className={classes.bannerImg} />
          <span className={classes.bannerSep} aria-hidden />
          <img src={restorfxSrc} alt="RestorFX"   width={110} height={24}  className={classes.bannerImg} style={{ objectFit: "contain" }} />
        </div>
      ))}
    </div>
  );
}

export function Footer() {
  const scheme      = useComputedColorScheme("light");
  const prismSrc    = scheme === "dark" ? toSrc(LogoDark)     : toSrc(LogoLight);
  const restorfxSrc = scheme === "dark" ? toSrc(RestorFXDark) : toSrc(RestorFXLight);

  const items = links.map((link) => (
    <Text c="dimmed" component={Link} key={link.label} href={link.link} lh={1} size="sm">
      {link.label}
    </Text>
  ));

  return (
    <>
      {/*
        Technique : le bannerTrack (display: inline-flex) contient deux BannerGroup identiques.
        Sa largeur CSS = 2 × largeur d'un groupe.
        translateX(-50%) déplace exactement un groupe vers la gauche.
        Au reset (0 → -50% boucle), le contenu est identique → aucune coupure visible.
      */}
      <div className={classes.bannerWrapper}>
        <div className={classes.bannerTrack}>
          <BannerGroup prismSrc={prismSrc} restorfxSrc={restorfxSrc} />
          <BannerGroup prismSrc={prismSrc} restorfxSrc={restorfxSrc} aria-hidden />
        </div>
      </div>

      <footer className={classes.footer}>
        <MapWithPopup />
        <div className={classes.inner}>
          <Group className={classes.logo} gap={20}>
            <LogoCompany prismsize={60} restorfxsize={20} />
            <Text className={classes.dev} c="dimmed" size="xs">
              Développé avec 💜 par Prism Auto
            </Text>
          </Group>

          <Group className={classes.links}>{items}</Group>

          <Group gap="xs" justify="flex-end" wrap="nowrap">
            <Text
              variant="gradient"
              gradient={{ from: "rgba(113, 236, 251)", to: "rgba(207, 75, 254)", deg: 90 }}
              size="sm"
            >
              Suivez-nous
            </Text>
            <ActionIcon
              component={Link}
              href="/"
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
              href="/"
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
    </>
  );
}
