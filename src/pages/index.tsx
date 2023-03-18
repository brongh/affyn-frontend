import Head from "next/head"

import HomeIntro from "@/components/sections/HomeIntro"
import HomeDynamicNFT from "@/components/sections/HomeDynamicNFT"

export default function Home() {
  return (
    <>
      <Head>
        <title>Affyn Blog</title>
        <meta name="description" content="View Blog Posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black h-full">
        <HomeIntro />
        <HomeDynamicNFT />
      </main>
    </>
  )
}
