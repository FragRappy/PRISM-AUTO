"use client";

import {
  Badge,
  Center,
  Checkbox,
  Container,
  Indicator,
  Paper,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { useState } from "react";
import classes from "./Price.module.css";

// ─── Defaults lavage ────────────────────────────────────────────────────────

const DEFAULT_VEHICLE_MULTIPLIER = {
  citadine: 1,
  berline: 1.2,
  suv: 1.4,
  utilitaire: 1.6,
};

const DEFAULT_BASE_PRICES = {
  interior: { express: 39, diamond: 69 },
  exterior: { express: 49, diamond: 69 },
};

const DEFAULT_DURATION_MAP = {
  interior: { express: [30, 60], diamond: [120, 180] },
  exterior: { express: [30, 60], diamond: [120, 180] },
};

const DEFAULT_PRESTATIONS = [
  { name: "Aspiration des moquettes, tapis et coffre", type: "interior", includedIn: ["express", "diamond"] },
  { name: "Nettoyage des plastiques", type: "interior", includedIn: ["express", "diamond"] },
  { name: "Nettoyage des vitres intérieures", type: "interior", includedIn: ["express", "diamond"] },
  { name: "Pressing des sièges, moquettes et tapis", type: "interior", includedIn: ["diamond"] },
  { name: "Parfum d'ambiance", type: "interior", includedIn: ["diamond"] },
  { name: "Nettoyage des garnitures, seuils et joints", type: "interior", includedIn: ["diamond"] },
  { name: "Désinfection des conduits d'aération", type: "interior", includedIn: ["diamond"] },
  { name: "Lavage de la carrosserie", type: "exterior", includedIn: ["express", "diamond"] },
  { name: "Séchage de la carrosserie", type: "exterior", includedIn: ["express", "diamond"] },
  { name: "Nettoyage des vitres extérieures", type: "exterior", includedIn: ["express", "diamond"] },
  { name: "Nettoyage des jantes et passages de roues", type: "exterior", includedIn: ["diamond"] },
  { name: "Cire de finition et brillant pneus", type: "exterior", includedIn: ["diamond"] },
  { name: "Lavage du compartiment moteur", type: "exterior", optional: true, price: 20 },
  { name: "Décontamination résine / sève / moustique", type: "exterior", optional: true, price: 25 },
  { name: "Pressing du ciel de toit", type: "interior", optional: true, price: 30 },
  { name: "Traitement anti-odeurs par ozone (tabac, animaux...)", type: "interior", optional: true, price: 20 },
];

// ─── Exemples véhicule ───────────────────────────────────────────────────────

const EXEMPLES_VEHICULE = {
  citadine: "Peugeot 208, Renault Clio, Fiat 500...",
  berline: "Audi A3, Volkswagen Golf, Mercedes Classe C...",
  suv: "Peugeot 2008, Audi A6 allroad, Porsche 911...",
  utilitaire: "Renault Kangoo, Citroën Jumper, Fiat Ducato...",
};

// ─── Composant ──────────────────────────────────────────────────────────────

/**
 * variant="lavage"  → tableau intérieur/extérieur avec express/diamant et options
 * variant="forfait" → tableau au forfait par formule (ex: face avant / véhicule complet)
 *
 * Props forfait :
 *   packs              [{ label, value, popular? }]
 *   prices             { citadine: { packValue: prix }, berline: ..., suv: ..., utilitaire: ... }
 *   forfaitPrestations [{ name, includedIn?: [packValue] }]  — omit includedIn = inclus partout
 */
export function PriceSection({
  title = "Lavage et nettoyage automobile : Nos tarifs",
  subtitle = "Découvrez nos prestations pour tous types de véhicules et forfaits adaptés à vos besoins",
  variant = "lavage",

  // lavage
  vehicleMultiplier = DEFAULT_VEHICLE_MULTIPLIER,
  basePrices = DEFAULT_BASE_PRICES,
  durationMap = DEFAULT_DURATION_MAP,
  prestations = DEFAULT_PRESTATIONS,

  // forfait
  packs = [],
  prices = {},
}) {
  const [valueVehicule, setValueVehicule] = useState("citadine");
  const [valuePresta, setValuePresta] = useState("interior");
  const [options, setOptions] = useState({ express: [], diamond: [] });

  const isMobile = useMediaQuery("(max-width: 768px)");

  // ── Helpers lavage ──────────────────────────────────────────────────────

  const formatDuration = (type, pack) => {
    let min, max;
    if (type === "both") {
      min = durationMap.interior[pack][0] + durationMap.exterior[pack][0];
      max = durationMap.interior[pack][1] + durationMap.exterior[pack][1];
    } else {
      [min, max] = durationMap[type][pack];
    }
    const fmt = (m) => {
      if (m < 60) return `${m} min`;
      const h = Math.floor(m / 60), rem = m % 60;
      return rem === 0 ? `${h}h` : `${h}h${rem}`;
    };
    return `${fmt(min)} - ${fmt(max)}`;
  };

  const toggleOption = (pack, optionName) => {
    setOptions((prev) => {
      const exists = prev[pack].includes(optionName);
      return {
        ...prev,
        [pack]: exists ? prev[pack].filter((o) => o !== optionName) : [...prev[pack], optionName],
      };
    });
  };

  const calculatePrice = (pack) => {
    let price =
      valuePresta === "interior" ? basePrices.interior[pack]
      : valuePresta === "exterior" ? basePrices.exterior[pack]
      : (basePrices.interior[pack] + basePrices.exterior[pack]) * 0.85;

    options[pack].forEach((opt) => {
      const found = prestations.find((p) => p.name === opt);
      if (found?.price) price += found.price;
    });

    return Math.round(price * vehicleMultiplier[valueVehicule]);
  };

  const Check = ({ active }) => (
    <Center>
      <IconCircleCheckFilled
        size={18}
        className={`${classes.icon} ${active ? classes.iconActive : ""}`}
      />
    </Center>
  );

  const renderPrestations = (typeFilter) =>
    prestations
      .filter((p) => p.type === typeFilter && !p.optional)
      .map((p) => {
        if (valuePresta !== "both" && valuePresta !== typeFilter) return null;
        return (
          <Table.Tr key={p.name} className={classes.rowHover}>
            <Table.Td className={classes.cellHover}>{p.name}</Table.Td>
            <Table.Td><Check active={p.includedIn?.includes("express") ?? false} /></Table.Td>
            <Table.Td className={`${classes.popularColumn} ${classes.popularColumnHover}`}>
              <Check active={p.includedIn?.includes("diamond") ?? false} />
            </Table.Td>
          </Table.Tr>
        );
      });

  const renderOptions = () => {
    const filtered = prestations.filter(
      (p) =>
        p.optional &&
        (valuePresta === "both" ||
          (valuePresta === "interior" && p.type === "interior") ||
          (valuePresta === "exterior" && p.type === "exterior")),
    );
    const unique = [];
    filtered.forEach((opt) => { if (!unique.find((o) => o.name === opt.name)) unique.push(opt); });

    return unique.map((p) => (
      <Table.Tr key={p.name} className={classes.rowHover}>
        <Table.Td className={classes.cellHover}>
          {p.name}{" "}
          <Badge ml={8} variant="light" className={classes.optionBadge}>+{p.price}€</Badge>
        </Table.Td>
        {["express", "diamond"].map((pack) => (
          <Table.Td key={pack}>
            <Center>
              <Checkbox
                className={classes.checkboxHover}
                checked={options[pack].includes(p.name)}
                onChange={() => toggleOption(pack, p.name)}
              />
            </Center>
          </Table.Td>
        ))}
      </Table.Tr>
    ));
  };

  // ── Rendu lavage ────────────────────────────────────────────────────────

  const renderTableLavage = () => (
    <>
      <Text fw={500} mb={3} mt={30}>Pour quelle prestation ?</Text>
      <SegmentedControl
        orientation={isMobile ? "vertical" : "horizontal"}
        classNames={{ root: classes.root, label: classes.label }}
        fullWidth
        size="md"
        value={valuePresta}
        onChange={setValuePresta}
        radius="md"
        data={[
          { label: "Nettoyage intérieur", value: "interior" },
          { label: "Lavage extérieur", value: "exterior" },
          {
            label: (
              <Center>
                <Indicator
                  inline
                  label="-15%"
                  size={18}
                  processing
                  position="middle-end"
                  offset={-35}
                  classNames={{ indicator: classes.indicatorLabel }}
                >
                  Intérieur + Extérieur
                </Indicator>
              </Center>
            ),
            value: "both",
          },
        ]}
      />

      <Table
        highlightOnHover
        withTableBorder
        withColumnBorders
        verticalSpacing="md"
        style={{ tableLayout: "fixed", width: "100%", marginTop: 30 }}
      >
        <Table.Caption>Tarifs Mars 2026 - Susceptible d'être modifié sans préavis.</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: "50%" }}>Prestation</Table.Th>
            <Table.Th style={{ width: "25%", fontSize: isMobile ? "10px" : "14px" }} ta="center">
              Express
            </Table.Th>
            <Table.Th
              style={{ width: "25%", fontSize: isMobile ? "10px" : "14px" }}
              ta="center"
              className={classes.popularColumn}
            >
              <Indicator
                inline
                label="Populaire"
                size={isMobile ? 14 : 16}
                position="top-center"
                offset={-15}
                classNames={{ indicator: classes.popularLabel }}
              >
                Diamant
              </Indicator>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr className={classes.durationRow}>
            <Table.Td>Durée totale estimée</Table.Td>
            {["express", "diamond"].map((pack) => (
              <Table.Td key={pack} style={{ fontSize: isMobile ? "10px" : "12px" }}>
                <Center>{formatDuration(valuePresta, pack)}</Center>
              </Table.Td>
            ))}
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {valuePresta === "both" && (
            <>
              <Table.Tr className={classes.sectionRow}><Table.Td colSpan={4}>Nettoyage intérieur</Table.Td></Table.Tr>
              {renderPrestations("interior")}
              <Table.Tr className={classes.sectionRow}><Table.Td colSpan={4}>Lavage extérieur</Table.Td></Table.Tr>
              {renderPrestations("exterior")}
            </>
          )}
          {valuePresta !== "both" && renderPrestations(valuePresta)}
          <Table.Tr className={classes.sectionRow}><Table.Td colSpan={4}>Options</Table.Td></Table.Tr>
          {renderOptions()}
        </Table.Tbody>
        <Table.Tfoot>
          <Table.Tr>
            <Table.Th>{valuePresta === "both" ? "Prix (remise déjà appliquée)" : "Prix"}</Table.Th>
            {["express", "diamond"].map((pack) => (
              <Table.Th key={pack} ta="center" className={pack === "diamond" ? classes.popularColumn : ""}>
                {calculatePrice(pack)}€
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Tfoot>
      </Table>
    </>
  );

  // ── Rendu forfait (cards) ───────────────────────────────────────────────

  const renderCardsForfait = () => (
    <>
      <SimpleGrid cols={{ base: 1, sm: packs.length }} mt={30} spacing="lg">
        {packs.map((pack) => (
          <Paper
            key={pack.value}
            withBorder
            p="xl"
            radius="md"
            className={pack.popular ? classes.forfaitCardPopular : classes.forfaitCard}
          >
            <Stack align="center" gap="xs">
              {pack.popular && (
                <Badge size="sm" className={classes.forfaitPopularBadge}>
                  Populaire
                </Badge>
              )}
              <Text fw={600} fz="lg" ta="center">
                {pack.label}
              </Text>
              <Text fz={52} fw={800} className={classes.forfaitPrice}>
                {prices[valueVehicule]?.[pack.value] ?? "—"}€
              </Text>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
      <Text fz="xs" c="dimmed" ta="center" mt="md">
        Tarifs Mars 2026 — Susceptible d'être modifié sans préavis.
      </Text>
    </>
  );

  // ── Rendu principal ─────────────────────────────────────────────────────

  return (
    <Container mt={40}>
      <Stack spacing="xl">
        <Title order={1} ta="center" fz={isMobile ? 28 : 36} fw={700} mb={10}>
          {title}
        </Title>
        <Text size="md" ta="center" c="dimmed" mb={30}>
          {subtitle}
        </Text>

        <Text fw={500} mb={3}>Pour quel type de véhicule ?</Text>
        <SegmentedControl
          orientation={isMobile ? "vertical" : "horizontal"}
          size="md"
          fullWidth
          radius="md"
          value={valueVehicule}
          onChange={setValueVehicule}
          data={[
            { label: "Urbaine / Citadine", value: "citadine" },
            { label: "Compact / Berline", value: "berline" },
            { label: "SUV / Break / Sportive", value: "suv" },
            { label: "Utilitaire", value: "utilitaire" },
          ]}
        />
        {EXEMPLES_VEHICULE[valueVehicule] && (
          <Text c="dimmed" fz="sm">Exemples : {EXEMPLES_VEHICULE[valueVehicule]}</Text>
        )}

        {variant === "lavage" ? renderTableLavage() : renderCardsForfait()}
      </Stack>
    </Container>
  );
}
