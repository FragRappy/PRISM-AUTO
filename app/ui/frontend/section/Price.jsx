"use client";

import {
  Badge,
  Center,
  Checkbox,
  Container,
  Indicator,
  SegmentedControl,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { useState } from "react";
import classes from "./Price.module.css";

export function PriceSection() {
  const [valueVehicule, setValueVehicule] = useState("citadine");
  const [valuePresta, setValuePresta] = useState("interior");
  const [options, setOptions] = useState({
    express: [],
    classic: [],
    premium: [],
  });

  const isMobile = useMediaQuery("(max-width: 768px)");

  const vehicleMultiplier = {
    citadine: 1,
    compact: 1.1,
    berline: 1.2,
    suv: 1.3,
    sportive: 1.4,
    utilitaire: 1.5,
  };

  const basePrices = {
    interior: { express: 49, classic: 79, premium: 109 },
    exterior: { express: 49, classic: 69, premium: 89 },
  };

  const prestations = [
    {
      name: "Aspiration des moquettes, tapis et coffre",
      type: "interior",
      includedIn: ["express", "classic", "premium"],
    },
    {
      name: "Nettoyage des plastiques",
      type: "interior",
      includedIn: ["express", "classic", "premium"],
    },
    {
      name: "Nettoyage des vitres intérieures",
      type: "interior",
      includedIn: ["express", "classic", "premium"],
    },
    {
      name: "Pressing des sièges, moquettes et tapis",
      type: "interior",
      includedIn: ["classic", "premium"],
    },
    {
      name: "Parfum d'ambiance",
      type: "interior",
      includedIn: ["classic", "premium"],
    },
    {
      name: "Pressing du ciel de toit",
      type: "interior",
      includedIn: ["premium"],
    },
    {
      name: "Nettoyage des garnitures, seuils et joints",
      type: "interior",
      includedIn: ["premium"],
    },
    {
      name: "Désinfection des conduits d'aération",
      type: "interior",
      includedIn: ["premium"],
    },
    {
      name: "Lavage de la carrosserie",
      type: "exterior",
      includedIn: ["express", "classic", "premium"],
    },
    {
      name: "Séchage de la carrosserie",
      type: "exterior",
      includedIn: ["express", "classic", "premium"],
    },
    {
      name: "Nettoyage des vitres extérieures",
      type: "exterior",
      includedIn: ["express", "classic", "premium"],
    },
    {
      name: "Nettoyage des jantes et passages de roues",
      type: "exterior",
      includedIn: ["classic", "premium"],
    },
    {
      name: "Lavage du compartiment moteur",
      type: "exterior",
      includedIn: ["premium"],
    },
    {
      name: "Cire de finition et brillant pneus",
      type: "exterior",
      includedIn: ["premium"],
    },
    {
      name: "Décontamination résine / sève / moustique",
      type: "exterior",
      optional: true,
      price: 25,
    },
    {
      name: "Traitement anti-odeurs par ozone (tabac, animaux...)",
      type: "interior",
      includedIn: ["premium"],
      optional: true,
      price: 30,
    },
  ];

  const toggleOption = (pack, optionName) => {
    setOptions((prev) => {
      const exists = prev[pack].includes(optionName);
      const newOptions = exists
        ? prev[pack].filter((o) => o !== optionName)
        : [...prev[pack], optionName];
      return { ...prev, [pack]: newOptions };
    });
  };

  const Check = ({ active }) => (
    <Center>
      <IconCircleCheckFilled
        size={18}
        className={`${classes.icon} ${active ? classes.iconActive : ""}`}
      />
    </Center>
  );

  const calculatePrice = (pack) => {
    let price = 0;
    if (valuePresta === "interior") price = basePrices.interior[pack];
    else if (valuePresta === "exterior") price = basePrices.exterior[pack];
    else if (valuePresta === "both")
      price = (basePrices.interior[pack] + basePrices.exterior[pack]) * 0.85;

    options[pack].forEach((opt) => {
      const found = prestations.find((p) => p.name === opt);
      if (found && found.price) price += found.price;
    });

    price *= vehicleMultiplier[valueVehicule];
    return Math.round(price);
  };

  const includedPrestations = (p, pack) =>
    p.includedIn?.includes(pack) ?? false;

  const renderPrestations = (typeFilter) =>
    prestations
      .filter((p) => p.type === typeFilter && !p.optional)
      .map((p) => {
        if (valuePresta !== "both" && valuePresta !== typeFilter) return null;
        return (
          <Table.Tr key={p.name} className={classes.rowHover}>
            <Table.Td className={classes.cellHover}>{p.name}</Table.Td>
            <Table.Td>
              <Center>
                <Check active={includedPrestations(p, "express")} />
              </Center>
            </Table.Td>
            <Table.Td
              className={`${classes.popularColumn} ${classes.popularColumnHover}`}
            >
              <Center>
                <Check active={includedPrestations(p, "classic")} />
              </Center>
            </Table.Td>
            <Table.Td>
              <Center>
                <Check active={includedPrestations(p, "premium")} />
              </Center>
            </Table.Td>
          </Table.Tr>
        );
      });

  const renderOptions = () => {
    // filtre options selon prestation actuelle
    let filteredOptions = prestations.filter(
      (p) =>
        p.optional &&
        ((valuePresta === "interior" && p.type === "interior") ||
          (valuePresta === "exterior" && p.type === "exterior") ||
          valuePresta === "both"),
    );

    // supprimer doublons pour both
    const uniqueOptions = [];
    filteredOptions.forEach((opt) => {
      if (!uniqueOptions.find((o) => o.name === opt.name))
        uniqueOptions.push(opt);
    });

    return uniqueOptions.map((p) => (
      <Table.Tr key={p.name} className={classes.rowHover}>
        <Table.Td className={classes.cellHover}>
          {p.name}{" "}
          <Badge ml={8} variant="light" className={classes.optionBadge}>
            +{p.price}€
          </Badge>
        </Table.Td>
        {["express", "classic", "premium"].map((pack) => (
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

  return (
    <Container className={classes.container}>
      <Stack spacing="xl">
        {/* Vehicule */}
        <Text fw={500} mb={3}>
          Pour quel type de véhicule ?
        </Text>
        <SegmentedControl
          orientation={isMobile ? "vertical" : "horizontal"}
          size="md"
          fullWidth
          radius="md"
          value={valueVehicule}
          onChange={setValueVehicule}
          data={[
            { label: "Citadine", value: "citadine" },
            { label: "Compact", value: "compact" },
            { label: "Berline", value: "berline" },
            { label: "SUV / Break", value: "suv" },
            { label: "Sportive", value: "sportive" },
            { label: "Utilitaire", value: "utilitaire" },
          ]}
        />

        {/* Prestation */}
        <Text fw={500} mb={3} mt={30}>
          Pour quelle prestation ?
        </Text>
        <SegmentedControl
          orientation={isMobile ? "vertical" : "horizontal"}
          classNames={{
            root: classes.root,
            label: classes.label,
          }}
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
                    offset={-25}
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

        {/* Tableau */}
        <Table
          highlightOnHover
          withTableBorder
          withColumnBorders
          verticalSpacing="md"
          style={{ tableLayout: "fixed", width: "100%", marginTop: 30 }}
        >
          <Table.Caption>
            Tarifs Mars 2026 - Susceptible d'être modifié sans préavis.
          </Table.Caption>
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ width: "49%" }}>Prestation</Table.Th>
              <Table.Th
                style={{ width: "17%", fontSize: isMobile ? "10px" : "14px" }}
                ta="center"
              >
                Express
              </Table.Th>
              <Table.Th
                style={{ width: "17%", fontSize: isMobile ? "10px" : "14px" }}
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
                  Classic
                </Indicator>
              </Table.Th>
              <Table.Th
                style={{ width: "17%", fontSize: isMobile ? "10px" : "14px" }}
                ta="center"
              >
                Premium
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {valuePresta === "both" && (
              <>
                <Table.Tr className={classes.sectionRow}>
                  <Table.Td colSpan={4}>Nettoyage intérieur</Table.Td>
                </Table.Tr>
                {renderPrestations("interior")}
                <Table.Tr className={classes.sectionRow}>
                  <Table.Td colSpan={4}>Lavage extérieur</Table.Td>
                </Table.Tr>
                {renderPrestations("exterior")}
              </>
            )}
            {valuePresta !== "both" && renderPrestations(valuePresta)}

            <Table.Tr className={classes.sectionRow}>
              <Table.Td colSpan={4}>Options</Table.Td>
            </Table.Tr>
            {renderOptions()}
          </Table.Tbody>

          <Table.Tfoot>
            <Table.Tr>
              <Table.Th>
                {valuePresta === "both"
                  ? "Prix (remise déjà appliquée)"
                  : "Prix"}
              </Table.Th>
              {["express", "classic", "premium"].map((pack) => (
                <Table.Th
                  key={pack}
                  ta="center"
                  className={pack === "classic" ? classes.popularColumn : ""}
                >
                  {calculatePrice(pack)}€
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Tfoot>
        </Table>
      </Stack>
    </Container>
  );
}
