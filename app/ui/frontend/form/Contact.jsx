"use client";

import { sendEmail } from "@/lib/actions";
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
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
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
    description: "contact@prismauto.fr",
    icon: IconAt,
  },
  { title: "Téléphone", description: "04 58 28 33 85", icon: IconPhone },
  {
    title: "Adresse",
    description: "1852 av de trévoux 01000 St denis les bourg",
    icon: IconMapPin,
  },
  {
    title: "Horaires",
    description: "8h30 à 12h et de 13h à 17h30 du lundi au vendredi",
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
  const [state, dispatch] = useActionState(sendEmail, undefined);
  return (
    <Paper radius="lg" maw="900px" mx="auto" my={40}>
      <div className={classes.wrapper}>
        <div
          className={classes.contacts}
          style={{
            backgroundColor: "#000001",
            backgroundImage: `url(/contactBg.svg)`,
          }}
        >
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Informations
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} action={dispatch}>
          {/* Honeypot anti-bot */}
          <input
            type="text"
            name="company"
            autoComplete="off"
            tabIndex="-1"
            style={{
              position: "absolute",
              left: "-9999px",
            }}
          />
          <input type="hidden" name="formTime" value={Date.now()} />
          <Text fz="lg" fw={700} className={classes.title}>
            Formulaire de contact
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                label="Nom - Prénom"
                name="name"
                placeholder="Nom - Prénom "
                required
              />
              <TextInput
                label="Email"
                name="email"
                placeholder="Votre email"
                required
              />
            </SimpleGrid>

            <TextInput
              mt="md"
              label="Objet"
              name="subject"
              placeholder="Objet de votre message"
              required
            />

            <Textarea
              mt="md"
              label="Message"
              name="message"
              placeholder="Votre message"
              minRows={3}
              required
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
