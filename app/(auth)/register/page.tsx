import { buttonVariants } from "@/components/ui/button";
import UserAuthForm from "@/components/UserAuthForm";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Register = () => {
  return (
    <div className="container grid lg:grid-cols-2 h-screen w-screen items-center justify-center lg:max-w-none lg:px-0">
      <div className="absolute top-4 left-4 md:left-8 md:top-8">
        <Link
          href="/login"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          ログイン
        </Link>
      </div>
      <div className="h-full bg-muted lg:block hidden" />
      <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6">
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight">
            アカウントの作成
          </h1>
          <p className="text-sm text-muted-foreground">
            メールアドレスを入力してアカウントを作成してください。
          </p>
        </div>

        <UserAuthForm />

        <p className="text-muted-foreground text-center px-8 text-sm">
          続けてクリックすれば私たちの
          <Link href="/terms" className="underline underline-offset-4">
            利用規約
          </Link>
          と
          <Link href="/privacy" className="underline underline-offset-4">
            利用規約
          </Link>
          に同意したことになります。
        </p>
      </div>
    </div>
  );
};

export default Register;
