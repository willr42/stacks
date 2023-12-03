// import { redirect } from "next/navigation"
// import { getNextServerSession } from "./api/auth/[...nextauth]/route"

export default async function Home() {
  //TODO: uncomment when dev is over to redirect to marketing site
  // const session = await getNextServerSession()

  // if (!session) {
  //   redirect("/home")
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  )
}
