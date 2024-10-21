"use client";

import Link from "next/link";
import { SidebarNavItem } from "@/types";
import { Icons } from "./icons";
import { usePathname } from "next/navigation";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

const DashboardNav= ({ items }: DashboardNavProps) => {
  const path = usePathname();
  if(!items.length) {
    return null
  }

  return (
    <nav>
      { items.map((item, index) => {
        const Icon = Icons[item.icon as keyof typeof Icons || "arrowRight"];
        return (
          <Link href={item.href!} key={index}>
            <span className={`flex items-center rounded-md px-3 py-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${item.href === path ? "bg-accent" : "transparent"}`}>
              <Icon className="mr-2 h-4 w-4"/>
              {item.title}
            </span>
          </Link>
        )
      }) }
    </nav>
  );
};

export default DashboardNav;