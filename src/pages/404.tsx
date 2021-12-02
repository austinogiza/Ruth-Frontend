import ImageWrapper from "@/components/ImageWrapper";
import type { NextPage } from "next";
import styled from "styled-components";
import error from "@/images/images/error.svg";
import Layout from "@/container/Layout";
import { RuthTheme } from "@/styles/ColorStyles";
import { Header1, Body1 } from "@/styles/TextStyles";
import { MainButton } from "@/styles/ButtonStyles";
import Link from "next/link";

const Error: NextPage = () => {
  return (
    <Body>
      <Layout title="Page Not Found" />
      <Cover>
        <ImageWrapper src={error} alt="404" width={510} height={400} />

        <Title>Page Not Found</Title>
        <Text>
          The page you are looking for doesn’t exist or has been moved. Kindly
          head home
        </Text>
        <Link href="/" passHref>
          <a>
            <ErrorButton>Head home</ErrorButton>
          </a>
        </Link>
      </Cover>
    </Body>
  );
};

const Body = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Cover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 24px auto;
  color: ${RuthTheme.white};
`;
const Title = styled(Header1)`
  color: ${RuthTheme.white};
  margin: 64px 0 16px 0;
`;
const Text = styled(Body1)`
  color: ${RuthTheme.white};
`;

const ErrorButton = styled(MainButton)`
  cursor: pointer;
  margin: 40px 0;
`;
export default Error;
