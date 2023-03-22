import { NextResponse } from "next/server";
// import { jwtVerify } from "jose";
var jose = require('jose');

export async function middleware(request:any) {
    const jwt = request.cookies.get("myTokenName");
    // console.log(jwt);    
    if (!jwt) return NextResponse.redirect(new URL("/login", request.url));
    
    
    try {
        // console.log(jwt);
        const { payload } = await jose.jwtVerify(
            jwt.value,
            new TextEncoder().encode("secret")
        );
        // console.log({ payload });
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: ["/agenda/:path*"],
};
