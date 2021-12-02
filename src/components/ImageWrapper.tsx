import { FC } from "react";
import Image from "next/image";

interface ImageProps {
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  src?: any;
}
const ImageWrapper: FC<ImageProps> = (props) => {
  const { alt, src, width, height, priority } = props;

  return (
    <>
      <Image
        alt={`${alt} - Ruth Ikegah`}
        priority={priority}
        width={width}
        height={height}
        src={src}
      />
    </>
  );
};

export default ImageWrapper;
