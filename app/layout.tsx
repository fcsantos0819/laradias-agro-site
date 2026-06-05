import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lara Dias Agropecuária | Pet Shop, Agropecuária e Jardinagem",

  description:
    "Lara Dias Agropecuária em São Joaquim de Bicas - MG. Rações, produtos agropecuários, jardinagem, pet shop, medicamentos veterinários e equipamentos STIHL.",

  keywords: [
    "agropecuária",
    "pet shop",
    "ração",
    "ração para cães",
    "ração para gatos",
    "STIHL",
    "jardinagem",
    "agropecuária em São Joaquim de Bicas",
    "pet shop em São Joaquim de Bicas",
    "ração em São Joaquim de Bicas",
    "produtos agropecuários",
    "Lara Dias Agropecuária",
  ],

  authors: [{ name: "Lara Dias Agropecuária" }],

  openGraph: {
    title: "Lara Dias Agropecuária",
    description:
      "Rações, pet shop, jardinagem, agropecuária e equipamentos STIHL.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}