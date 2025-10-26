import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codeforce peer friend",
  description: "made for getting help with other codeforce users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
