import { FC } from "react";
import styled from "styled-components";
import Link from "next/link";
import ImageWrapper from "@/components/ImageWrapper";
import { RuthTheme } from "@/styles/ColorStyles";

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
      <Link href={`/work/${slug}`}></Link>
      <ImageWrapper src={src} width={600} height={400} alt={title} />
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
const Title = styled.div``;
export default WorkWrapper;
