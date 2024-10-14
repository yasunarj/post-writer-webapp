import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Mdx from "@/components/mdx-components";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

const getPostFromSlug = async (slug: string) => {
  const post = allPosts.find((post) => post.slugAsParams === slug);
  return post;
};

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = await getPostFromSlug(slug);

  if (!post) {
    notFound();
  }
  return (
    <article className="container max-w-3xl py-6 lg:py-10">
      <div>
        {post.date && (
          <time>Published on {format(post.date, "yyyy/MM/dd")}</time>
        )}
        <h2 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">
          {post.title}
        </h2>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 border rounded-md bg-muted"
        />
      )}
      <Mdx code={post.body.code}/>
      <hr className="mt-12"/>
      <div className="text-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>全ての記事を見る</Link>
      </div>
    </article>
  );
};

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const page = await getPostFromSlug(params.slug);

  if(!page) {
    return {};
  };

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      type: "article",
      locale: "ja",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [`${siteConfig.url}/og.jpg`],
      creator: "NariCode",
    },
  };
}

export default PostPage;
