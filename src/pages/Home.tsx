import HomeBlog from "components/home/HomeBlog"
import HomeDo from "components/home/HomeDo"
import HomeHero from "components/home/HomeHero"
import HomeLearn from "components/home/HomeLearn"
import HomeWork from "components/home/HomeWork"
import Overlay from "components/home/Overlay"
import React, { FC, useEffect } from "react"
import gsap from "gsap"
import styled from "styled-components"

const Home: FC = () => {
  useEffect(() => {
    document.title = "Home - Ruth Ikegah"

    let vh = window.innerHeight * 0.1
    document.documentElement.style.setProperty("--vh", `${vh}px`)
    const tl = gsap.timeline()

    tl.from(".main_title", 1.5, {
      opacity: 0,
      y: 70,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
      .to(".overlay_top", 1.6, {
        height: 0,
        ease: "expo.inOut",

        stagger: {
          amount: 0.4,
        },
      })
      .to(".overlay_body", 0.1, {
        display: "none",
      })
  })

  return (
    <Body>
      <Overlay />
      <HomeHero />
      <HomeLearn />
      <HomeDo />
      <HomeWork />
      <HomeBlog />
    </Body>
  )
}

const Body = styled.div``
export default Home
