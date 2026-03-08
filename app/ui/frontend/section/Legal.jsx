"use client";

import { Anchor, Container, Divider, Stack, Text, Title } from "@mantine/core";

export function LegalSection() {
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={1}>Mentions légales</Title>

        <Text>
          Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004
          pour la confiance dans l’économie numérique (LCEN), il est porté à la
          connaissance des utilisateurs du site les présentes mentions légales.
        </Text>

        <Divider />

        <Title order={2}>Éditeur du site</Title>
        <Stack gap={2}>
          <Text fw={500}>Prism Auto</Text>
          <Text>SAS au capital de 1 000 €</Text>
          <Text>RCS Bourg-en-Bresse : 995 284 015</Text>
          <Text>SIRET : 995 284 015 00014</Text>
          <Text>TVA intracommunautaire : FR94995284015</Text>
        </Stack>
        <Stack gap={2}>
          <Text fw={500}>Siège social :</Text>
          <Text>1852 avenue de Trévoux</Text>
          <Text>01000 Saint-Denis-lès-Bourg</Text>
          <Text>France</Text>
        </Stack>
        <Stack gap={0}>
          <Text fw={500}>Contact :</Text>
          <Text>
            Email :{" "}
            <Anchor href="mailto:contact@prismauto.fr">
              contact@prismauto.fr
            </Anchor>
          </Text>
          <Text>
            Téléphone : <Anchor href="tel:0458283385">04 58 28 33 85</Anchor>
          </Text>
        </Stack>

        <Divider />

        <Title order={2}>Directeur de la publication</Title>
        <Text>
          Le Directeur de la publication est Charles-Édouard BRETON, en sa
          qualité de représentant légal.
        </Text>

        <Divider />

        <Title order={2}>Hébergement</Title>
        <Stack gap={1}>
          <Text>Le site est hébergé par :</Text>
          <Text fw={500}>Vercel Inc.</Text>
          <Text>340 S Lemon Ave #4133</Text>
          <Text>Walnut, CA 91789</Text>
          <Text>États-Unis</Text>
          <Text>
            <Anchor
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com
            </Anchor>
          </Text>
        </Stack>

        <Divider />

        <Title order={2}>Propriété intellectuelle</Title>
        <Text>
          L’ensemble des contenus présents sur le site (textes, images,
          graphismes, logos, icônes, etc.) est la propriété exclusive de Prism
          Auto et de{" "}
          <Anchor
            href="https://restorfxfrance.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RestorFX France
          </Anchor>
          , sauf mention contraire.
        </Text>
        <Text>
          Toute reproduction, représentation, modification, publication ou
          adaptation, totale ou partielle, de ces éléments, quel que soit le
          moyen ou le procédé utilisé, est interdite sans l’autorisation écrite
          préalable de Prism Auto ou de RestorFX.
        </Text>
        <Text>
          Le non-respect de ces règles peut engager la responsabilité de
          l’Internaute au sens des articles L. 713-2 et L.713-3 du Code de la
          Propriété Intellectuelle.
        </Text>

        <Divider />

        <Title order={2}>Responsabilité</Title>
        <Text>
          Prism Auto s’efforce de fournir sur le site des informations aussi
          précises que possible. Toutefois, Prism Auto ne saurait être tenue
          responsable des omissions, inexactitudes ou carences dans la mise à
          jour.
        </Text>

        <Divider />

        <Title order={2}>Données personnelles</Title>
        <Text>
          Conformément au Règlement Général sur la Protection des Données
          (RGPD), aucune information personnelle n’est enregistrée ou traitée.
        </Text>

        <Divider />

        <Title order={2}>Liens hypertexte vers des sites tiers</Title>
        <Text>
          Ce site propose des liens hypertextes pointant vers des sites Internet
          édités par des tiers. Ces liens sont établis de bonne foi et la
          société Prism Auto ne peut être tenue pour responsable de
          modifications intervenues sur ces sites. Par conséquent, ces liens
          hypertextes ne sauraient, en aucun cas, engager la responsabilité de
          la société Prism Auto. Il est précisé que les utilisateurs du site
          sont invités à consulter les conditions d’utilisation et les
          politiques de confidentialité de ces sites tiers avant de les
          utiliser.
        </Text>

        <Divider />

        <Title order={2}>Droit applicable</Title>
        <Text>
          Ce site ainsi que les présentes mentions légales sont soumis au droit
          français
        </Text>
      </Stack>
    </Container>
  );
}
