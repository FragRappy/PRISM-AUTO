"use client";

import { useComputedColorScheme } from "@mantine/core";
import { IconClock, IconMapPin, IconPhone } from "@tabler/icons-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import classes from "./Store.module.css";

function makePin(gradient, shadow) {
  return L.divIcon({
    className: "",
    html: `
      <div style="position: relative; width: 36px; height: 44px;">
        <div style="
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 5px;
          background: rgba(0,0,0,0.18);
          border-radius: 50%;
          filter: blur(2px);
        "></div>
        <div style="
          width: 36px;
          height: 36px;
          background: ${gradient};
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: ${shadow};
          border: 3px solid #fff;
        "></div>
      </div>
    `,
    iconSize: [36, 44],
    iconAnchor: [18, 44],
    popupAnchor: [0, -48],
  });
}

const markerLight = makePin(
  "linear-gradient(135deg, #339af0, #1971c2)",
  "0 3px 12px rgba(25, 113, 194, 0.45)",
);
const markerDark = makePin(
  "linear-gradient(135deg, #ffd43b, #f59f00)",
  "0 3px 12px rgba(245, 159, 0, 0.55)",
);

const POSITION = [46.19963, 5.18374];

const TILE_LIGHT = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const TILE_DARK  = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

const openMaps = () => {
  const address = encodeURIComponent(
    "1852 avenue de Trevoux 01000 Saint-Denis-les-Bourg",
  );
  const isApple = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
  window.open(
    isApple
      ? `maps://?q=${address}`
      : `https://www.google.com/maps/search/?api=1&query=${address}`,
    "_blank",
  );
};

function AutoOpenMarker({ isDark }) {
  const markerRef = useRef(null);

  useEffect(() => {
    markerRef.current?.openPopup();
  }, []);

  const border = isDark ? "#2a2a3c" : "#e9ecef";
  const text   = isDark ? "#b0b3b8" : "#555";
  const accent = isDark ? "#ffd43b" : "#1971c2";

  return (
    <Marker ref={markerRef} position={POSITION} icon={isDark ? markerDark : markerLight}>
      <Popup minWidth={260} closeButton={false}>
        <div style={{ fontFamily: "inherit", padding: "2px 0" }}>
          <div style={{
            fontSize: 13,
            fontWeight: 700,
            color: accent,
            marginBottom: 6,
            letterSpacing: "-0.01em",
          }}>
            Prism Auto · RestorFX Bourg-en-Bresse
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 7, fontSize: 12, color: text }}>
              <IconMapPin size={14} stroke={1.8} style={{ flexShrink: 0, marginTop: 1, color: accent }} />
              <span>1852 avenue de Trévoux<br />01000 Saint‑Denis‑lès‑Bourg</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: text }}>
              <IconPhone size={14} stroke={1.8} style={{ flexShrink: 0, color: accent }} />
              <span>04 58 28 33 85</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: text }}>
              <IconClock size={14} stroke={1.8} style={{ flexShrink: 0, color: accent }} />
              <span>Lun–Ven · 8h30–12h / 13h–17h30</span>
            </div>
          </div>
          <div style={{ marginTop: 10, paddingTop: 8, borderTop: `1px solid ${border}` }}>
            <span
              onClick={openMaps}
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: accent,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Itinéraire <span style={{ fontSize: 14 }}>→</span>
            </span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export function MapWithPopup() {
  const scheme = useComputedColorScheme("light");
  const isDark = scheme === "dark";

  return (
    <div className={`${classes.border} ${isDark ? classes.dark : ""}`}>
      <MapContainer
        center={POSITION}
        zoom={15}
        style={{ height: 400, width: "100%" }}
        scrollWheelZoom={false}
        attributionControl={false}
      >
        <TileLayer url={isDark ? TILE_DARK : TILE_LIGHT} />
        <AutoOpenMarker isDark={isDark} />
      </MapContainer>
    </div>
  );
}
