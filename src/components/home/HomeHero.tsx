import Navbar from "components/Navbar"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { RuthTheme } from "styles/ColorStyles"
import { Body1, Header3 } from "styles/TextStyles"

const HomeHero = () => {
  return (
    <Body>
      <Navbar />
      <Cover>
        <HeroCover>
          <TopText>Ruth </TopText>
          <BottomRow>
            <Arrow />
            <BottomLeft>
              <BottomText>Ikegah</BottomText>
              <HeroText>
                Vienna based art director and interface designer, with a strong
                focus on design systems and component libraries.
              </HeroText>
              <BottomArrow>
                <Link to="/about">
                  <svg
                    width="295"
                    height="97"
                    viewBox="0 0 295 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M241 97H228C228 66.5 264.7 42 295 42V55.2C271.2 55.2 241 74.7 241 97Z"
                      fill="#FF007F"
                    />
                    <path
                      d="M295 55C264.7 55 228 30.5 228 0H241C241 22.2 271.2 41.8 295 41.8V55Z"
                      fill="#FF007F"
                    />
                    <path
                      d="M295 41.7998H0V55.1998H295V41.7998Z"
                      fill="#FF007F"
                    />
                  </svg>
                </Link>
              </BottomArrow>
            </BottomLeft>
          </BottomRow>
        </HeroCover>
        <LargeText>
          <h1>Technical Content Manager </h1>
        </LargeText>
      </Cover>
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  min-height: 700px;
  margin: 24px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  @media only screen and (max-width: 650px) {
    min-height: 400px;
  }
`
const Cover = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "Name Word";
  align-items: center;
  padding: 16px;
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "Word"
      "Name";
  }
`
const HeroCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: ${RuthTheme.white};
  margin: 80px 0;
  grid-area: Name;
  @media only screen and (max-width: 650px) {
    margin: 24px 0 0 0;
  }
`
const TopText = styled(Header3)``

const BottomRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 16px 0;
`

const Arrow = styled.span`
  height: 8px;
  width: 61px;
  background: ${RuthTheme.white};
  margin: 40px 0 0 0;
`

const BottomText = styled(Header3)``

const HeroText = styled(Body1)`
  margin: 8px 0;
`

const BottomArrow = styled.div`
  cursor: pointer;
  svg {
    transition: 0.4s ease-in;
  }
  :hover svg path {
    fill: ${RuthTheme.white};
    cursor: pointer;
  }
`
const BottomLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 8px;
  max-width: 400px;
`
const LargeText = styled.div`
  grid-area: Word;
  h1 {
    color: #ffffff;

    opacity: 0.3;
    font-family: "Neue Machina Bold";
    font-size: 96px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.3;
    text-align: right;
    margin: 24px 0;
    @media only screen and (max-width: 650px) {
      font-size: 32px;
      text-align: center;
      margin: 48px 0 0 0;
    }
  }
`

export default HomeHero
