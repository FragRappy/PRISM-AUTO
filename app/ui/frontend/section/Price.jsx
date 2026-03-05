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
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { useState } from "react";
import classes from "./Price.module.css";

export function PriceSection() {
  const [valueVehicule, setValueVehicule] = useState("citadine");
  const [valuePresta, setValuePresta] = useState("both");
  const [options, setOptions] = useState({
    express: [],
    classic: [],
    premium: [],
  });

  const isMobile = useMediaQuery("(max-width: 768px)");

  const vehicleMultiplier = {
    citadine: 1,
    compact: 1.05,
    berline: 1.1,
    suv: 1.2,
    sportive: 1.2,
    utilitaire: 1.35,
  };

  const basePrices = {
    interior: { express: 40, classic: 70, premium: 100 },
    exterior: { express: 25, classic: 45, premium: 65 },
  };

  const prestations = [
    {
      name: "Dépoussiérage des plastiques",
      type: "interior",
      includedIn: ["classic", "premium"],
    },
    {
      name: "Aspiration des moquettes",
      type: "interior",
      includedIn: ["express", "classic", "premium"],
    },
    {
      name: "Séchage des tapis",
      type: "interior",
      includedIn: ["classic", "premium"],
    },
    {
      name: "Injection / extracteur des sièges",
      type: "interior",
      includedIn: ["premium"],
    },
    {
      name: "Séchage des sièges",
      type: "interior",
      includedIn: ["classic", "premium"],
    },
    { name: "Enlèvement d'odeur", type: "interior", includedIn: ["premium"] },
    {
      name: "Assainissement des conduits d'aération",
      type: "interior",
      includedIn: ["premium"],
    },
    {
      name: "Lavage carrosserie",
      type: "exterior",
      includedIn: ["express", "classic", "premium"],
    },
    {
      name: "Lavage compartiment moteur",
      type: "exterior",
      includedIn: ["classic", "premium"],
    },
    {
      name: "Nettoyage des vitrages",
      type: "exterior",
      includedIn: ["classic", "premium"],
    },
    { name: "Nettoyage des jantes", type: "exterior", includedIn: ["premium"] },
    {
      name: "Application brillant pneus",
      type: "exterior",
      includedIn: ["premium"],
    },
    { name: "Démoustiquage", type: "exterior", optional: true, price: 10 },
    {
      name: "Injection / extraction plafonnier",
      type: "interior",
      optional: true,
      price: 25,
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
      <IconCircleCheckFilled size={18} color={active ? "#71f515" : "#ced4da"} />
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
          <Badge ml={8} variant="light">
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
    <Container>
      <Stack spacing="xl">
        {/* Vehicule */}
        <SegmentedControl
          orientation={isMobile ? "vertical" : "horizontal"}
          size="md"
          fullWidth={!isMobile}
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
        <SegmentedControl
          orientation={isMobile ? "vertical" : "horizontal"}
          classNames={{
            root: classes.root,
            label: classes.label,
          }}
          fullWidth={isMobile}
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
                  <Indicator inline label="-15%" size={18} processing>
                    Intérieur + extérieur
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
          style={{ tableLayout: "fixed", width: "100%" }}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ width: "52%" }}>Prestation</Table.Th>
              <Table.Th style={{ width: "16%" }} ta="center">
                Express
              </Table.Th>
              <Table.Th
                style={{ width: "16%" }}
                ta="center"
                className={classes.popularColumn}
              >
                <Indicator inline label="Populaire" size={16}>
                  Classic
                </Indicator>
              </Table.Th>
              <Table.Th style={{ width: "16%" }} ta="center">
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
