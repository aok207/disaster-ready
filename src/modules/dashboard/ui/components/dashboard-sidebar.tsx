import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import MainSection from "./main-section";
import { auth } from "@/auth";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { ProfileDropdown } from "@/modules/home/ui/components/profile-dropdown";

const DashboardSidebar = async ({ isAdmin }: { isAdmin: boolean }) => {
  const session = await auth();

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <Link
          href="/admin"
          className="flex items-center gap-2 font-bold text-xl"
        >
          <AlertTriangle className="h-6 w-6 text-red-600" />
          <span>DisasterReady</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <MainSection />
      </SidebarContent>
      <SidebarFooter>
        <ProfileDropdown
          isAdmin={isAdmin}
          user={{
            name: session?.user?.name ?? "",
            image: session?.user?.image ?? "",
            email: session?.user?.email ?? "",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
