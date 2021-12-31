import React, { FC } from "react"
import { BodyWrapper } from "container/Wrapper"
import { MainButton } from "styles/ButtonStyles"
import { Body2, SubTitle } from "styles/TextStyles"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { RuthTheme } from "styles/ColorStyles"

const HomeLearn: FC = () => {
  return (
    <Body>
      <Cover>
        <LearnGrid>
          <LearnLeft>
            <ImageCover
              src={`https://res.cloudinary.com/deoofk9nn/image/upload/v1640949890/ruth_hxmwwb.png`}
              alt="Ruth"
            />
          </LearnLeft>
          <LearnRight>
            <RightSmall>
              <RightCircle />
            </RightSmall>
            <RightLarge>
              <LearnTitle>
                Hi, I'm Ruth Ikegah. I help people make the world better through
                quality software.
              </LearnTitle>
              <LearnText>
                A Developer Advocate and GitHub Star. Sanjay is the head-chef
                here.He is extremely experienced and he is someone who can catch
                the vibe of people,the type of food to serve and he always makes
                sure that food is upto the mark and "No halfway house in the
                quality of food you serve" is his main motto,says our head-ched
                Sanjay
              </LearnText>
              <Link to="/about">
                <LearnButton>Learn more about me</LearnButton>
              </Link>
            </RightLarge>
          </LearnRight>
        </LearnGrid>
      </Cover>
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
`

const Cover = styled(BodyWrapper)``
const LearnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  place-items: center;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 24px;
    gap: 24px;
  }
`
const LearnLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageCover = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
  min-height: 250px;
`
const LearnRight = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  grid-gap: 10px;
  gap: 10px;
  align-items: flex-start;
`
const RightSmall = styled.div``
const RightCircle = styled.div`
  height: 16px;
  width: 16px;
  background: ${RuthTheme.white};
  border-radius: 50%;
  margin: 8px 0 0 0;
`
const RightLarge = styled.div`
  color: ${RuthTheme.white};
  display: flex;
  flex-direction: column;
`
const LearnTitle = styled(SubTitle)``
const LearnText = styled(Body2)`
  margin: 16px 0;
`
const LearnButton = styled(MainButton)`
  margin: 24px 0;
`
export default HomeLearn
