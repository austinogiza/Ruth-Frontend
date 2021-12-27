import { FC, useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import styled from "styled-components"
import { RuthTheme } from "styles/ColorStyles"
import { TinySub } from "styles/TextStyles"
import logo from "images/logo.svg"

interface NavbarProps {
  toggle: any
}
const Navbar: FC = () => {
  const [menu, setMenu] = useState<boolean>(false)

  const location = useLocation()
  useEffect(() => {
    setMenu(false)
  }, [location])

  const clickToggle = () => {
    setMenu(!menu)
  }
  return (
    <Body>
      <Cover>
        <NavLogo>
          <Link to="/">
            <Logo src={logo} alt="Ruth Ikegah Logo" />
            <LogoText>Developer Advocate + GitHub Star </LogoText>
          </Link>
        </NavLogo>
        <NavLinks toggle={menu}>
          <NavUL>
            <NavLink to="/works">
              <NavLI>Work/Speaking</NavLI>
            </NavLink>
            <NavLink to="/about">
              <NavLI>About</NavLI>
            </NavLink>
            <a
              href="https://ruthikegah.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NavLI>Blog</NavLI>
            </a>
            <NavLink to="/contact">
              <NavLI>Contact</NavLI>
            </NavLink>
          </NavUL>
        </NavLinks>
        <MobileToggle onClick={clickToggle}>
          <MobileCover>
            <TopTog toggle={menu} />
            <MiddleTog toggle={menu} />
            <BottomTog toggle={menu} />
          </MobileCover>
        </MobileToggle>
      </Cover>
    </Body>
  )
}

const Body = styled.nav`
  position: absolute;
  z-index: 54;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const Cover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px;
`

const MobileToggle = styled.div`
  position: fixed;
  width: 40px;
  height: 20px;
  right: 16px;
  top: 32px;
  display: none;

  z-index: 50;
  @media only screen and (max-width: 800px) {
    display: flex;
  }
`
const MobileCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 32px;
  height: 20px;

  cursor: pointer;
  transition: 0.4s ease-in;
`
const TopTog = styled.span<NavbarProps>`
  width: 28px;
  height: 2px;
  background: ${RuthTheme.white};
  border-radius: 10px;
  transition: 0.4s ease-in;
  cursor: pointer;
  transform: ${(props) =>
    props.toggle ? " rotate(45deg) translate(-5px,6px)" : "rotate(0)"};
`
const MiddleTog = styled.span<NavbarProps>`
  width: 28px;
  height: 2px;
  transition: 0.4s ease-in;
  background: ${RuthTheme.white};
  margin: 4px 0;
  border-radius: 10px;
  cursor: pointer;
  display: ${(props) => (props.toggle ? "none" : "flex")};
`
const BottomTog = styled.span<NavbarProps>`
  width: 28px;
  height: 2px;
  background: ${RuthTheme.white};
  border-radius: 10px;
  transition: 0.4s ease-in;
  cursor: pointer;
  transform: ${(props) =>
    props.toggle ? " rotate(-45deg) translate(-5px,-6px)" : "rotate(0)"};
`
const NavLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`
const Logo = styled.img`
  height: 40px;
  width: 105px;
`
const LogoText = styled(TinySub)`
  color: ${RuthTheme.white};
`
const NavLinks = styled.div<NavbarProps>`
  @media only screen and (max-width: 800px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.4s ease-in;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 24px;
    background: ${RuthTheme.primary};
    z-index: 43;
    transform: ${(props) =>
      props.toggle ? "translateY(0px)" : "translateY(-2000px)"};
    /* align-items: center; */
  }
`
const NavUL = styled.ul`
  display: flex;
  flex-direction: row;
  a {
    margin: 8px;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`
const NavLI = styled.li`
  height: 40px;
  max-width: 209px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  padding: 11px 34px;
  border: 0.5px solid ${RuthTheme.white};
  transition: 0.4s ease-in;
  color: ${RuthTheme.white};
  font-family: "Neue Machina Bold";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  background: transparent;

  :hover {
    color: ${RuthTheme.primary};
    background: ${RuthTheme.white};
  }
`
export default Navbar
