import type { Metadata } from "next";
import {
  Poppins,
  Space_Grotesk,
  Darumadrop_One,
  Gruppo,
} from "next/font/google";
import { StructuredData } from "@/client/components/StructuredData";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const darumadropOne = Darumadrop_One({
  variable: "--font-darumadrop-one",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const gruppo = Gruppo({
  variable: "--font-gruppo",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hastydev.com.br"),
  title: {
    default:
      "HastyDev - Soluções Web3, Blockchain e Criptomoedas | Desenvolvimento P2P",
    template: "%s | HastyDev",
  },
  description:
    "Transforme sua ideia em realidade no universo Web3 com a HastyDev. Oferecemos soluções completas que integram tecnologia blockchain, jurídico e marketing para criar produtos escaláveis no ecossistema descentralizado. HastyP2P Core, HastyPay Engine e mais.",
  keywords: [
    "Web3",
    "blockchain",
    "criptomoedas",
    "desenvolvimento blockchain",
    "smart contracts",
    "P2P",
    "HastyP2P",
    "HastyPay",
    "pagamentos crypto",
    "DeFi",
    "desenvolvimento descentralizado",
    "contratos inteligentes",
    "soluções blockchain Brasil",
    "web3 desenvolvimento",
    "DEPIX",
    "automação crypto",
    "white-label blockchain",
  ],
  authors: [{ name: "HastyDev" }],
  creator: "HastyDev",
  publisher: "HastyDev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://hastydev.com.br",
    siteName: "HastyDev",
    title: "HastyDev - Soluções Web3, Blockchain e Criptomoedas",
    description:
      "Especialistas em transformar ideias em realidade no universo Web3. Soluções completas de blockchain, smart contracts e desenvolvimento P2P para o ecossistema descentralizado.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HastyDev - Desenvolvimento Web3 e Blockchain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HastyDev - Soluções Web3, Blockchain e Criptomoedas",
    description:
      "Transforme sua ideia em realidade no universo Web3. Soluções completas de blockchain, smart contracts e desenvolvimento P2P.",
    images: ["/twitter-image.png"],
    creator: "@hastydev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://hastydev.com.br",
    languages: {
      "pt-BR": "https://hastydev.com.br",
    },
  },
  verification: {
    google: "verification_token", // Adicione seu token de verificação do Google Search Console
    // yandex: "verification_token",
    // bing: "verification_token",
  },
  category: "technology",
  other: {
    "application-name": "HastyDev",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#35a7ff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} ${darumadropOne.variable} ${gruppo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
