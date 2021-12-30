import React, { FC } from "react"
import styled from "styled-components"
import { RuthTheme } from "styles/ColorStyles"
import {
  Header3,
  SmallSub,
  TinySub,
  Body2,
  LightHeader6,
  Body3,
} from "styles/TextStyles"

const AboutExperience: FC = () => {
  const data = [
    {
      number: "01/",
      role: "Technical content manager",
      place: "Cruise",
      date: "June 2021 - present",
      text: "Developed brand visuals and language to prepare Cruise self-driving cars for market. Partnered with product and marketing to test and implement brand vision. ",
    },
    {
      number: "02/",
      role: "Technical content manager",
      place: "Cruise",
      date: "June 2021 - present",
      text: "Developed brand visuals and language to prepare Cruise self-driving cars for market. Partnered with product and marketing to test and implement brand vision. ",
    },
    {
      number: "03/",
      role: "Technical content manager",
      place: "Cruise",
      date: "June 2021 - present",
      text: "Developed brand visuals and language to prepare Cruise self-driving cars for market. Partnered with product and marketing to test and implement brand vision. ",
    },
  ]
  return (
    <Body>
      <Cover>
        <ExperienceTitle>
          <TitleText>Experience</TitleText>
        </ExperienceTitle>
        <ExperienceWrapper>
          {data.map((data, index) => (
            <ExperienceCover key={index}>
              <ExperienceNumber>
                <NumberText>{data.number}</NumberText>
              </ExperienceNumber>
              <ExperienceMiddle>
                <Role>{data.role}</Role>
                <Place>{data.place}</Place>
                <Date>{data.date}</Date>
              </ExperienceMiddle>
              <ExperienceDetails>
                <ExperienceText>{data.text}</ExperienceText>
              </ExperienceDetails>
            </ExperienceCover>
          ))}
        </ExperienceWrapper>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  padding: 16px;
  width: 100%;
  height: 100%;
`
const Cover = styled.div`
  max-width: 1440px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  color: ${RuthTheme.white};
`
const ExperienceTitle = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  min-height: 40px;
  height: 100%;
`
const TitleText = styled(Header3)``
const ExperienceWrapper = styled.div`
  margin: 40px auto;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
`
const ExperienceCover = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 32px;
  margin: 24px auto;

  grid-gap: 32px;

  @media only screen and (max-width: 650px) {
    gap: 16px;
    grid-gap: 16px;

    grid-template-columns: repeat(1, 1fr);
  }
`
const ExperienceNumber = styled.div``

const NumberText = styled(LightHeader6)``
const ExperienceMiddle = styled.div`
  margin: 8px 0;
  display: flex;
  flex-direction: column;
`
const Role = styled(TinySub)``
const Place = styled(SmallSub)`
  margin: 8px 0;
`
const Date = styled(Body3)``
const ExperienceDetails = styled.div``
const ExperienceText = styled(Body2)``
export default React.memo(AboutExperience)
