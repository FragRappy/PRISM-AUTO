"use client";

import { Paper, Stack, Text } from "@mantine/core";
import { Map, Marker, Overlay } from "pigeon-maps";
import classes from "./Store.module.css";

export function MapWithPopup() {
  // Coordonnées approximatives de 1852 avenue de Trévoux, Saint‑Denis‑lès‑Bourg
  const storePosition = [46.19963, 5.18374];

  const openMaps = () => {
    const address = encodeURIComponent(
      "1852 avenue de Trevoux 01000 Saint-Denis-les-Bourg",
    );

    const isAppleDevice = /iPad|iPhone|iPod|Macintosh/.test(
      navigator.userAgent,
    );

    if (isAppleDevice) {
      // Apple Maps
      window.open(`maps://?q=${address}`, "_blank");
    } else {
      // Google Maps
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${address}`,
        "_blank",
      );
    }
  };

  return (
    <div className={classes.border}>
      <Map
        height={400}
        defaultCenter={storePosition}
        defaultZoom={15}
        attribution={false}
        mouseEvents={false}
        touchEvents={false}
      >
        <Marker width={50} anchor={storePosition} onClick={openMaps} />
        <Overlay anchor={storePosition} offset={[180, 150]}>
          <Paper
            shadow="sm"
            p="xs"
            style={{
              pointerEvents: "none",
            }}
          >
            <Stack align="center" gap={2}>
              <Text size="sm" weight={500}>
                Prism Auto | RestorFX Bourg-en-Bresse
              </Text>
              <Text size="xs" c="dimmed">
                1852 avenue de Trévoux, 01000 Saint‑Denis‑lès‑Bourg
              </Text>
              <Text size="xs" c="dimmed">
                📞 04 58 28 33 85
              </Text>
              <Text size="xs" c="dimmed">
                Ouverture du lundi au vendredi de 8h30 à 12h et de 13h à 17h30
              </Text>
            </Stack>
          </Paper>
        </Overlay>
      </Map>
    </div>
  );
}
