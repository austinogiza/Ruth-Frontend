import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { RuthTheme } from "styles/ColorStyles";

interface WorkProps {
  slug: string;
  title: string;
  src: any;
  label: string;
}
const WorkWrapper: FC<WorkProps> = (props) => {
  const { slug, src, title, label } = props;
  return (
    <Body>
      <Link to={`/work/${slug}`}></Link>
      <ImageWrapper src={src} alt={title} />
      <Label>
        <p>{label}</p>
      </Label>
      <Title>{title}</Title>
    </Body>
  );
};
const Body = styled.div`
  position: relative;
`;
const Label = styled.div`
  height: 34px;
  max-width: 200px;
  width: 100%;
  border-radius: 40px;
  padding: 10px, 16px, 10px, 16px;
  border: 1px solid ${RuthTheme.white};
  color: ${RuthTheme.white};
`;

const ImageWrapper = styled.img`
  max-width: 600px;
  max-height: 400px;
  min-height: 250px;
  width: 100%;
  height: 100%;
`;
const Title = styled.div``;
export default WorkWrapper;
