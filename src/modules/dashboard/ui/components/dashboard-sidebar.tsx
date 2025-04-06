import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import MainSection from "./main-section";
import { ProfileDropdown } from "@/modules/home/ui/components/profile-dropdown";
import { auth } from "@/auth";

const DashboardSidebar = async () => {
  const session = await auth();

  return (
    <Sidebar variant="inset">
      <SidebarContent>
        <MainSection />
      </SidebarContent>
      <SidebarFooter>
        <ProfileDropdown
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
