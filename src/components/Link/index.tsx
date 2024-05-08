import styled from "styled-components";

type LinkProps = {
  children: React.ReactNode;
  url: string;
};

const StyledLink = styled.a(({ theme }) => ({
  borderRadius: "8px",
  padding: "8px",
  textDecoration: "none",
  fontWeight: "300",
  fontSize: theme.fontSizes.medium,
  color: theme.colors.black,
}));

const Link = ({ url, children }: LinkProps) => {
  return <StyledLink href={url}>{children}</StyledLink>;
};

export default Link;
