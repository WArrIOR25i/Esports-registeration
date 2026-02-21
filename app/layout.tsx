import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Glitch Esports 2026",
  description: "The ultimate national esports tournament experience",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark">
        {children}
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'