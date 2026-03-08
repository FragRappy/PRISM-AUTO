"use client";

import { Carousel } from "@mantine/carousel";
import { Button, Paper, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconArrowRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useRef } from "react";
import ClearFXimg from "../../../../public/images/clearfx-hero.jpg";
import EntretienImg from "../../../../public/images/entretien.webp";
import RestorFXimg from "../../../../public/images/restorfx-hero.jpg";
import VapeurImg from "../../../../public/images/vapeur.png";
import classes from "./Hero.module.css";

const data = [
  {
    image: VapeurImg,
    title: "Lavage et nettoyage écologique",
    category: "Lavage et Nettoyage  auto",
    href: "/prestation/lavage-nettoyage",
  },
  {
    image: RestorFXimg,
    title: "Restauration du vernis sans peinture",
    category: "RestorFX",
    href: "/prestation/restorfx",
  },
  {
    image: ClearFXimg,
    title: "Une protection adaptée à votre auto",
    category: "Protection auto",
    href: "/prestation/protection-ceramique",
  },
  {
    image: EntretienImg,
    title: "Une gamme d'entretien professionnel",
    category: "Entretien auto",
    href: "/prestation/restauration-plastiques",
  },
];

function Card({ image, title, category, href }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      style={{ backgroundImage: `url(${image.src})` }}
      className={classes.card}
    >
      <div className={classes.background}>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button
        component={Link}
        href={href}
        variant="filled"
        mt="xl"
        radius="md"
        size="md"
        justify="space-between"
        rightSection={<IconArrowRight size={14} />}
        leftSection={<span />}
        className={classes.cta}
      >
        En savoir plus
      </Button>
    </Paper>
  );
}

export function HeroCarousel() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      classNames={{
        root: classes.carousel,
        control: classes.control,
      }}
      nextControlIcon={<IconChevronRight size={16} />}
      previousControlIcon={<IconChevronLeft size={16} />}
      plugins={[autoplay.current]}
      slideSize={{ base: "100%" }}
      slideGap={{ base: "xl", sm: 2 }}
      emblaOptions={{ loop: true, align: "center", slidesToScroll: 1 }}
      controlSize={isMobile ? 40 : 50}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      {slides}
    </Carousel>
  );
}
