// import { redirect } from "next/navigation"
// import { getNextServerSession } from "./api/auth/[...nextauth]/route"

export default async function Home() {
  // TODO: uncomment when dev is over to redirect to marketing site
  // const session = await getNextServerSession()

  // if (!session) {
  //   redirect("/home")
  // }

  return (
    <main
      className="grid h-full bg-slate-100"
      style={{
        gridTemplateAreas: "'header header' 'newb filelist' 'nav filelist'",
        gridTemplateRows: "auto auto 1fr",
        gridTemplateColumns: "auto 1fr",
      }}
    >
      <header style={{ gridArea: "header" }}>
        <div className="flex justify-between p-2">
          <div>Logo</div>
          {/* Search bar */}
          <div className="mx-14 flex h-[50px] w-[calc(100%-200px)] items-center rounded-full bg-blue-100 px-5">
            <input
              type="text"
              placeholder="Search here"
              className="w-full border-none bg-transparent"
            />
          </div>
          <div>Account</div>
        </div>
      </header>
      {/* Upload button */}
      <div style={{ gridArea: "newb", maxWidth: "256px" }}>Upload</div>
      {/* Nav */}
      <div style={{ gridArea: "nav" }}>
        <ul>
          <li>All uploads</li>
          <li>Documents</li>
          <li>Notes</li>
        </ul>
      </div>
      {/* Filelist */}
      <div
        className="m-2 rounded-xl bg-white p-4"
        style={{ gridArea: "filelist" }}
      >
        <div>File</div>
      </div>
    </main>
  )
}
