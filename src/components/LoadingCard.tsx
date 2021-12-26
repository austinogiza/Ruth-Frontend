import React from "react"
import styled, { keyframes } from "styled-components"

const LoadingCard = () => {
  return (
    <Body>
      <Image />
      <Text />
      <SmallText />
      <SmallText />
      <Shimmer>
        <ShimmerHalf />
      </Shimmer>
    </Body>
  )
}

const Body = styled.div`
  height: 350px;
  width: 100%;
  max-width: 400px;
  background: #f2f2f2;
  margin: 8px 0;
  padding: 24px;
  overflow: hidden;
  position: relative;
`
const animationLoading = keyframes`
0%{
transform: translateX(-150%);
}

50%{
    transform: translateX(-60%);
}
100%{
    transform: translateX(150%);
}
`

const Shimmer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  position: absolute;
  animation: ${animationLoading} 1.5s infinite;
`

const ShimmerHalf = styled.div`
  width: 50%;
  height: 100%;
  transform: skewX(-20deg);
  background: rgba(255, 255, 255, 0.8);
`
const Image = styled.div`
  height: 180px;
  width: 100%;
  margin: 16px 0;
  background: #ddd;
`
const Text = styled.div`
  height: 30px;
  margin: 8px 0;
  width: 100%;
  background: #ddd;
`
const SmallText = styled.div`
  height: 10px;
  width: 50%;
  margin: 8px 0;
  background: #ddd;
`
export default LoadingCard
