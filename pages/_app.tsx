import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Playfair_Display, Open_Sans } from "next/font/google";

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
    <main className={`${playfairDisplay.variable} ${openSans.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
