'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="made for getting help with other codeforce users"
        />
        <title>Page Title</title>
      </head>

      <body className="antialiased text-gray-600 min-h-screen flex flex-col">
        <QueryClientProvider client={queryClient}>
          <Header />

          {/* Main content grows to fill available space */}
          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
