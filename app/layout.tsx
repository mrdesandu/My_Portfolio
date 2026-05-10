import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ScrollToTop from "@/components/ScrollToTop"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { PageLoader } from "@/components/page-loader"
import { LoadingProvider } from "@/components/loading-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Desandu Kariyawasam | Computer Science Undergraduate",
  description:
    "Computer Science undergraduate at NSBM Green University and the University of Plymouth. Passionate about technology, event coordination, and building meaningful digital solutions.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export const viewport = {
  themeColor: "#0a0a0f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LoadingProvider>
            <PageLoader />
            {children}
            {process.env.NODE_ENV === "production" && <Analytics />}
            <ScrollToTop />
            <ThemeToggle />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}