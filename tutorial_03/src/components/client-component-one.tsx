"use client"
import { useState } from "react"
import ClientComponentTwo from "./client-component-two";
import ServerComponentOne from "./server-component-one";

type Props = {
    children:React.ReactNode;
}

export default function ClientComponentOne(props:Props) {
    const[val,setVal] = useState(0);
  return (
    <>
    <h1>Client Component One</h1>
    <ClientComponentTwo/>
    {props.children}
    {/* <ServerComponentOne/> */}
    </>
  )
}