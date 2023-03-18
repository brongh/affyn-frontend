import React from "react"
import Image from "next/image"

import groupMask from "../../../public/MaskGroup19.png"
import mouseDown from "../../../public/Mouse.png"

import Col from "../Col"

const HomeIntro = () => {
  return (
    <Col className="w-full h-[839px] relative items-center">
      <Image
        src={groupMask}
        className="h-full absolute top-0 w-full"
        alt="group mask"
      />
      <Col className="z-10 px-5 h-full justify-center items-center md:w-4/5 lg:w-[1000px]">
        <Col className="px-2 -mt-10 items-center lg:items-start">
          <h3 className="mb-5">NEXUS LAND</h3>
          <h1 className="lg:ultra lg:text-left">
            YOUR NEXUS LAND JOURNEY DEBT (TBC)
          </h1>
          <p className="text-center mt-4 lg:text-left lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            luctus magna erat, eget scelerisque enim rutrum aliquet. Mauris
            lobortis malesuada bibendum.
          </p>
          <Image
            alt="mouse down"
            src={mouseDown}
            className="w-6 h-[58px] mt-6 md:hidden"
          />
        </Col>
      </Col>
    </Col>
  )
}

export default HomeIntro
