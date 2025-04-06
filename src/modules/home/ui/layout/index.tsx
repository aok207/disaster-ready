"use client";
import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { ProgressProvider } from "@bprogress/next/app";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <ProgressProvider color="#ff0000" options={{ showSpinner: true }}>
      <div className="min-h-svh flex flex-col">
        <Header />
        {children}
        <Footer />
      </div>
    </ProgressProvider>
  );
}
