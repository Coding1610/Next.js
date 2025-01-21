import { NextResponse, type NextRequest } from "next/server";

export function middleware(request:NextRequest){
    // Method 2
    // if( request.nextUrl.pathname === "/profile" ){
    //     return NextResponse.redirect(new URL("/hello", request.url));
    //     // if you use .redirect then page & URL both change
    //     // if you use .rewrite then URL remains same only page change
    // }

    // Cookies
    const response = NextResponse.next();
    const themeCookie = request.cookies.get("theme");
    console.log(themeCookie);
    if( !themeCookie ) request.cookies.set("theme","white");

    // Headers
    response.headers.set("custom-key","custom-value");
    return response; 
}

// Method 1
// export const config = {
//     matcher: "/profile",
// }