import { FC } from "react"
import styled from "styled-components"
import { BorderButton } from "styles/ButtonStyles"
import { RuthTheme } from "styles/ColorStyles"
import { Body1, TinySub } from "styles/TextStyles"

const AboutHero: FC = () => {
  const socials = [
    {
      title: "Twitter",
      link: "https://twitter.com/IkegahRuth",
    },
    {
      title: "GitHub",
      link: "https://github.com/Ruth-ikegah",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ruth-ikegah-856103217/",
    },
  ]
  return (
    <Body>
      <Cover>
        {" "}
        <HeroTop>
          <FirstImage
            src="https://res.cloudinary.com/deoofk9nn/image/upload/v1640136395/ruthhero_jwtldo.png"
            alt="Ruth Ikegah"
          />
          <SecondImage
            src="https://res.cloudinary.com/deoofk9nn/image/upload/v1640136396/ruthhero2_eyxm5x.png"
            alt="Ruth Ikegah"
          />
        </HeroTop>
        <HeroBottom>
          <HeroCover>
            <Herotext>
              Hello, I'm Ruth. I'm a Technical manager, an eager cyclist,
              motorbike adventurist, and a autodidact learner & explorer. Before
              enjoying life around Amsterdam, I've spent a bit of my childhood
              in France near Strasbourg, but mostly in Germany in lovely
              Cologne. I also love mountains, old-school rap & Star Wars. Today
              I use my digital mindset to craft meaningful experiences &
              services that connect people with brands. As an autodidact I am
              always curious to learn and explore things I do not know much
              about. This helps me balance design and new or existing
              technology, and challenge what’s possible today. I enjoy this the
              most working in an eclectic group of ambitious people, who care
              about human interaction, creative problem solving & doing the
              right thing.
            </Herotext>
            <ButtonWrapper>
              <ButtonTitle>
                <Title>SAY HI ON</Title>
              </ButtonTitle>
              <ButtonCover>
                {socials.map((social, index) => (
                  <HeroButton
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.title}
                  </HeroButton>
                ))}
              </ButtonCover>
            </ButtonWrapper>
          </HeroCover>
        </HeroBottom>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  color: ${RuthTheme.white};
`
const Cover = styled.div`
  max-width: 1280px;

  padding: 16px;
  margin: 0 auto;
  width: 100%;
`

const HeroTop = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-gap: 40px;
  gap: 40px;
  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const FirstImage = styled.img`
  width: 100%;
  max-height: 535px;
  max-width: 840px;
  min-height: 250px;
  height: 100%;
`
const SecondImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 535px;
  max-width: 370px;
  min-height: 250px;
`
const HeroBottom = styled.div`
  width: 100%;
`
const HeroCover = styled.div`
  display: flex;
  margin: 32px 0 0 20%;
  flex-direction: column;

  @media only screen and (max-width: 850px) {
    margin: 32px 0 0 0;
  }
`
const Herotext = styled(Body1)``
const ButtonWrapper = styled.div`
  display: flex;
  margin: 40px 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`
const ButtonTitle = styled.div``
const Title = styled(TinySub)``
const ButtonCover = styled.div`
  display: flex;
  margin: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 650px) {
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 24px 0;
  }
`
const HeroButton = styled(BorderButton)`
  margin: 8px;

  @media only screen and (max-width: 650px) {
    margin: 16px 8px 0 0;
  }
`
export default AboutHero
