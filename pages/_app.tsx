import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Playfair_Display, Open_Sans } from "next/font/google";

import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>KanaPal</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: "dark" }}
      >
        <main className={`${playfairDisplay.variable} ${openSans.variable}`}>
          <Notifications position="top-center" />
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </>
  );
}
