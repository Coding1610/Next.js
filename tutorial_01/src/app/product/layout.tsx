export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            {children}
            <div className="w-full bg-green-400 flex justify-center items-center p-4 text-black"> Product Layout</div>
        </>
    );
  }