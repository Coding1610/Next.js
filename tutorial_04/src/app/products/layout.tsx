type Props = {
    children:React.ReactNode,
}

export default async function Layout(props:Props){

    const response = await fetch("http://localhost:3001/products");
    const result = response.json();
    console.log(result);
    
    return (
        <>
        {props.children}
        </>
    )
}