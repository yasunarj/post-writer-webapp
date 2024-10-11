"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useEffect } from "react";

interface MobileNavProps {
  items: NavItem[];
}

const MobileNav: React.FC<MobileNavProps> = ({ items }) => {
  useEffect(() => {
    document.body.style.paddingRight = "31px";
    return () => {
      document.body.style.paddingRight = "16px";
    }
  }, []);

  useLockBodyScroll();
  return (
    <div className="fixed top-16 inset-0 right-0 z-50 p-6 shadow-md md:hidden animate-in slide-in-from-bottom-80">
      <div className="grid gap-6 bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/">{siteConfig.name}</Link>
        <nav className="text-sm flex gap-4">
          {items.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
