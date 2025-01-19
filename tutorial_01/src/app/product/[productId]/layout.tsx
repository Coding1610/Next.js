"use client";

// const generateRandom = (count:number) => {
//     return Math.floor(Math.random()*count);
//   }

//   const random = generateRandom(2);

//   if( random === 1 ){
//     throw new Error("Error in product");
//   }

export default function RootLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params:{
        productId:string,
    }
}) {
    return (
        <>
            <div className="w-full bg-yellow-300 flex justify-center items-center p-4 text-black"> Product {params.productId} Layout</div>
            {children}
        </>
    );
  }