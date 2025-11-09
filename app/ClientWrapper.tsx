"use client";

import React from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Header from "./Header";
import Footer from "./Footer";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <div className="antialiased text-gray-600 min-h-screen flex flex-col bg-linear-to-r from-blue-100 via-green-50  to-blue-100">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster position="top-right" reverseOrder={false} />
          <Footer />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
};

export default ClientWrapper;
