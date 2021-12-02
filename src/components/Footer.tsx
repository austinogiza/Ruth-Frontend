import { FC } from "react";
import styled from "styled-components";

import { useLocation } from "react-router-dom";

const Footer: FC = () => {
  const router = useLocation();
  return (
    <>
      {router.pathname === "*" ? null : (
        <>
          <Body>
            <Cover>
              <Logo></Logo>
              <CopyRight>&copy; {new Date().getFullYear()}</CopyRight>
            </Cover>
          </Body>
        </>
      )}
    </>
  );
};

const Body = styled.footer``;
const Cover = styled.div``;
const Logo = styled.div``;
const CopyRight = styled.div``;

export default Footer;
