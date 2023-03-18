import React from "react"

interface HamburgerProps {
  active: boolean
  clickHandler: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Hamburger = ({ active, clickHandler }: HamburgerProps) => {
  return (
    <div
      className={`hamburger-menu ${active ? "active" : ""} md:hidden`}
      onClick={clickHandler}
    >
      <div className="line line-1"></div>
      <div className="line line-2"></div>
      <div className="line line-3"></div>
    </div>
  )
}

export default Hamburger
