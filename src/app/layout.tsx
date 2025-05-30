import type { Metadata } from "next";

import HeaderComponent from "@/components/header/header.component";

import "@/styles/typography.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Fitnest",
  description: "عادت‌سازی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <main>
          <HeaderComponent />
          {children}
        </main>
      </body>
    </html>
  );
}
