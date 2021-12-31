import axios from "axios"
import Navbar from "components/Navbar"
import PageLoading from "components/PageLoading"
import { WorkDetailURL } from "constants/Constants"
import React, { FC, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useQuery } from "react-query"
import { Header4, Body2 } from "styles/TextStyles"
import { RuthTheme } from "styles/ColorStyles"
// import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
const WorkDetails: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number | any>(0)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      renderMode: "performance",
      drag: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  const { slug } = useParams()

  const navigate = useNavigate()

  const fetchWorks = () => {
    return axios.get(WorkDetailURL(slug))
  }
  const { isLoading, data, error } = useQuery("works", fetchWorks, {
    cacheTime: 30000,
  })

  if (error) {
    navigate("*")
  }
  useEffect(() => {
    document.title = `${data && data.data?.title}`
  }, [data])
  return (
    <>
      {isLoading && <PageLoading />}

      <Body>
        <Navbar />
        {data && (
          <Cover>
            <WorkHero>
              <WorkImage
                src={data?.data.image && data?.data.image}
                alt={data?.data.title && data?.data.title}
              />
              <HeroCover>
                <WorkTitle>{data?.data.title && data?.data.title}</WorkTitle>
              </HeroCover>
            </WorkHero>
            <WorkOverView>
              <OverviewTitle>Overview</OverviewTitle>
              <OverviewText
                dangerouslySetInnerHTML={{
                  __html: data?.data.overview && data?.data.overview,
                }}
              />

              <WorkSlide>
                <WorkSlideWrapper ref={sliderRef} className="keen-slider">
                  {data?.data.image_1 !== null && (
                    <div className="keen-slider__slide number-slide1">
                      <WorkSlideImages
                        src={data?.data.image_1}
                        alt={data?.data.title && data?.data.title}
                      />
                    </div>
                  )}
                  {data?.data.image_2 !== null && (
                    <div className="keen-slider__slide number-slide2">
                      <WorkSlideImages
                        src={data?.data.image_2}
                        alt={data?.data.title && data?.data.title}
                      />
                    </div>
                  )}
                  {data?.data.image_3 !== null && (
                    <div className="keen-slider__slide number-slide3">
                      <WorkSlideImages
                        src={data?.data.image_3}
                        alt={data?.data.title && data?.data.title}
                      />
                    </div>
                  )}

                  {data?.data.image_4 !== null && (
                    <div className="keen-slider__slide number-slide4">
                      <WorkSlideImages
                        src={data?.data.image_4}
                        alt={data?.data.title && data?.data.title}
                      />
                    </div>
                  )}
                  {data?.data.image_5 !== null && (
                    <div className="keen-slider__slide number-slide5">
                      <WorkSlideImages
                        src={data?.data.image_5}
                        alt={data?.data.title && data?.data.title}
                      />
                    </div>
                  )}
                  {data?.data.image_6 !== null && (
                    <div className="keen-slider__slide number-slide6">
                      <WorkSlideImages
                        src={data?.data.image_6}
                        alt={data?.data.title && data?.data.title}
                      />
                    </div>
                  )}
                </WorkSlideWrapper>
                <WorkSlideIndicator>
                  {loaded && instanceRef.current && (
                    <div className="workdots">
                      {[
                        ...Array(
                          instanceRef.current.track.details.slides.length
                        ).keys(),
                      ].map((idx) => {
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              instanceRef.current?.moveToIdx(idx)
                            }}
                            className={
                              "workdot " +
                              (currentSlide === idx ? " workdots_active" : "")
                            }
                          ></button>
                        )
                      })}
                    </div>
                  )}
                </WorkSlideIndicator>
              </WorkSlide>

              <WorkLink>
                {data?.data.github_link && (
                  <a
                    href={data?.data.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                )}
              </WorkLink>
            </WorkOverView>
          </Cover>
        )}
      </Body>
    </>
  )
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
const Cover = styled.div`
  width: 100%;
  height: 100%;
`
const WorkHero = styled.div`
  width: 100%;
  height: 600px;
  position: relative;

  @media only screen and (max-width: 650px) {
    height: 400px;
  }

  ::after {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    content: "";
    z-index: 3;
    background: rgba(0, 0, 0, 0.4);
  }
`

const WorkImage = styled.img`
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 2;
`

const HeroCover = styled.div`
  max-width: 1280px;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 4;
  margin: 24px auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 16px;
`
const WorkTitle = styled(Header4)`
  color: ${RuthTheme.white};
  margin: 40px 0;
`
const WorkOverView = styled.div`
  max-width: 1280px;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 4;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
`
const OverviewTitle = styled(Header4)`
  color: ${RuthTheme.white};
  margin: 8px 0;
`
const OverviewText = styled(Body2)`
  color: ${RuthTheme.white};
`

const WorkSlideWrapper = styled.div`
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  align-content: flex-start;
  display: flex;
  overflow: hidden;
  position: relative;
  touch-action: pan-y;
  -webkit-user-select: none;
  user-select: none;
  -khtml-user-select: none;
  width: 100%;
`

const WorkSlideIndicator = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 24px;
  margin: 24px 0;
  .workdots {
    height: 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 24px;
    border: none;
  }
  .workdot {
    height: 10px;
    width: 40px;
    background: #a9adc1;
    border: none;
    margin: 8px;
  }
  .workdots_active {
    height: 10px;
    width: 40px;
    border: none;
    margin: 8px;
    background: ${RuthTheme.white};
  }
`
const WorkSlide = styled.div`
  margin: 80px 0;
  @media only screen and (max-width: 650px) {
    margin: 40px 0;
  }

  div {
    max-height: 600px;
    max-width: 1280px;
    width: 100%;
    min-height: 250px;
    height: 100%;
  }
`
const WorkSlideImages = styled.img`
  max-height: 600px;
  max-width: 1280px;
  width: 100%;
  min-height: 250px;
  height: 100%;
`

const WorkLink = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  a {
    color: ${RuthTheme.secondary};
    font-family: "Neue Machina Bold";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.1;
    transition: 0.4s ease-in;
    @media only screen and (max-width: 650px) {
      font-size: 24px;
    }
    :hover {
      color: ${RuthTheme.white};
    }
  }
`

export default WorkDetails
