import ContactForm from "components/contact/ContactForm";
import ContactHero from "components/contact/ContactHero";

import { FC } from "react";

import styled from "styled-components";

const Contact: FC = () => {
  return (
    <Body>
      <ContactHero />
      <ContactForm />
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Contact;
