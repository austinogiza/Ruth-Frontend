import { BodyWrapper } from "container/Wrapper";
import { FC } from "react";
import styled from "styled-components";

const ContactForm: FC = () => {
  return (
    <Body>
      <Wrapper></Wrapper>
    </Body>
  );
};

const Body = styled.div``;

const Wrapper = styled(BodyWrapper)``;
export default ContactForm;
