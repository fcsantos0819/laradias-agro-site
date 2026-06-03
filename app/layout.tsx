import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lara Dias Agropecuária | Pet Shop, Agropecuária e Jardinagem",
  description:
    "Loja agropecuária em São Joaquim de Bicas. Produtos para, pets, jardinagem e equipamentos STIHL.",
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