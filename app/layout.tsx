import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NFT-fy",
  description: "NFT marketplace built with Next.js",
  generator: "SHAQUIB",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
