import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { RuthTheme } from "styles/ColorStyles"

const Message = () => {
  const data = [
    { name: "GitHub", link: "" },
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
          <Link to="/contact">
            <h1>GET IN TOUCH</h1>
          </Link>
        </LargeText>
      </Cover>
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  min-height: 320px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Cover = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px;
`
const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
`
const LargeText = styled.div`
  position: absolute;
  top: 50%;
  z-index: 1;
  width: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    color: #ffffff;

    opacity: 0.3;
    font-family: "Neue Machina Bold";
    font-size: 160px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.1;
    text-align: center;

    margin: 24px 0;
    transition: 0.4s ease-in;
    @media only screen and (max-width: 650px) {
      font-size: 56px;
    }

    :hover {
      color: ${RuthTheme.secondary};
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

  color: ${RuthTheme.white};
  margin: 8px 0;
  transition: 0.4s ease-in;
  :hover {
    color: ${RuthTheme.secondary};
  }
`
export default Message
