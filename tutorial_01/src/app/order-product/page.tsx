"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {

    const route = useRouter();

    const handleClick = () => {
        alert("Order Placed");
        route.push("/");
        // route.forward();
        // route.replace("/");
        // route.back();
    }

    return (
        <div className='h-[100vh] w-[100vw] flex justify-center items-center flex-col'>
            <h1>Order product</h1>
            <button onClick={handleClick}className="p-4 rounded-lg border-gray-600 border-4 mt-2 bg-slate-400 text-black">Place Order</button>
        </div>
    )
}