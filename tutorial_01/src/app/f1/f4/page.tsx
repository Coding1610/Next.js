import Link from "next/link"

export default function F4Page() {
  return (
    <div>
        <h1>F4 Page</h1>
        <Link href={"/f1/f3"}>F3</Link>
        <Link href={"/about"}>about</Link>
    </div>
  )
}
