import React, { FC, useEffect, useState } from "react"
import styled from "styled-components"
import { RuthTheme } from "styles/ColorStyles"
import { LightTinySub } from "styles/TextStyles"
import { VscChromeClose } from "react-icons/vsc"
interface NotiProps {
  close: () => void
}

interface ScrollProps {
  scroll: any
}
const Notification: FC<NotiProps> = (props) => {
  const { close } = props
  const [scroll, setScroll] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400 || window.pageYOffset > 400) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }, [])

  return (
    <Body scroll={scroll}>
      <CloseIcon onClick={close} />
      <Cover>
        <MessageText>Message sent successfully </MessageText>
      </Cover>
    </Body>
  )
}

const Body = styled.div<ScrollProps>`
  width: 100%;
  max-width: 400px;
  border-radius: 32px;
  height: 160px;
  background: ${RuthTheme.white};

  color: ${RuthTheme.primary};
  display: flex;
  transition: 0.4s ease-in;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 40px;
  top: 40px;
  z-index: 48;
`
const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const MessageText = styled(LightTinySub)`
  color: ${RuthTheme.primary};
`

const CloseIcon = styled(VscChromeClose)`
  width: 24px;
  height: 24px;
  color: ${RuthTheme.primary};
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
`
export default Notification
