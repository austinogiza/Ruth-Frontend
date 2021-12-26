import WorkWrapper from "components/WorkWrapper"
import styled from "styled-components"

import { RuthTheme } from "styles/ColorStyles"
import { Header3 } from "styles/TextStyles"
import { useQuery } from "react-query"
import { WorkDataURL } from "constants/Constants"
import { FC } from "react"
import axios from "axios"
import LoadingCard from "components/LoadingCard"
interface WorkProps {
  id?: number | string
  title?: string
  slug?: string
  label?: string
  image?: string
}
const WorkBody: FC<WorkProps> = (props) => {
  const fetchWorks = () => {
    return axios.get(WorkDataURL)
  }
  const { isLoading, data } = useQuery("works", fetchWorks, {
    cacheTime: 30000,
  })

  return (
    <Body>
      <Cover>
        <Title>
          <TitleText>My work</TitleText>
        </Title>

        <DoBox>
          {isLoading &&
            [1, 2].map((data, index) => <LoadingCard key={index} />)}
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
      </Cover>
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0;
`

const Cover = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 24px auto;
  min-height: 500px;
  height: 100%;
`
const Title = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px auto 24px auto;
  min-height: 40px;
  height: 100%;
  padding: 16px;
  position: relative;

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

export default WorkBody
