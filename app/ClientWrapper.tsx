"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import { Toaster } from "react-hot-toast";
const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <div className="antialiased text-gray-600 min-h-screen flex flex-col bg-linear-to-r from-blue-100 via-green-50  to-blue-100">
      <QueryClientProvider client={queryClient}>
        <Header />

        {/* Main content grows to fill available space */}
        <main className="flex-1">{children}</main>
        <Toaster position="top-right" reverseOrder={false} />
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default ClientWrapper;
