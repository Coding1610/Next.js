import { Metadata } from "next"

export const metadata:Metadata = {
  title:{
    absolute:"Login"
  }
}

export default function LoginPage() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">Login Page</div>
  )
}