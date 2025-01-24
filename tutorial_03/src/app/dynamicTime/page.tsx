import { cookies } from "next/headers"

export default function page() {
    const cookiesStore = cookies();
    return (
        <>
        <h1>{new Date().toLocaleTimeString()}</h1>
        <h1>Dynamic Rendering</h1>
        </>
    )
}