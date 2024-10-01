import "@/styles/globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {ThemeProvider} from "@/components/theme-provider"

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "HelpLink",
  description: "Support tickets reimagined",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable} dark`}>
    <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
      >
      <body className="dark">
        <TRPCReactProvider>
          {children}
          
          </TRPCReactProvider>
      </body>
      </ThemeProvider>
    </html>
    </ClerkProvider>
  );
}
