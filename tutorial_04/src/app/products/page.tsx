import { cookies } from "next/headers";

type Props = {
    id:number,
    title:string,
    price:number,
}

export default async function Product() {

    const response = await fetch("http://localhost:3001/products");
    const result:Props[] = await response.json();

    const ThemeStore = cookies();
    const theme = (await ThemeStore).get("theme");

    const response1 = await fetch("http://localhost:3001/products/1");
    const result1:Props[] = await response.json();

    return (
        <>
            <h1>Product-Page</h1>
            {
                result.map((p) => {
                    return (
                        <div key={p.id}>
                            <h1>{p.title}</h1>
                            <p>{p.price}</p>
                        </div>
                    )
                })
            }
        </>
    )
}