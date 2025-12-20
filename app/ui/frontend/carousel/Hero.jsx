import { Carousel } from "@mantine/carousel";
import { Button, Paper, Text, Title } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import ClearFXimg from "../../../../public/clearfx-hero.jpg";
import Numberimg from "../../../../public/number-hero.png";
import RestorFXimg from "../../../../public/restorfx-hero.jpg";
import classes from "./Hero.module.css";

const data = [
  {
    image: RestorFXimg,
    title: "Texte à propos de RestorFX",
    category: "restorfx",
  },
  {
    image: ClearFXimg,
    title: "Texte à propos de ClearFX",
    category: "restorfx",
  },
  {
    image: Numberimg,
    title: "Texte à propos de Number",
    category: "restorfx",
  },
];

function Card({ image, title, category }) {
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
      <Button variant="white" color="dark" size="lg">
        En savoir plus
      </Button>
    </Paper>
  );
}

export function HeroCarousel() {
  const autoplay = useRef(Autoplay({ delay: 10000 }));
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      plugins={[autoplay.current]}
      slideSize={{ base: "100%" }}
      slideGap={{ base: "xl", sm: 2 }}
      emblaOptions={{ align: "center", slidesToScroll: 1 }}
    >
      {slides}
    </Carousel>
  );
}
