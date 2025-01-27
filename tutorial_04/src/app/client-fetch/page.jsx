"use client"
import { useState, useEffect } from "react"

type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
}

export default function ClientFetch() {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("No Response, ERROR!!!");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <h1>Hello</h1>
            <div>
                {data.map(item => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>Price: ${item.price}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}