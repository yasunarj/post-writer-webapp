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
            このアプリケーションはNext.jsのAppRouterを使用して、作成されたものです。ユーザーは自由に投稿をポストすることができます。
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

      <section
        id="features"
        className="container mx-auto py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6"
      >
        <div className="mx-auto max-w-[64rem] text-center space-y-6">
          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Service Features
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このプロジェクトはモダンな技術スタックを使用して作成されたWebアプリケーションです。Next.js-AppRouterやcontentlayerを利用したマークダウン形式でブログ投稿ができます。
          </p>
        </div>

        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-background border-4 p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.108 12.376q-.176-.201-.371-.403q.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701c-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146q-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644q-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924c-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5c-.186.19-.361.381-.525.571c-1.465 1.698-2.057 3.376-1.457 4.415c.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124q.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659c.06-.174.115-.355.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95c.619-1.075-.02-2.877-1.554-4.63ZM4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.464 20.464 0 0 0-.422 2.678A20.887 20.887 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452Zm3.887 5.728c-.51-.387-.985-.783-1.416-1.181c.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179q0 .59.028 1.178Zm0 3.94a7.237 7.237 0 0 1-2.64.094a1.766 1.766 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.49 20.49 0 0 0 2.107 1.7a20.802 20.802 0 0 0 .426 2.712q-.25.063-.505.114Zm7.1-8.039q-.503-.317-1.018-.613q-.508-.292-1.027-.563a18.7 18.7 0 0 1 1.739-.635a18.218 18.218 0 0 1 .306 1.811ZM9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98c.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.478 20.478 0 0 0-2.526.97a20.061 20.061 0 0 0-2.52-.981q.087-.3.188-.596Zm-.4 1.424a18.307 18.307 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823Zm-.317 7.66q.497.319 1.009.613q.522.3 1.057.576a18.196 18.196 0 0 1-1.744.665a19.144 19.144 0 0 1-.322-1.853Zm5.456 3.146a7.236 7.236 0 0 1-1.238 2.333a1.766 1.766 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20.109 20.109 0 0 0 2.53-1.01a20.8 20.8 0 0 0 2.547.979q-.072.249-.155.494Zm.362-1.324a19.267 19.267 0 0 1-1.762-.646q.509-.267 1.025-.565q.53-.306 1.032-.627a18.152 18.152 0 0 1-.295 1.838Zm.447-4.743q0 .911-.057 1.82c-.493.334-1.013.66-1.554.972c-.54.311-1.073.597-1.597.856q-.827-.396-1.622-.854q-.79-.455-1.544-.969q-.07-.91-.07-1.822q0-.911.068-1.821a24.168 24.168 0 0 1 3.158-1.823q.816.397 1.603.851q.79.454 1.55.959q.065.914.065 1.831Zm.956-5.093c1.922-.373 3.37-.122 3.733.507c.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20.061 20.061 0 0 0-2.144-1.688a20.04 20.04 0 0 0-.405-2.649q.31-.076.608-.135Zm-.13 3.885a18.164 18.164 0 0 1 1.462 1.188a18.12 18.12 0 0 1-1.457 1.208q.023-.594.023-1.188q0-.604-.028-1.208Zm3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20.069 20.069 0 0 0 .387-2.682a19.94 19.94 0 0 0 2.137-1.715q.177.183.336.364a7.234 7.234 0 0 1 1.403 2.238a1.766 1.766 0 0 1 .054 1.403Zm-8.819-6.141a1.786 1.786 0 1 0 2.44.654a1.786 1.786 0 0 0-2.44-.654Z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">React</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border-4 p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouterLayouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border-4 p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12Z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">TailWindCSS</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border-4 p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M58.061.007a5.45 5.45 0 0 0-4.563 2.126L4.137 64.283c-5.823 7.332-.597 18.148 8.763 18.148h50.98l.549 39.864c0 3.63 2.588 5.704 5.704 5.704c1.556 0 3.111-.524 4.148-2.08l49.314-62.201c6.223-7.26 1.037-18.148-8.307-18.148H63.74l-.264-40.045c-.047-3.288-2.66-5.403-5.409-5.518zm10.527 50.748h46.706c2.593 0 4.148 1.042 5.186 3.635c1.037 2.074.518 4.667-.52 6.222l-49.297 62.191h-.529s-.519 0-.519-.518L68.584 50.75z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Supabase</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border-4 p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361a5.093 5.093 0 0 0-.717-.26a5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529c.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416c.47.197.892.407 1.266.628c.374.222.695.473.963.753c.268.279.472.598.614.957c.142.359.214.776.214 1.253c0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085a4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164a5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09c.249-.06.456-.144.623-.25c.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089a2.12 2.12 0 0 0-.537-.5a5.597 5.597 0 0 0-.807-.444a27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405c-.45-.553-.676-1.222-.676-2.005c0-.614.123-1.141.369-1.582c.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629a7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">TypeScript</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border-4 p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">shadcn/ui</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto md:max-w-[58rem] text-center">
          <p className="text-muted-foreground sm:text-lg sm-leading-7">
            Post Writerはログインするとブログ投稿ができるようになります
          </p>
        </div>
      </section>

      <section id="contact" className="py-8 md:py-12 lg:py-24">
        <div className="container max-w-[58rem] mx-auto text-center flex flex-col gap-4">
          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Contact Me
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            もしもWebサービスが気に入った場合には下記xからDMでご連絡ください。
            <br />
            お仕事のご連絡お待ちしております。
          </p>
          <Link
            href={siteConfig.links.x}
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            お仕事はxまで
          </Link>
        </div>
      </section>
    </>
  );
};

export default indexPage;
