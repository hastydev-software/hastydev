import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | HastyDev",
  description: "Conheça nossa política de privacidade e como protegemos seus dados. Na HastyDev, a segurança e privacidade dos seus dados são nossas prioridades.",
  keywords: [
    "política de privacidade",
    "proteção de dados",
    "LGPD",
    "privacidade web3",
    "HastyDev",
  ],
  authors: [{ name: "HastyDev", url: "https://hastydev.com.br" }],
  creator: "HastyDev",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Política de Privacidade | HastyDev",
    description: "Conheça nossa política de privacidade e como protegemos seus dados.",
    url: "https://hastydev.com.br/privacy",
    siteName: "HastyDev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HastyDev - Soluções Web3 e Blockchain",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidade | HastyDev",
    description: "Conheça nossa política de privacidade e como protegemos seus dados.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://hastydev.com.br/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
