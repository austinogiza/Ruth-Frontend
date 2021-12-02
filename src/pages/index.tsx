import HomeBlog from "@/components/home/HomeBlog";
import HomeDo from "@/components/home/HomeDo";
import HomeHero from "@/components/home/HomeHero";
import HomeLearn from "@/components/home/HomeLearn";
import HomeWork from "@/components/home/HomeWork";
import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Body>
      <HomeHero />
      <HomeLearn />
      <HomeDo />
      <HomeWork />
      <HomeBlog />
    </Body>
  );
};

const Body = styled.div``;
export default Home;
