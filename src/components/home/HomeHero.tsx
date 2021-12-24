import React from "react"
import styled from "styled-components"
import { RuthTheme } from "styles/ColorStyles"

const HomeHero = () => {
  return (
    <Body>
      <Cover>
        <HeroCover></HeroCover>
        <LargeText>
          <h1>Technical Content Manager </h1>
        </LargeText>
      </Cover>
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  min-height: 320px;
  margin: 24px 0;
`
const Cover = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 16px;
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const HeroCover = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`
const LargeText = styled.div`
  h1 {
    color: #ffffff;

    opacity: 0.3;
    font-family: "Neue Machina Bold";
    font-size: 160px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.3;
    text-align: right;
    margin: 24px 0;
    @media only screen and (max-width: 650px) {
      font-size: 56px;
      text-align: center;
    }
  }
`

export default HomeHero
