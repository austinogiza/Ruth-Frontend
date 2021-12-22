import styled from "styled-components"
import { RuthTheme } from "styles/ColorStyles"
import { Header3, Header4, Body2, TinySub } from "styles/TextStyles"

const HomeDo = () => {
  const dodata = [
    {
      number: "01",
      title: "Advocacy",
      text: "A Developer Advocate and GitHub Star. Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and 'No halfway house in the quality of food you serve' is his main motto,says our head-ched Sanjay ",
    },
    {
      number: "02",
      title: "Advocacy",
      text: "A Developer Advocate and GitHub Star. Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and 'No halfway house in the quality of food you serve' is his main motto,says our head-ched Sanjay ",
    },
    {
      number: "03",
      title: "Advocacy",
      text: "A Developer Advocate and GitHub Star. Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and 'No halfway house in the quality of food you serve' is his main motto,says our head-ched Sanjay ",
    },
    {
      number: "04",
      title: "Advocacy",
      text: "A Developer Advocate and GitHub Star. Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and 'No halfway house in the quality of food you serve' is his main motto,says our head-ched Sanjay ",
    },
  ]
  return (
    <Body>
      <Cover>
        <Title>
          <TitleText>What I do</TitleText>
        </Title>

        <DoBox>
          {dodata.map((data) => (
            <DoCover key={data.number}>
              <DoSubTitle>{data.number}</DoSubTitle>
              <DoTitle>{data.title}</DoTitle>
              <DoText>{data.text}</DoText>
            </DoCover>
          ))}
        </DoBox>
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
  margin: 64px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0px;
  grid-gap: 0px;
  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 650px) {
    margin: 40px 0;
    place-items: center;
    justify-content: center;

    grid-template-columns: repeat(1, 1fr);
  }
`
const DoCover = styled.div`
  color: ${RuthTheme.white};
  padding: 16px;
  border: 1px solid ${RuthTheme.white};
  min-height: 400px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
const DoSubTitle = styled(TinySub)`
  color: ${RuthTheme.secondary};
`
const DoTitle = styled(Header4)`
  margin: 8px 0;
`
const DoText = styled(Body2)``

export default HomeDo
