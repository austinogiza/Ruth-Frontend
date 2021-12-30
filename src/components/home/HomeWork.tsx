import WorkWrapper from "components/WorkWrapper"
import styled from "styled-components"
import { MainButton } from "styles/ButtonStyles"
import { RuthTheme } from "styles/ColorStyles"
import { Header3 } from "styles/TextStyles"
import { Link } from "react-router-dom"
import React, { FC } from "react"
import axios from "axios"
import { useQuery } from "react-query"
import { HomeWorkDataURL } from "constants/Constants"
import LoadingCard from "components/LoadingCard"

const HomeWork: FC = () => {
  const fetchWorks = () => {
    return axios.get(HomeWorkDataURL)
  }

  const { isLoading, data } = useQuery("home-works", fetchWorks, {
    cacheTime: 10000,
  })

  return (
    <Body>
      <Cover>
        <Title>
          <TitleText>Selected work</TitleText>
        </Title>

        <DoBox>
          {isLoading && [1, 2].map((data, index) => <LoadingCard />)}
          {data &&
            data.data.map((data: any) => (
              <WorkWrapper
                key={data.id}
                src={data.image}
                slug={`${data.slug}`}
                title={data.title}
                label={data.label}
              />
            ))}
        </DoBox>

        <BlogButtonCover>
          <Link to="/works">
            <BlogButton>View more work</BlogButton>
          </Link>
        </BlogButtonCover>
      </Cover>
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  margin: 80px 0;

  @media only screen and (max-width: 650px) {
    margin: 40px 0;
  }
`

const Cover = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 500px;
  height: 100%;
`
const Title = styled.div`
  max-width: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-height: 40px;
  height: 100%;
  padding: 16px;
  position: relative;
  @media only screen and (max-width: 650px) {
    max-width: 320px;
  }

  ::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 6px;
    background: ${RuthTheme.white};
    border-radius: 0px;
  }
`
const TitleText = styled(Header3)`
  color: ${RuthTheme.white};
`
const DoBox = styled.div`
  margin: 64px auto;
  max-width: 1278px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding: 16px;
  place-items: center;
  justify-content: center;

  grid-gap: 32px;

  @media only screen and (max-width: 650px) {
    margin: 40px 0;
    place-items: center;
    justify-content: center;
    gap: 16px;
    grid-gap: 16px;

    grid-template-columns: repeat(1, 1fr);
  }
`

const BlogButtonCover = styled.div`
  min-height: 40px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`
const BlogButton = styled(MainButton)``

export default React.memo(HomeWork)
