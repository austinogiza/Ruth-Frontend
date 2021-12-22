import { FC } from "react"
import styled from "styled-components"
import { BorderButton } from "styles/ButtonStyles"
import { RuthTheme } from "styles/ColorStyles"

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
            enjoying life around Amsterdam, I've spent a bit of my childhood in
            France near Strasbourg, but mostly in Germany in lovely Cologne. I
            also love mountains, old-school rap & Star Wars. Today I use my
            digital mindset to craft meaningful experiences & services that
            connect people with brands. As an autodidact I am always curious to
            learn and explore things I do not know much about. This helps me
            balance design and new or existing technology, and challenge what’s
            possible today. I enjoy this the most working in an eclectic group
            of ambitious people, who care about human interaction, creative
            problem solving & doing the right thing.
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
    </Body>
  )
}
const Body = styled.div`
  color: ${RuthTheme.white};
`
const HeroTop = styled.div``
const FirstImage = styled.img``
const SecondImage = styled.img``
const HeroBottom = styled.div``
const HeroCover = styled.div``
const Herotext = styled.div``
const ButtonWrapper = styled.div``
const ButtonTitle = styled.div``
const Title = styled.div``
const ButtonCover = styled.div``
const HeroButton = styled(BorderButton)``
export default AboutHero
