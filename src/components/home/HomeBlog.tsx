import styled from "styled-components"
import { BlogButton } from "styles/ButtonStyles"
import { RuthTheme } from "styles/ColorStyles"
import { Header3, Header6, LightTinySub } from "styles/TextStyles"
import { gql } from "graphql-request"
import { useQuery } from "react-query"
const HomeBlog = () => {
  async function gql(query: any, variables = {}) {
    const data = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    return data.json()
  }

  const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "ikegah_ruth") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    dateAdded
                    coverImage
                }
            }
        }
    }
`

  const fetchBlog = () => {
    return gql(GET_USER_ARTICLES, { page: 0 })
  }

  const { data } = useQuery("ruth-blog", fetchBlog, {
    cacheTime: 10000,
  })

  console.log(data)
  return (
    <Body>
      <Cover>
        <Title>
          <TitleText>My Blog</TitleText>
        </Title>

        <DoBox>
          {data &&
            data.data.user.publication.posts
              .slice(0, 3)
              .map((data: any, index: any) => (
                <BlogCover key={index}>
                  <a
                    href={`https://ruthikegah.xyz/${data.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                  </a>
                  <BlogImage src={data.coverImage} alt="Ruth Ikegah" />
                  <BlogDate>
                    {new Date(`${data.dateAdded}`).toDateString()}
                  </BlogDate>
                  <BlogTitle>{data.title}</BlogTitle>
                </BlogCover>
              ))}
        </DoBox>

        <BlogButtonCover>
          <BlogButtonHref
            href="https://ruthikegah.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            See full blog
          </BlogButtonHref>
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
  place-items: flex-start;
  justify-content: flex-start;

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

  min-height: 300px;
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
  height: 500px;
  max-height: 500px;
  max-width: 400px;
  width: 100%;
  border-radius: 8px;
  margin: 0 0 24px 0;
  @media only screen and (max-width: 650px) {
    height: 100%;
    min-height: 250px;
  }
`
const BlogTitle = styled(Header6)`
  margin: 8px 0;
  color: ${RuthTheme.white};
`
const BlogDate = styled(LightTinySub)`
  color: ${RuthTheme.gray};
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
const BlogButtonHref = styled(BlogButton)``
export default HomeBlog
