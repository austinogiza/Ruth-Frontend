import styled from "styled-components"
import { RuthTheme } from "./ColorStyles"

export const MainButton = styled.button`
  height: 64px;
  width: 100%;
  max-width: 270px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: none;
  outline: none;
  font-family: "Inter";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  padding: 23px 40px;
  background: ${RuthTheme.secondary};
  color: ${RuthTheme.black};
  transition: all 0.3s ease-in;

  :hover {
    background: ${RuthTheme.white};
  }
  @media only screen and (max-width: 650px) {
    font-size: 15px;
  }
`

export const BorderButton = styled.a`
  height: 56px;
  width: 100%;
  max-width: 160px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: none;
  outline: none;
  font-family: "Inter";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  padding: 23px 40px;
  background: transparent;
  color: ${RuthTheme.white};
  border: 1px solid ${RuthTheme.white};
  transition: all 0.3s ease-in;

  :hover {
    background: ${RuthTheme.white};
    color: ${RuthTheme.primary};
  }
  @media only screen and (max-width: 650px) {
    font-size: 15px;
  }
`
