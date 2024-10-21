import { getToken } from "next-auth/jwt";
import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const middleware = async (req: NextRequest) => {
  const token = await getToken({ req });
  const isAuth = !!token;
  const isAuthPage =
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/register");

  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return null;
  }

  if (!isAuth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
};

export default withAuth(middleware, {
  callbacks: {
    async authorized() {
      return true;
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path", "/editor/:path", "/login", "/register"],
};
