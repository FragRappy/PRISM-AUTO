"use client";

import { Button, Container, Group, Text, Title } from "@mantine/core";
import Link from "next/link";
import classes from "./not-found.module.css";
import { Footer } from "./ui/frontend/navbar/Footer";
import { Header } from "./ui/frontend/navbar/Header";
import { Background } from "./ui/frontend/notfound/background";

export default function NotFound() {
  return (
    <>
      <Header />
      <Container className={classes.root}>
        <div className={classes.inner}>
          <Background className={classes.image} />
          <div className={classes.content}>
            <Title className={classes.title}>
              Oops, cette page est introuvable.
            </Title>
            <Text
              c="dimmed"
              size="lg"
              ta="center"
              className={classes.description}
            >
              La page que vous tentez d'afficher n'exite pas ou une autre erreur
              s'est produite. Veuillez essayer de nouveau ou revenir à la page
              d'accueil.
            </Text>
            <Group justify="center">
              <Button
                component={Link}
                href={"/"}
                size="md"
                className={classes.cta}
              >
                Revenir à la page d'accueil
              </Button>
            </Group>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
