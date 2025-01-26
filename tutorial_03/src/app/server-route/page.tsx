import { serverSideFunction } from "@/utils/server-utils"
// import { ClientUtils } from "@/utils/client-utils";

export default function ServerRoute() {
    console.log("server-side-rendered");
    const result = serverSideFunction();
    // const client = ClientUtils();
    return (
      <>
      <h1>Server Route</h1>
      <p>{result}</p>
      </>
    )
  }