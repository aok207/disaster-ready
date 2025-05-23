"use client";

import { AlertTriangle, LogIn, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { items } from "@/constants/page-links";
import { useSession } from "next-auth/react";
import { ProfileDropdown } from "./profile-dropdown";

export default function Header({ isAdmin }: { isAdmin: boolean }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const { data: session, status } = useSession();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <span>DisasterReady</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {items.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className={cn(
                    "text-sm font-medium hover:text-red-600 transition-colors",
                    isActive(item.href) && "text-red-600",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
            >
              Emergency Contacts
            </Button>
            {status !== "loading" && (
              <>
                {!session ? (
                  <Button asChild size="sm" className="hidden md:inline-flex">
                    <Link href="/sign-in">
                      Sign In/Sign Up <LogIn />
                    </Link>
                  </Button>
                ) : (
                  <ProfileDropdown
                    user={{
                      name: session.user?.name ?? "",
                      image: session.user?.image ?? "",
                      email: session.user?.email ?? "",
                    }}
                    isAdmin={isAdmin}
                  />
                )}
              </>
            )}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
