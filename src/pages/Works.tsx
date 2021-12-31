import WorkBody from "components/works/WorkBody"
import React, { FC, useEffect } from "react"
import Navbar from "components/Navbar"
import styled from "styled-components"

const Work: FC = () => {
  useEffect(() => {
    document.title = "My Works - Ruth Ikegah"
  }, [])

  return (
    <Body>
      <Navbar />
      <WorkBody />
    </Body>
  )
}
const Body = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
`
export default Work
