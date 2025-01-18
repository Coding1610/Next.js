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