"use client";

import React from "react";

import { Inter as FontSans } from "next/font/google";

import { networks } from "@ark-project/core";
import { ArkProvider } from "@ark-project/react";

import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { StarknetProvider } from "@/components/starknet-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { UserNav } from "@/components/user-nav";
import { QueryClient, QueryClientProvider } from "react-query";

import AuthSwitcher from "@/components/authSwitcher";
import "./globals.css";

import { cn } from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = {
    starknetNetwork: networks.sepolia,
    arkchainNetwork: networks.sepolia,
  };
  const queryClient = new QueryClient();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <StarknetProvider>
          <ArkProvider config={config}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <AuthSwitcher>
                <div className="hidden flex-col md:flex">
                  <div className="border-b top-0 fixed w-full z-20 bg-background">
                    <div className="container mx-auto">
                      <div className="flex h-16 items-center">
                        <MainNav />
                        <div className="ml-auto flex items-center space-x-4">
                          <ModeToggle />
                          <UserNav />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container mx-auto flex-1 space-y-4 mt-16 pt-8">
                    <QueryClientProvider client={queryClient}>
                      {children}
                    </QueryClientProvider>
                  </div>
                </div>
              </AuthSwitcher>
            </ThemeProvider>
          </ArkProvider>
        </StarknetProvider>
      </body>
    </html>
  );
}
