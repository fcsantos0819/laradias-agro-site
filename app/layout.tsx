import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lara Dias Agropecuária",
  description:
    "Loja agropecuária com atendimento especializado, pet shop, jardinagem e equipamentos STIHL.",
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