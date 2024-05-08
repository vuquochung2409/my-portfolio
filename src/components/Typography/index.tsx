import React from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

type TypographyProps = {
  children?: React.ReactNode;
  type?: keyof typeof theme.fontSizes;
  color?: string;
  fontWeight?: string;
  textDecoration?: string;
  textDecorationColor?: string;
};

const StyledTypography = styled.span<TypographyProps>(
  ({ theme, type, color, fontWeight, textDecoration }) => ({
    fontSize: theme.fontSizes?.[type || "medium"],
    color: color || theme.colors.black,
    fontWeight: fontWeight || "200",
    borderBottom: textDecoration ? `3px solid ${theme.colors.primary}` : "0",
  })
);

const Typography = ({
  children,
  type,
  color,
  fontWeight,
  textDecoration,
}: TypographyProps) => {
  return (
    <StyledTypography
      type={type}
      color={color}
      fontWeight={fontWeight}
      textDecoration={textDecoration}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
