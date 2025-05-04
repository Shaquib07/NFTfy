import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NFT-fy',
  description: 'Created with next',
  generator: 'SHAQUIB',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
