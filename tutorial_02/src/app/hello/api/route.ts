// Headers : Method 1
import { headers } from "next/headers";

// Headers : Method 2
import { type NextRequest } from "next/server";

// Cookies : Method 2
import { cookies } from "next/headers";

export async function GET(request:NextRequest){

    // Headers : Method 1
    const headerList = await headers();
    console.log(headerList.get("Authorization"));

    // Headers :Method 2
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get("Authorization"));

    // Cookie : Method 1
    const cookie = request.cookies.get("theme");
    console.log(cookie);

    // Cookie : Method 2
    (await cookies()).set("cart","laptop"); // "key","value"
    (await cookies()).get("cart");

    // Like this you can change the headers information
    return new Response("<h1>Hello World route.ts</h1>",{
        headers:{
            "Content-Type":"text/html",
            // set cookies
            "Set-Cookie":"theme=dark", // "key=value"
        }
    });

}