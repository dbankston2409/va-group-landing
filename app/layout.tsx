import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The VA Group - Premier Virtual Assistant Services",
  description: "Professional virtual assistants for your business needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
