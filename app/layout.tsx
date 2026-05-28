import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gee Up Vodka — Brand Kit",
  description: "Official brand guidelines and visual identity system for Gee Up Vodka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@300;400;500;600;700;800;900&family=Permanent+Marker&family=Bebas+Neue&family=Russo+One&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
