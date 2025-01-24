// Client Component

"use client"
import { useState } from "react";

export default function ClientComponent(){
    console.log("this component is client component");
    const[val,setVal] = useState(0);
    return (
        <>
        <h1>Client Component</h1>
        </>
    )
}