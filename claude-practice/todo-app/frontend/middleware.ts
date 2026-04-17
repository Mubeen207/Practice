/**
 * Next.js Middleware
 * Protects routes that require authentication
 * Redirects unauthenticated users to login page
 */

import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    // If user is authenticated and tries to access login/signup, redirect to dashboard
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    if (token && (path === '/login' || path === '/signup')) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized({ req, token }) {
        const path = req.nextUrl.pathname;

        // Public routes that don't require authentication
        if (path === '/login' || path === '/signup') {
          return true;
        }

        // Protected routes require token
        if (path.startsWith('/dashboard')) {
          return token !== null;
        }

        return true;
      }
    },
    pages: {
      signIn: '/login'
    }
  }
);

// Define which routes the middleware should run on
export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup']
};
