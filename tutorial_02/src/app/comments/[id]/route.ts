type Props = {
    params :{
        id:string,
    }, 
}

import { comments } from "../data"
import { redirect } from "next/navigation";

// Dynamic Route Handler

// Why request parameter?
// It's part of the Web Request/Response API standard
// Always provided as the first parameter in route handlers

export async function GET( _request:Request, props:Props){
    if( parseInt(props.params.id) > comments.length ){
       redirect("/comments"); 
    }
    else{
        const comment = comments.find((comment) =>  comment.id === parseInt(props.params.id));
        return Response.json(comment);
    }
};

// For DELETE and PATCH :http://localhost:3000/comments/:id

// PATCH
export async function PATCH(request:Request,props:Props){
    const body = await request.json();
    const {text} = body;
    const index = comments.findIndex((cmt) => cmt.id === parseInt(props.params.id));
    comments[index].text = text;
    return Response.json(comments[index]);
}

// DELETE
export async function DELETE(prequest:Request,props:Props){
    const index = comments.findIndex((cmt) => cmt.id === parseInt(props.params.id));
    const deletedComment = comments[index];
    comments.splice(index,1);
    return Response.json(deletedComment);
}