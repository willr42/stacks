import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stacks",
  description: "One place for all your RPG materials.",
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
