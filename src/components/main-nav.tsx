"use client";

import React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link href="/">
        <div className="relative z-20 flex space-x-2 items-center text-lg font-bold">
          <div className="text-sm transition-colors hover:text-primary">
            ArkSmallMarket
          </div>
        </div>
      </Link>
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Explore
      </Link>
      <Link
        href="/mint"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Mint
      </Link>
      <Link
        href="/portfolio"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Portfolio
      </Link>
    </nav>
  );
}
