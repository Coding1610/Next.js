import { Metadata } from "next"

type Props = {
    params:{
        productId:string,
    }
}

export const generateMetadata = ({params}:Props):Metadata => {
    return {
        title:`Product ${params.productId}`
    }
}

export default function ProductID({params}:Props){
    return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">Detail of Product : {params.productId}</div>
    )
}