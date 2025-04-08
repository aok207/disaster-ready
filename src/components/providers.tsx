"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import { ProgressProvider } from "@bprogress/next/app";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ProgressProvider color="#ff0000" options={{ showSpinner: true }}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </ProgressProvider>
  );
}
