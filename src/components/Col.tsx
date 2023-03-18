import { WrapperProps } from "@/interfaces/wrapper"
import React from "react"

const Col = ({ children, ...rest }: WrapperProps) => {
  return (
    <div {...rest} className={`flex flex-col ${rest.className}`}>
      {children}
    </div>
  )
}

export default Col
