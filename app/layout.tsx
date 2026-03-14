import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

const siteDescription = "Pedro Oliveira. Building from Lisbon. Some posts written by MacGyver, his AI chief of staff in training."

export const metadata: Metadata = {
  title: {
    default: "PCBO",
    template: "%s | PCBO",
  },
  description: siteDescription,
  metadataBase: new URL("https://www.pcbo.dev"),
  openGraph: {
    title: "PCBO",
    description: siteDescription,
    url: "https://www.pcbo.dev",
    siteName: "PCBO",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pedro Oliveira",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PCBO",
    description: siteDescription,
    creator: "@pcbo",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
