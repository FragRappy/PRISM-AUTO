import "@mantine/carousel/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
  virtualColor,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { ModalsProvider } from "@mantine/modals";
import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Prism Auto | RestorFX Bourg-en-Bresse",
    template: "%s - Prism Auto | RestorFX Bourg-en-Bresse",
  },
  description: "Votre centre esthétique automobile",
  keywords: [
    "restorfx",
    "esthetique",
    "automobile",
    "nettoyage",
    "rénovation phares",
    "carrosserie",
    "prismauto",
    "jantes",
    "ceramique",
    "lavage",
    "rénovation plastiques",
    "restauration",
    "rénovation",
    "retouche",
    "peinture",
    "vernis",
  ],
  authors: "Charles-Edouard Breton",
  creator: "Prism Auto",
  publisher: "Prism Auto",
};

const theme = createTheme({
  colors: {
    primary: virtualColor({
      name: "primary",
      dark: "yellow",
      light: "blue",
    }),
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript
          nonce="8IBTHwOdqNKAWeKl7plt8g=="
          defaultColorScheme="light"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider defaultColorScheme="light">
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
