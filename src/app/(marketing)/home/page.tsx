import { getNextServerSession } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function Home() {
  // TODO: When logged in, redirect to main app
  // const session = await getNextServerSession()

  // if (session) {
  //   redirect("/")
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="h1 text-6xl">Put some marketing stuff here eventually.</h1>
    </main>
  )
}
