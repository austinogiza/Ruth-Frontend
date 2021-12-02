import styled from "styled-components";
import error from "images/error.svg";
import { RuthTheme } from "styles/ColorStyles";
import { Header1, Body1 } from "styles/TextStyles";
import { MainButton } from "styles/ButtonStyles";
import { Link } from "react-router-dom";
import React, { FC, useEffect } from "react";

const Error: FC = () => {
  useEffect(() => {
    document.title = "Page Not Found - Ruth Ikegah";
  }, []);

  return (
    <Body>
      <Cover>
        <ImageWrapper src={error} alt="404" />

        <Title>Page Not Found</Title>
        <Text>
          The page you are looking for doesn’t exist or has been moved. Kindly
          head home
        </Text>
        <Link to="/">
          <ErrorButton>Head home</ErrorButton>
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

const ImageWrapper = styled.img`
  max-width: 510px;
  max-height: 400px;
  min-height: 250px;
  width: 100%;
  height: 100%;
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
