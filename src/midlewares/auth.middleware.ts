import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { MiddlewareFactory } from './middlewareFactory';
 
const protectedRoutes = ['/dashboard', '/projects', '/project:id'];
const publicRoutes = ['/', '/about', '/signup'];
 
export const authMiddleware: MiddlewareFactory = ( next ) => {
  return async(req: NextRequest, _next: NextFetchEvent) => {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
  
    const cookieStore = cookies();
    const userId = cookieStore.get('username')?.value;
  
    if (isProtectedRoute && !userId) {
      return NextResponse.redirect(new URL('/', req.nextUrl));
    }
  
    return next(req, _next);
  };
};