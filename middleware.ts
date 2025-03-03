import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the hostname from the request
  const hostname = request.headers.get('host') || '';
  
  // Set the NEXT_PUBLIC_BASE_URL environment variable based on the hostname
  const protocol = hostname.includes('localhost') ? 'http' : 'https';
  process.env.NEXT_PUBLIC_BASE_URL = `${protocol}://${hostname}`;
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};