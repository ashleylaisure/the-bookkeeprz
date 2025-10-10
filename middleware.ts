import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
import ROUTES from "./constants/routes";

const protectedRoutes = ['/authors', '/bookshelves', '/dashboard', '/my_books', '/profile'];
const publicRoutes = ["/", "/sign-in", "/sign-up"];

export async function middleware(req: NextRequest) {
    const { nextUrl } = req;
    const sessionCookie = getSessionCookie(req);

    const res = NextResponse.next();

    const isLoggedIn = !!sessionCookie;

    const isOnProtectedRoute = protectedRoutes.includes(nextUrl.pathname);
    const isOnPublicRoute = publicRoutes.includes(nextUrl.pathname);

    if (isOnProtectedRoute && !isLoggedIn) {
        return NextResponse.redirect(new URL(ROUTES.HOME, req.url));
    }

    if (isOnPublicRoute && isLoggedIn) {
        return NextResponse.redirect(new URL(ROUTES.DASHBOARD, req.url));
    }

    return res;
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};