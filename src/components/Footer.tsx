import React from "react"
import Col from "./Col"
import Image from "next/image"

import affynLogo from "../../public/Affyn-logo.png"
import Row from "./Row"
import DiscordIcon from "./icons/Discord.icon"
import YoutubeIcon from "./icons/Youtube.icon"
import TelegramIcon from "./icons/Telegram.icon"
import TwitterIcon from "./icons/Twitter.icon"
import ShipIcon from "./icons/Ship.icon"

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0  bg-footer items-center justify-center">
      <Col className="w-screen h-48 items-center gap-y-4">
        <div className="relative mt-6">
          <Image src={affynLogo} alt="Affyn logo" className="w-36 h-12" />
        </div>
        <Row className="gap-x-4">
          <DiscordIcon />
          <YoutubeIcon />
          <TelegramIcon />
          <TwitterIcon />
          <ShipIcon />
        </Row>
      </Col>
    </div>
  )
}

export default Footer
