import styled from "styled-components";

type ImageProps = {
  link?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  borderRadius?: number;
};

const StyledImg = styled.img<ImageProps>(
  ({ width, height, borderRadius, onClick }) => ({
    width: width ?? "auto",
    height: height ?? "auto",
    borderRadius: `${borderRadius ?? 0}%`,
    cursor: onClick ? "pointer" : "default",
  })
);

const Image = ({ link, onClick, ...rest }: ImageProps) => {
  return <StyledImg src={link} onClick={onClick} {...rest} />;
};

export default Image;
