"use client"
import { useEffect } from "react"
export default function Rrror({error}:{error:Error}) {

    useEffect(()=>{
        console.error(`${error.message}`);
    },[error]);

    return (
        <>
        <div className="w[100vw] h-[100vh] object-contain">
            <p className="absolute top-[50%] left-[50%]">{error.message}</p>
            <img src="https://images.pexels.com/photos/6212801/pexels-photo-6212801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        </>
    )
}