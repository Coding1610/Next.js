import { Suspense } from "react";
import Product from "@/components/product";
import Review from "@/components/review";

export default function ProductDetails() {
  return (
    <>
    <h1>Product Detail Page</h1>
    <Suspense fallback={<p>Loading Product...</p>}>
        <Product/>
    </Suspense>
    <Suspense fallback={<p>Loading Review....</p>}>
        <Review/>
    </Suspense>
    </>
  )
}

// Normal render kariye to waiting time, 6.24 seconds
// Now Streaming : wrap component into Suspense, waiting time, 500ms 
