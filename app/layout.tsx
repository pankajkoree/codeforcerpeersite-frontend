import "./globals.css"
import axios from "axios";

axios.defaults.withCredentials = true

// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import ClientWrapper from "./ClientWrapper";

export const metadata = {
  title: "Codeforce Peersite",
  description: "Codeforce users can see the users from their own organization or university to get help from them",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
