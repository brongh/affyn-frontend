import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full overflow-x-hidden scroll-smooth relative">
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
