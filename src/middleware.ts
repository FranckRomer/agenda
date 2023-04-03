import { NextResponse } from "next/server";
// import { jwtVerify } from "jose";
var jose = require('jose');

export async function middleware(request: any) {
    
    const jwt = request.cookies.get("myTokenName");
    if (!jwt) return NextResponse.redirect(new URL("/login", request.url));

    try {
        const { payload } = await jose.jwtVerify(
            jwt.value,
            new TextEncoder().encode("secret")
        );
        // console.log(payload);   
        // console.log(request.nextUrl.pathname.startsWith('/ '));
        if (request.nextUrl.pathname.startsWith('/')){
            // return NextResponse.redirect(new URL("/agenda", request.url));
        }     
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: ["/agenda/:path*", "/profile/:path*"],
};
