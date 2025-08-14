import type { Metadata } from "next";
import { Noto_Sans_Lao } from "next/font/google";
import "./globals.css";

// ⛳ Lao font only
const notoLao = Noto_Sans_Lao({
  subsets: ["lao"],
  variable: "--font-lao",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KIPTEXT API",
  description: "Convert numbers to Lao text with JSON output",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lo">
      <body className={`${notoLao.variable} font-lao antialiased`}>
        {children}
      </body>
    </html>
  );
}
