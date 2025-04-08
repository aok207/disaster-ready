"use client";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Activity,
  BookOpenText,
  ChevronsUpDown,
  History,
  LayoutDashboardIcon,
  SquareActivity,
  UserPlusIcon,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";
import Link from "next/link";

const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: UserPlusIcon,
  },
  {
    title: "Disasters",
    icon: Activity,
    url: "/admin/disasters",
    children: [
      {
        title: "Disaster Types",
        url: "/admin/disasters",
        icon: SquareActivity,
      },
      {
        title: "Histories",
        url: "/admin/disasters/histories",
        icon: History,
      },
      {
        title: "News",
        url: "/admin/disasters/news",
        icon: BookOpenText,
      },
    ],
  },
];

const MainSection = () => {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            if (item.children) {
              return (
                <Collapsible className="group/collapsible" key={item.title}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        className="flex cursor-pointer items-center justify-between"
                        isActive={pathname.includes(item.url)}
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className="size-4" /> {item.title}
                        </div>
                        <ChevronsUpDown />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                  </SidebarMenuItem>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.children.map((child) => (
                        <SidebarMenuSubItem key={child.title}>
                          <SidebarMenuButton
                            asChild
                            tooltip={child.title}
                            isActive={pathname.includes(child.url)}
                          >
                            <Link href={child.url}>
                              <child.icon /> {child.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              );
            }
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  isActive={
                    item.url === "/dashboard"
                      ? pathname.endsWith(item.url)
                      : pathname.includes(item.url)
                  }
                >
                  <Link href={item.url}>
                    <item.icon /> {item.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default MainSection;
