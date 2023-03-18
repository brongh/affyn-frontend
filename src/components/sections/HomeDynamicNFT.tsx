import React from "react"
import Image from "next/image"

import dynamicNFT from "../../../public/Group5319.png"
import rotateButton from "../../../public/rotate-button.png"

import Col from "../Col"
import Infographics from "../Infographics"

const infographicsData = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus magna erat?",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus magna erat?",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus magna erat?",
  },
]

const HomeDynamicNFT = () => {
  return (
    <Col className="px-5 py-16 lg:py-20 items-center w-full">
      <Col className="gap-y-4 md:w-4/5 max-w-[670px]">
        <h1 className="lg:ultra">DYNAMIC NFT</h1>
        <p className="text-center md:text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus
          magna erat, eget scelerisque enim rutrum aliquet. Mauris lobortis
          malesuada bibendum.
        </p>
      </Col>
      <div className="relative items-center flex flex-col mb-32">
        <Image alt="dynamic nft" src={dynamicNFT} className="mt-9" />
        <Image
          alt="rotate button"
          src={rotateButton}
          className="w-[120px] h-[63px] absolute -bottom-12"
        />
      </div>
      <Col className="items-center w-full">
        <Col className="gap-y-4 lg:gap-y-1 w-[280px] md:w-[400px] lg:w-[600px]">
          <h1 className="ultra">FAQ</h1>
          <p className="text-center lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            luctus magna erat
          </p>
        </Col>
        <Infographics content={infographicsData} />
      </Col>
      <div className="h-64" />
    </Col>
  )
}

export default HomeDynamicNFT
