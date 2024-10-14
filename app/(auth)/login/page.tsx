import UserAuthForm from "@/components/UserAuthForm";
import Link from "next/link";

const Login = () => {
  return (
    <div className="container flex flex-col justify-center items-center h-screen w-screen">
      <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6">
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-muted-foreground">
            メールアドレスを入力してログインできます。
          </p>
        </div>

        <UserAuthForm />

        <p className="text-muted-foreground text-center px-8 text-sm">
          <Link href="/register" className="underline underline-offset-4">
            アカウントを持っていませんか？
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
