import AboutExperience from "components/about/AboutExperience"
import AboutHero from "components/about/AboutHero"
import { FC, useEffect } from "react"
import styled from "styled-components"

const About: FC = () => {
  useEffect(() => {
    document.title = "About Me - Ruth Ikegah"
  }, [])
  return (
    <Body>
      <AboutHero />
      <AboutExperience />
    </Body>
  )
}

const Body = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export default About
