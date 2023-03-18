import { WrapperProps } from "@/interfaces/wrapper"
import React from "react"

const Row = ({ children, ...rest }: WrapperProps) => {
  return (
    <div {...rest} className={`flex flex-row ` + rest.className}>
      {children}
    </div>
  )
}

export default Row
