"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Icons from "./icons";
import { signIn } from "next-auth/react";

const UserAuthForm = () => {
  return (
    <div className="grid gap-6">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="name@example.com" type="email" />
          </div>
          <button className={cn(buttonVariants({}))}>
            メールアドレスでログインする
          </button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-muted-foreground px-2 bg-background">
            または
          </span>
        </div>
      </div>
      <button
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          console.log("GitHub SignIn Button Clicked");
          signIn("github").then((response) => {
            alert("Error caught! Check console for details");
            console.log("SignIn Response:", response);
          }).catch((e) => {
            console.error("SignIn Error", e);
          });
        }}
      >
        <Icons.github className="mr-2" />
        Github
      </button>
    </div>
  );
};

export default UserAuthForm;
