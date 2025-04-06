import DashboardLayout from "@/modules/dashboard/ui/layout";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
