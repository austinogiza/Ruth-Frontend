import styled from "styled-components"
import { RuthTheme } from "./ColorStyles"

export const MainInput = styled.input`
  width: 100%;

  height: 56px;
  max-width: 500px;
  background: ${RuthTheme.primary};
  border: 1px solid ${RuthTheme.white};
  border-radius: 16px;
  outline: none;
  padding: 16px;
  transition: 0.4s ease-in;
  font-family: "Inter";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;

  color: ${RuthTheme.white};

  ::placeholder {
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;

    color: ${RuthTheme.white};
  }
  :focus {
    outline: none;
  }
  :hover {
    outline: none;
    border: 2px solid ${RuthTheme.white};
  }
`

export const MainTextArea = styled.textarea`
  width: 100%;
  padding: 16px;
  height: 400px;
  max-width: 500px;
  background: ${RuthTheme.primary};
  border: 1px solid ${RuthTheme.white};
  border-radius: 16px;
  outline: none;
  transition: 0.4s ease-in;
  font-family: "Inter";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;

  color: ${RuthTheme.white};

  ::placeholder {
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;

    color: ${RuthTheme.white};
  }

  :focus {
    outline: none;
  }
  :hover {
    outline: none;
    border: 2px solid ${RuthTheme.white};
  }
`
