import axios from "axios"
import Navbar from "components/Navbar"
import PageLoading from "components/PageLoading"
import { WorkDetailURL } from "constants/Constants"
import { FC } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useQuery } from "react-query"

const WorkDetails: FC = () => {
  const { slug } = useParams()

  const navigate = useNavigate()

  const fetchWorks = () => {
    return axios.get(WorkDetailURL(slug))
  }
  const { isLoading, data } = useQuery("works", fetchWorks, {
    cacheTime: 30000,
  })

  console.log(slug, data)
  // if (error) {
  //   navigate("*")
  // }
  return (
    <>
      {isLoading && <PageLoading />}

      <Body>
        <Navbar />

        <Cover>
          <WorkHero>
            <WorkImage />
            <WorkTitle></WorkTitle>
          </WorkHero>
          <WorkOverView>
            <OverviewTitle>Overview</OverviewTitle>
            <OverviewText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus unde consectetur officia quod distinctio nam
              praesentium impedit temporibus cupiditate, nemo ipsa saepe fuga
              iste harum esse accusantium architecto veniam animi nostrum enim,
              autem iusto odit quaerat repellendus. Animi explicabo magni
              doloremque quibusdam quia recusandae. Numquam inventore
              necessitatibus voluptatibus consectetur totam.
            </OverviewText>
          </WorkOverView>
          <WorkSlide>
            <WorkSlideImages />
          </WorkSlide>
        </Cover>
      </Body>
    </>
  )
}

const Body = styled.div``
const Cover = styled.div``
const WorkHero = styled.div``
const WorkImage = styled.div``
const WorkTitle = styled.div``
const WorkOverView = styled.div``
const OverviewTitle = styled.div``
const OverviewText = styled.div``

const WorkSlide = styled.div``
const WorkSlideImages = styled.div``

export default WorkDetails
