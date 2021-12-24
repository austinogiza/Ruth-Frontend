import { FC } from "react"
import styled from "styled-components"

import { useLocation } from "react-router-dom"
import { RuthTheme } from "styles/ColorStyles"
import { TinySub } from "styles/TextStyles"

const Footer: FC = () => {
  const data = [
    { name: "twitter", link: "" },
    { name: "email", link: "" },
    { name: "github", link: "" },
  ]
  const router = useLocation()
  return (
    <>
      {router.pathname === "*" ? null : (
        <>
          <Body>
            <Cover>
              <Logo></Logo>
              <CopyRight>
                <CopyText>Copyright &copy; {new Date().getFullYear()}</CopyText>
              </CopyRight>

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
                    </a>
                  ))}
                </SocialsUL>
              </Socials>
            </Cover>
          </Body>
        </>
      )}
    </>
  )
}

const Body = styled.footer`
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Cover = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
`
const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0;
`
const CopyRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 8px 0;
  justify-content: center;
`

const CopyText = styled(TinySub)`
  color: ${RuthTheme.white};
`
const Socials = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0;
`
const SocialsUL = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  a {
    margin: 0 8px;

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
export default Footer
