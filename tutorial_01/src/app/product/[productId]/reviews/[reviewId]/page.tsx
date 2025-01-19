"use client";

import { notFound } from "next/navigation"

type Props = {
  params:{
    productId:string,
    reviewId:string,
  }
}

export default function Reviews({params}:Props) {

    if( parseInt(params.reviewId) > 100 ){
        notFound();
    }

    const generateRandom = (count:number) => {
      return Math.floor(Math.random()*count);
    }

    const random = generateRandom(2);

    if( random === 1 ){
      throw new Error("Error in review");
    }

    return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <h1>Review {params.reviewId} of Product {params.productId}</h1>
      </div>
    )
    
  }
  