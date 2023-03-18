import React, { useState } from "react"
import Image from "next/image"
import Row from "./Row"
import affynLogo from "../../public/Affyn-logo.png"
import Hamburger from "./Hamburger"
import Col from "./Col"
import { useRouter } from "next/router"
import NavOptions from "./NavOptions"

const Navbar = () => {
  const router = useRouter()
  const [active, setActive] = useState(false)
  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setActive(!active)
  }

  const handleBlogClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    router.push("/blog")
    setActive(false)
  }

  return (
    <>
      <Row className="absolute top-0 left-0 z-50 px-5 md:px-10 lg:px-20 pt-6 w-full items-center justify-between">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image
            src={affynLogo}
            alt="affyn logo"
            className="w-[110px] h-9 mt-1"
          />
        </div>
        <Hamburger active={active} clickHandler={handleMenuClick} />
        <Row className="hidden md:flex">
          <NavOptions handleClick={handleBlogClick} title={"Blog"} />
        </Row>
      </Row>
      {active ? (
        <Col className="fixed bg-footer top-16 w-[90%] h-full right-0 z-50 py-12 px-16 items-start">
          <NavOptions handleClick={handleBlogClick} title={"Blog"} />
        </Col>
      ) : null}
    </>
  )
}

export default Navbar
