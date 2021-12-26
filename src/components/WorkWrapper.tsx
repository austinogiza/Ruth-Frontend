import { FC } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import { RuthTheme } from "styles/ColorStyles"
import { Header4, SmallSub, LightSmallSub } from "styles/TextStyles"

interface WorkProps {
  title: string | any
  label: string | any
  slug: string | any

  src: any
}
const WorkWrapper: FC<WorkProps> = (props) => {
  const { slug, src, title, label } = props
  return (
    <Body>
      <WorkLinkHref to={`/work/${slug}`}></WorkLinkHref>
      <ImageCover>
        <Label>
          <LabelText>{label}</LabelText>
        </Label>
        <ImageWrapper src={src} alt={title} />
      </ImageCover>

      <Title>{title}</Title>
      <Link to={`/work/${slug}`}>
        <WorkLink>
          <WorkText> View project</WorkText>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 17V7H7"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </WorkLink>
      </Link>
    </Body>
  )
}
const Body = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;

  min-height: 250px;
  height: 100%;
  margin: 24px auto;
`
const Label = styled.div`
  max-width: 120px;
  width: 100%;
  height: 34px;
  border-radius: 40px;
  padding: 10px, 16px, 10px, 16px;
  border: 1px solid ${RuthTheme.white};
  color: ${RuthTheme.white};
  position: absolute;
  z-index: 6;
  top: 30px;
  left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const WorkLinkHref = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: 2;
  object-fit: cover;
`
const LabelText = styled(SmallSub)`
  color: ${RuthTheme.white};
`
const ImageCover = styled.div`
  max-width: 600px;
  max-height: 400px;
  min-height: 250px;
  width: 100%;
  height: 100%;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`
const ImageWrapper = styled.img`
  max-width: 600px;
  max-height: 400px;
  min-height: 250px;
  width: 100%;
  height: 100%;
`
const Title = styled(Header4)`
  margin: 32px 0 16px 0;
  color: ${RuthTheme.white};
`

const WorkLink = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: ${RuthTheme.white};
  transition: 0.5s ease-in;

  :hover svg {
    transform: rotate(45deg);
  }
  svg {
    width: 24px;
    height: 24px;
    transition: 0.3s ease-in;
    ${Body}:hover & {
      transform: rotate(45deg);
    }
  }
`

const WorkText = styled(LightSmallSub)`
  color: ${RuthTheme.white};

  margin: 0 10px 0 0;
`
export default WorkWrapper
