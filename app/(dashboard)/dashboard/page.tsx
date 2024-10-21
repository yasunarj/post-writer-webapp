import DashboardHeader from "@/components/Dashboard-header";
import DashboardShell from "@/components/Dashboard-shell";
import PostCreateButton from "@/components/PostCreate-Button";
import PostItem from "@/components/PostItem";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { POSTItem } from "@/types";

const DashboardPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const posts = await db.post.findMany({
    where: {
      authorId: user.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <DashboardShell>
      <DashboardHeader heading="記事投稿" text="記事の投稿と管理">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        <div className="divide-y border rounded-md">
          {posts.map((post: POSTItem) => {
            return <PostItem key={post.id} post={post} />;
          })}
        </div>
      </div>
    </DashboardShell>
  );
};

export default DashboardPage;
