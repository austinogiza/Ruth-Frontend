import Navbar from "components/Navbar"
import React, { FC } from "react"
import styled from "styled-components"
import { RuthTheme } from "styles/ColorStyles"

const ContactHero: FC = () => {
  return (
    <Body>
      <Navbar />
      <Cover>
        <ContactText>Ready to</ContactText>
        <ContactText>contact me?</ContactText>
      </Cover>
    </Body>
  )
}

const Body = styled.div`
  height: 550px;
  width: 100%;
  background: ${RuthTheme.secondary};
  color: ${RuthTheme.white};
  display: flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 400px;
  }
`
const Cover = styled.div`
  max-width: 1280px;
  padding: 16px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const ContactText = styled.h1`
  max-width: 650px;
  font-family: "Neue Machina Bold";
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  position: relative;
  line-height: 1.4;
  ::after {
    position: absolute;
    content: "";
    width: 100%;
    bottom: 3px;
    left: 0;
    height: 6px;
    background: ${RuthTheme.white};
  }
  @media only screen and (max-width: 650px) {
    font-size: 48px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 36px;
  }
`
export default ContactHero
