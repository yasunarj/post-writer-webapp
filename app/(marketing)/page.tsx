import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

const indexPage = () => {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center mx-auto gap-4 max-w-[64rem]">
          <Link
            href={siteConfig.links.x}
            className="bg-muted px-4 py-1.5 font-medium text-sm rounded-2xl"
            target="_black"
            rel="noreferrer"
          >
            xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Post Writer
          </h1>
          <p className="text-muted-foreground sm:text-xl      leading-normal max-w-[42rem]">
            講師のShinの元にNext.jsのAppRouterをしようして、作成されたものです。ユーザーは自由に投稿をポストすることができます。
          </p>
          <div className="flex gap-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Start
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default indexPage;
