import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
 
const protectedRoutes = ['/home', '/projects']
const publicRoutes = ['/login', '/signup', '/']
 
export default async function authMiddleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  const cookieStore = cookies()
  const userId = cookieStore.get('userId')?.value
 
  if (isProtectedRoute && !userId) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
 
  if (
    isPublicRoute &&
    userId &&
    !req.nextUrl.pathname.startsWith('/home')
  ) {
    return NextResponse.redirect(new URL('/home', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}