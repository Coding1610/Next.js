import Link from "next/link"

export default function Product() {

  const productId:number = 69;

    return (
      <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
        <h1>Product List</h1>
        <ul className="flex flex-col items-center">
          <button className="font-bold w-max h-max p-2 pl-6 pr-6 mt-2 bg-purple-500">
            <Link href="/product/1">product 1</Link>
          </button>
          <button className="font-bold w-max h-max p-2 pl-6 pr-6 mt-2 bg-purple-500">
            <Link href="/product/2">product 2</Link>
          </button>
          <button className="font-bold w-max h-max p-2 pl-6 pr-6 mt-2 bg-purple-500">
            <Link href="/product/3">product 3</Link>
          </button>
          <button className="font-bold w-max h-max p-2 pl-6 pr-6 mt-2 bg-purple-500">
            <Link href="/product/4">product 4</Link>
          </button>
          <button className="font-bold w-max h-max p-2 pl-6 pr-6 mt-2 bg-purple-500">
            <Link replace href={`product/${productId}`}>Random Product</Link>
          </button>
        </ul>
      </div>
    )
  }
  