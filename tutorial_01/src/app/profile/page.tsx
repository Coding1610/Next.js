import { Metadata } from "next"

export const metadata = {
  title:"Profile",
  description:"Created in Profile Page"
}

export default function Profile() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">Profile Page</div>
  )
}