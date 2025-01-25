import { serverSideFunction } from "@/utils/server-utils"

export default function ServerRoute() {
    console.log("server-side-rendered");
    const result = serverSideFunction();
    return (
      <>
      <h1>Server Route</h1>
      <p>{result}</p>
      </>
    )
  }