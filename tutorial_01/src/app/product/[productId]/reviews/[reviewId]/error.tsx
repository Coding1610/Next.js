"use client";

type Props = {
    error:Error,
    reset: () => void,
}

export default function ErrorBoundary(props:Props) {
  return (
    <div>
        <h1>{props.error.message}</h1>  
        <button onClick={props.reset}>Try Again</button>
    </div>
  )
}