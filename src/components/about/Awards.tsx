import React from "react"
import styled from "styled-components"
import { RuthTheme } from "styles/ColorStyles"

const Awards = () => {
  const data = [
    { name: "GitHub", link: "" },
    { name: "Twitter", link: "" },
    { name: "Twitter", link: "" },
    { name: "Twitter", link: "" },
    { name: "Twitter", link: "" },
    { name: "Twitter", link: "" },
  ]
  return (
    <Body>
      <Cover>
        <Socials>
          <SocialsUL>
            {data.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialLi>{social.name}</SocialLi>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="28.2842"
                    width="40"
                    height="4"
                    transform="rotate(-45 0 28.2842)"
                    fill="white"
                  />
                </svg>
              </a>
            ))}
          </SocialsUL>
        </Socials>
        <LargeText>
          <h1>My Awards</h1>
        </LargeText>
      </Cover>
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  min-height: 320px;
`
const Cover = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-template-areas: "Award Word";
  padding: 16px;
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "Word"
      "Award";
  }
`
const Socials = styled.div`
  grid-area: Award;
  @media only screen and (max-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const LargeText = styled.div`
  grid-area: Word;
  h1 {
    color: #ffffff;

    opacity: 0.3;
    font-family: "Neue Machina Bold";
    font-size: 160px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.1;
    text-align: right;
    margin: 24px 0;
    @media only screen and (max-width: 650px) {
      font-size: 56px;
      text-align: center;
    }
  }
`

const SocialsUL = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  svg {
    margin: 0 8px;
  }
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: 0.4s ease-in;
    :hover {
      color: ${RuthTheme.secondary};
    }
  }
`
const SocialLi = styled.li`
  font-family: "Neue Machina Regular";
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: ${RuthTheme.white};
  margin: 8px 0;
  transition: 0.4s ease-in;
  :hover {
    color: ${RuthTheme.secondary};
  }
`
export default Awards
