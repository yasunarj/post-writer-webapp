"use client";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "./ui/button";
import { useState } from "react";
import { Icons } from "./icons";

interface PostCreateButtonProps extends ButtonProps {}

const PostCreateButton = ({
  className,
  variant,
  ...props
}: PostCreateButtonProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClick = async () => {
    window.alert("まだ作成されていません");
  };

  return (
    <button
      className={cn(
        buttonVariants({ variant }),
        { "cursor-not-allowed opacity-60": isLoading },
        className
      )}
      onClick={onClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className="animate-spin mr-2 h-4 w-4" />
      ) : (
        <Icons.add className="mr-2 h-4 w-4" />
      )}
      新しい投稿
    </button>
  );
};

export default PostCreateButton;
