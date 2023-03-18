import React, { useState } from "react"
import Row from "./Row"
import PlusIcon from "./icons/Plus.icon"
import Col from "./Col"

interface ExpandableInfo {
  order: string
  title: string
  body: string
}

const ExpandableInfo = ({ order, title, body }: ExpandableInfo) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setClicked(!clicked)
  }
  return (
    <Row className="gap-x-6 w-full py-4 cursor-pointer" onClick={handleClick}>
      <h4 className="order basis-1/12 md:text-3xl lg:text-4xl">
        {"0" + order}
      </h4>
      <Col className="gap-y-4 basis-10/12">
        <h4 className="md:text-xl lg:text-2xl">{title}</h4>
        <p
          className={`small md:text-xl lg:text-2xl ${
            clicked ? "flex" : "hidden"
          }`}
        >
          {body}
        </p>
      </Col>

      <PlusIcon />
    </Row>
  )
}

export default ExpandableInfo
