import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const roboto = localFont({
  src: [
    { path: "./fonts/Roboto-Regular.ttf", weight: "300 700", style: "normal" },
    { path: "./fonts/Roboto-Italic.ttf", weight: "300 700", style: "italic" },
    { path: "./fonts/Roboto-Bold.ttf", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Jeremy Euchi",
  description: "Personal website for Jeremy Euchi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
