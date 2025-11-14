import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Serviço | HastyDev",
  description:
    "Leia nossos termos de serviço e entenda as condições de uso do site e serviços da HastyDev.",
  keywords: [
    "termos de serviço",
    "condições de uso",
    "direitos autorais",
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
    title: "Termos de Serviço | HastyDev",
    description: "Leia nossos termos de serviço e entenda as condições de uso.",
    url: "https://hastydev.com.br/terms",
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
    title: "Termos de Serviço | HastyDev",
    description: "Leia nossos termos de serviço e entenda as condições de uso.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://hastydev.com.br/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
