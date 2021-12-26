import styled from "styled-components"
import { MainButton } from "styles/ButtonStyles"
import { RuthTheme } from "styles/ColorStyles"
import { Header3, Header6, LightTinySub } from "styles/TextStyles"

const HomeBlog = () => {
  return (
    <Body>
      <Cover>
        <Title>
          <TitleText>My Blog</TitleText>
        </Title>

        <DoBox>
          <BlogCover>
            <a
              href="https://ruthikegah.xyz/yes-i-got-a-yes"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
            <BlogImage
              src="https://res.cloudinary.com/deoofk9nn/image/upload/v1640134099/blogthumb_o6y86y.png"
              alt="Ruth Ikegah"
            />
            <BlogDate>July 1st, 2019 — 7 min read</BlogDate>
            <BlogTitle>Yes, I got a YES!</BlogTitle>
          </BlogCover>
          <BlogCover>
            <a
              href="https://ruthikegah.xyz/yes-i-got-a-yes"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
            <BlogImage
              src="https://res.cloudinary.com/deoofk9nn/image/upload/v1640134099/blogthumb_o6y86y.png"
              alt="Ruth Ikegah"
            />
            <BlogDate>July 1st, 2019 — 7 min read</BlogDate>
            <BlogTitle>Yes, I got a YES!</BlogTitle>
          </BlogCover>
          <BlogCover>
            <a
              href="https://ruthikegah.xyz/yes-i-got-a-yes"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
            <BlogImage
              src="https://res.cloudinary.com/deoofk9nn/image/upload/v1640134099/blogthumb_o6y86y.png"
              alt="Ruth Ikegah"
            />
            <BlogDate>July 1st, 2019 — 7 min read</BlogDate>
            <BlogTitle>Yes, I got a YES!</BlogTitle>
          </BlogCover>
        </DoBox>

        <BlogButtonCover>
          <BlogButton>See full blog</BlogButton>
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
  max-width: 350px;
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
    max-width: 180px;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 16px;
  place-items: center;
  justify-content: center;

  grid-gap: 32px;
  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 650px) {
    margin: 40px 0;
    place-items: center;
    justify-content: center;
    gap: 16px;
    grid-gap: 16px;

    grid-template-columns: repeat(1, 1fr);
  }
`
const BlogCover = styled.div`
  color: ${RuthTheme.white};

  min-height: 400px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 24px 0;

  position: relative;

  a {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const BlogImage = styled.img`
  max-height: 500px;
  min-height: 250px;
  height: 100%;
  max-width: 400px;
  width: 100%;
`
const BlogTitle = styled(Header6)`
  margin: 8px 0;
  color: ${RuthTheme.white};
`
const BlogDate = styled(LightTinySub)`
  color: ${RuthTheme.gray};
  margin: 32px 0 8px 0;
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
export default HomeBlog
