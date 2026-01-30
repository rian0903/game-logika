import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Check if the user is accessing a protected route
    if (request.nextUrl.pathname.startsWith('/play')) {
        const userSession = request.cookies.get('user_session');

        // If no session cookie, redirect to login page
        if (!userSession) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    return NextResponse.next();
}

// Configure paths to match
export const config = {
    matcher: '/play/:path*',
};
