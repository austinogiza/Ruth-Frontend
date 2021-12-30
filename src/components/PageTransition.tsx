import React from "react"
import styled from "styled-components"
import { RuthTheme } from "styles/ColorStyles"
import Spinner from "react-spinner-material"
const PageTransition = () => {
  return (
    <Body>
      <Spinner radius={24} color={"#fff"} stroke={2} visible={true} />
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  background: ${RuthTheme.primary};
  display: flex;
  position: fixed;
  z-index: 60;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  color: ${RuthTheme.white};
`
export default React.memo(PageTransition)
