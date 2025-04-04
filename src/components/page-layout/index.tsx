"use client";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { ProgressProvider } from "@bprogress/next/app";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <ProgressProvider color="#ff0000" options={{ showSpinner: true }}>
      <Header />
      {children}
      <Footer />
    </ProgressProvider>
  );
}
