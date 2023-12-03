//TODO: logic for if signed out, do not show, forward to /home

import { getNextServerSession } from "./api/auth/[...nextauth]/route"

export default async function Home() {
  const session = await getNextServerSession()

  console.log(session)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  )
}
