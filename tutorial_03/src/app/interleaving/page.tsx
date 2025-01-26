import ServerComponentOne from "@/components/server-component-one"
import ClientComponentOne from "@/components/client-component-one"
export default function InterleavingPage() {
  return (
    <>
    <h1>Interleaving Page</h1>
    <ServerComponentOne/>
    {/* <ClientComponentOne/> */}
    </>
  )
}