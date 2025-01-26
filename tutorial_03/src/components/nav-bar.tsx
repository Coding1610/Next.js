// "use client"

import NavLinks from "./nav-links"
import NavSearch from "./nav-search"
// import { useState } from "react";

export default function NavBar() {

    console.log("nav-bar rendered");
    // const [search,setSearch] = useState("");

    return (
        <>
        <NavLinks/>
        <NavSearch/>
        </>
    )
}