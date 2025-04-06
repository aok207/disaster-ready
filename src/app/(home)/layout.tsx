import PageLayout from "@/modules/home/ui/layout";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <PageLayout>{children}</PageLayout>;
}
