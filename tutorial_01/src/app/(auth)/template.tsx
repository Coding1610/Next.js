"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
    const navLinks = [
      {name:"Login",href:"/login"},
      {name:"Register",href:"/register"},
      {name:"Forget-Password",href:"/forget-password"},
    ];
  
    const pathName = usePathname();

    const[input,setInput] = useState("");
  
    return (
        <>
          <header className="text-black text-xl w-[100vw] p-4 bg-purple-400 flex justify-evenly items-center">
            {navLinks.map((link) => {
                
                const isActive = pathName.startsWith(link.href);
                
                return (
                    <Link className={isActive ? "text-white border-b-white-800 border-b-4 font-bold":"text-black"} href={link.href} key={link.name}>{link.name}</Link>
                    )
                })}
          </header>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="enter any input..." className="w-full  p-4 outline-none bg-transparent ring-4 ring-pink-700" type="text" />
          {children}
        </>
  );
}