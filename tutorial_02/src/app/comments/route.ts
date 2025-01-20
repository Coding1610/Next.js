import { NextRequest } from "next/server";
import { comments } from "./data";

// params are part of the route path and always string
// searchParams are optional query parameters

// http://localhost:3000/comments/

// GET
// export async function GET(request:Request){
//     return Response.json(comments);
// }

// GET with Query
export async function GET(request:NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query ? comments.filter((cmt) => cmt.text.includes(query)) : comments;
    return Response.json(filteredComments);
}

// http://localhost:3000/comments/

// POST
export async function POST(request:Request){
    const commnet = await request.json();
    const newComment = {
        id: comments.length + 1,
        text : commnet.text,
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment),{
        headers:{
            "Content-Type":"application/json",
        },
        status:201,
    });
}
