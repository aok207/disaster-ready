import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import DashboardSidebar from "../components/dashboard-sidebar";
import { redirect } from "next/navigation";
import { checkIfUserIsAdmin } from "@/utils/admin";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const isAdmin = await checkIfUserIsAdmin();

  if (!isAdmin) {
    return redirect("/");
  }

  return (
    <SidebarProvider>
      <DashboardSidebar isAdmin={isAdmin} />
      <SidebarInset className="h-[calc(100svh-16px)] overflow-hidden">
        <main className="z-10 h-full w-full overflow-auto px-4 pt-6 pb-4">
          {children}
        </main>
        <footer className="my-2 text-center text-xs text-gray-500">
          COPYRIGHT &copy; {new Date().getFullYear()} , All rights Reserved
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
