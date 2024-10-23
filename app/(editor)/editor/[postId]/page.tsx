import Editor from "@/components/Editor";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

interface EditorPageProps {
  params: {
    postId: string;
  };
}

const getPostForUser = async (postId: string, userId: string) => {
  const post = await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });

  return post;
};

const EditorPage = async ({ params }: EditorPageProps) => {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  const userId = user.id;

  const postId = params.postId;
  const post = await getPostForUser(postId, userId);

  return (
    <Editor
      post={{
        id: post?.id,
        title: post?.title,
        content: post?.content,
        published: post?.publish,
      }}
    />
  );
};

export default EditorPage;
