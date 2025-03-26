import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ReadingProgressbar } from "@/components/reading-progressbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Piyush Waghela | Full Stack Developer",
  description: "Portfolio of Piyush Waghela, a full stack developer with backend expertise",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ReadingProgressbar/>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

