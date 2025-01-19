import Link from "next/link";
import Card from "@/Components/Card";

export default function Notification() {
  return (
    <Card>
        <h1>Notification</h1>
        <Link href={"complex-dashboard/archived"} >archived</Link>
    </Card>
  )
}
