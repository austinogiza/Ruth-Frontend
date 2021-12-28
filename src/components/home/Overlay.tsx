import React from "react"
import styled from "styled-components"
import { RuthTheme } from "styles/ColorStyles"

const Overlay = () => {
  return (
    <Body className="overlay_body">
      <Top>
        <OverlayTop className="overlay_top" />
        <OverlayTop className="overlay_top" />
        <OverlayTop className="overlay_top" />
      </Top>
    </Body>
  )
}

const Body = styled.div`
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 40;
  left: 0;
  top: 0;
`
const Top = styled.div`
  position: absolute;
  height: 100%;

  width: 100%;
  z-index: 40;
  left: 0;
  top: 0;
`
const OverlayTop = styled.div`
  position: absolute;
  height: 100%;
  background: ${RuthTheme.secondary};
  width: 34%;
  z-index: 40;
  left: 0;
  top: 0;

  &:nth-child(2) {
    left: 33%;
    background: ${RuthTheme.secondary};
  }

  &:nth-child(3) {
    left: 66%;
    background: ${RuthTheme.secondary};
  }
`
export default Overlay
