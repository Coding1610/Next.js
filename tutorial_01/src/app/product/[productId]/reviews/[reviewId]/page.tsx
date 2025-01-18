import { notFound } from "next/navigation"

export default function Reviews({
    params,
}:{
    params:{
        productId:string,
        reviewId:string
    }
}) {

    if( parseInt(params.reviewId) > 100 ){
        notFound();
    }

    return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <h1>Review {params.reviewId} of Product {params.productId}</h1>
      </div>
    )
    
  }
  