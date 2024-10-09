import MainNav from "@/components/MainNav";
import SiteFooter from "@/components/SiteFooter";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

const Marketing = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className="container mx-auto z-40 bg-background">
        <div className="h-20 py-6 flex justify-between items-center">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link href="/login" className={cn(buttonVariants({variant: "secondary", size: "sm"}), "py-6")}>ログイン</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
};

export default Marketing;
