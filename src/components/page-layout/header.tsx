"use client";

import { AlertTriangle, LogIn, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { items } from "@/constants/page-links";

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

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
            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link href="/sign-in">
                Sign In <LogIn />
              </Link>
            </Button>
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
