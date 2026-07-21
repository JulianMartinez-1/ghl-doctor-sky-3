import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "DOCTOR SKY 3",
  description: "",
  openGraph: {
    title: "DOCTOR SKY 3",
    description: "",
    images: [],
  },
  icons: {
    icon: "https://app.go-to-marketing.com/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Font%20Awesome%205%20Free:wght@300;400;500;600;700&family=Font%20Awesome%205%20Brands:wght@300;400;500;600;700&family=Roboto-Regular:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;600;700&family=Menlo:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
