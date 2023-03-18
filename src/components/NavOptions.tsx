import React from "react"
import Row from "./Row"

interface NavOptionsProps {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void
  title: string
}

const NavOptions = ({ handleClick, title }: NavOptionsProps) => {
  return (
    <Row
      className="w-full border-2 border-highlight p-4 cursor-pointer"
      onClick={handleClick}
    >
      <h3>{title}</h3>
    </Row>
  )
}

export default NavOptions
