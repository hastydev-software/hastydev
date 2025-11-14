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
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { 
        url: "/favicon/apple-touch-icon.png", 
        sizes: "180x180", 
        type: "image/png" 
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/favicon.svg",
        color: "#35a7ff",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  alternates: {
    canonical: "https://hastydev.com.br",
    languages: {
      "pt-BR": "https://hastydev.com.br",
    },
  },
  category: "technology",
  other: {
    "application-name": "HastyDev",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "HastyDev",
    "theme-color": "#35a7ff",
    "msapplication-TileColor": "#0a0e27",
    "msapplication-config": "/favicon/browserconfig.xml",
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
        {/* Meta tags para favicon */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="HastyDev" />
        <meta name="application-name" content="HastyDev" />
        <meta name="msapplication-TileColor" content="#0a0e27" />
        <meta name="theme-color" content="#35a7ff" />
        
        {/* Favicon SVG com suporte a cores */}
        <link rel="mask-icon" href="/favicon/favicon.svg" color="#35a7ff" />
        
        {/* Preload de favicon crítico */}
        <link rel="preload" href="/favicon/favicon.ico" as="image" />
        <link rel="preload" href="/favicon/apple-touch-icon.png" as="image" />
        
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
