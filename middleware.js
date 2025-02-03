// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const sessionCookie = request.cookies.get('session');
  const { pathname } = request.nextUrl;

  const publicRoutes = ['/login', '/signup', '/auth/callback'];

  // If has session cookie and trying to access public routes
  if (sessionCookie && publicRoutes.includes(pathname)) {
    const redirectTo = request.nextUrl.searchParams.get('redirect') || '/dashboard';
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  // If no session cookie and trying to access protected routes
  if (!sessionCookie && pathname.startsWith('/dashboard')) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup'],
};