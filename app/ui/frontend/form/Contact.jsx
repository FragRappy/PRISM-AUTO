"use client";

import { sendEmail } from "@/app/lib/actions";
import {
  Box,
  Button,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Textarea,
  rem,
} from "@mantine/core";
import { IconAt, IconMapPin, IconPhone, IconSun } from "@tabler/icons-react";
import { useFormState, useFormStatus } from "react-dom";
import classes from "./Contact.module.css";

function ContactIcon({ icon: Icon, title, description, ...others }) {
  return (
    <div className={classes.wrapper2} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title2}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const infos = [
  {
    title: "Email",
    description: "restorfxbourgenbresse@restorfx.com",
    icon: IconAt,
  },
  { title: "Téléphone", description: "04 XX XX XX XX", icon: IconPhone },
  {
    title: "Adresse",
    description: "623 chemin d'Éternaz 01000 Bourg-en-Bresse",
    icon: IconMapPin,
  },
  {
    title: "Horaires",
    description: "8h30 à 12h et de 13h à 18h du lundi au samedi",
    icon: IconSun,
  },
];

export function ContactIconsList() {
  const items = infos.map((info, index) => (
    <ContactIcon key={index} {...info} />
  ));
  return <Stack>{items}</Stack>;
}

export function Contact() {
  const [state, dispatch] = useFormState(sendEmail, undefined);
  return (
    <Paper radius="lg" maw="900px" mx="auto" my={40}>
      <div className={classes.wrapper}>
        <div
          className={classes.contacts}
          style={{ backgroundImage: `url(/contactBg.jpg)` }}
        >
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Informations
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} action={dispatch}>
          <Text fz="lg" fw={700} className={classes.title}>
            Formulaire de contact
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                label="Votre nom"
                name="name"
                placeholder="Prénom - Nom"
                required
              />
              <TextInput
                label="Votre email"
                name="email"
                placeholder="Votre email"
                required
              />
            </SimpleGrid>

            <TextInput
              mt="md"
              label="Sujet"
              name="subject"
              placeholder="Sujet"
              required
            />

            <Textarea
              mt="md"
              label="Votre message"
              name="message"
              placeholder="Votre message"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <SendEmailButton />
              {state &&
                (state.error ? (
                  <Text c="red" mt="md">
                    {state.error}
                  </Text>
                ) : (
                  <Text c="green" mt="md">
                    {state.message}
                  </Text>
                ))}
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
function SendEmailButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" mt="xl" aria-disabled={pending} disabled={pending}>
      Envoyer
    </Button>
  );
}
