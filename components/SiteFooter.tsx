import Link from "next/link";
import { siteConfig } from "@/config/site";

const SiteFooter = () => {
  return (
    <footer>
      <div className="container mx-auto py-10 md:py-0 md:h-20">
        <p className=" text-center text-sm md:text-left">
          Built by {""}
          <Link href={siteConfig.links.x} target="_blank" rel="noreferrer" className="underline underline-offset-4 font-medium">
            NariCode
          </Link>
          . Hosted on {""}
          <Link href={"https://vercel.com"} target="_blank" rel="noreferrer" className="underline underline-offset-4 font-medium">
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
