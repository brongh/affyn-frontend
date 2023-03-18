import React from "react"
import Divider from "./Divider"
import ExpandableInfo from "./ExpandableInfo"
import Col from "./Col"

interface InforgraphicsProps {
  content: {
    title: string
    content: string
  }[]
}

const Infographics = ({ content }: InforgraphicsProps) => {
  return (
    <Col className="items-center w-[350px] md:w-3/5 mt-12">
      <Divider />
      {content.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <ExpandableInfo
              order={(index + 1).toString()}
              title={item.title}
              body={item.content}
            />
            <Divider />
          </React.Fragment>
        )
      })}
    </Col>
  )
}

export default Infographics
