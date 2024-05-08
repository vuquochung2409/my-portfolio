import styled, { css, keyframes } from "styled-components";
import { theme } from "@styles/theme";
import Typography from "@components/Typography";
import useIsInViewport from "@utils/hooks/useItInViewport";
import { useHomeContext } from "../HomeContext";
import { useEffect } from "react";

const bounce = keyframes`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
  `;

const FadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  `;
const DescriptionContainer = styled.section(({ theme }) => ({
  gap: "1rem",
  backgroundColor: theme.colors.secondary,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "calc(100vh)",
  alignItems: "center",
  textAlign: "center",
}));

const AnimatedFadeInUp = css`
  animation: ${FadeInUp} 1.5s;
`;

const Description = styled("div").withConfig({
  shouldForwardProp: (props) => props !== "animated",
})<{ animated: boolean }>`
  margin-top: 32px;
  max-width: 800px;
  line-height: 2rem;
  ${({ animated }) => animated && AnimatedFadeInUp};
`;

const animatedBounce = css`
  animation: ${bounce} 1.5s;
`;

const TitleContainer = styled("div").withConfig({
  shouldForwardProp: (props) => props !== "animated",
})<{ animated: boolean }>`
  ${({ animated }) => animated && animatedBounce};
`;

const WelcomeSection = () => {
  const [isIntersecting, currentElement] = useIsInViewport();
  const { setSection } = useHomeContext();

  useEffect(() => {
    if (isIntersecting) setSection("welcome");
  }, [isIntersecting, setSection]);

  return (
    <DescriptionContainer id="welcome" ref={currentElement}>
      <TitleContainer animated={isIntersecting}>
        <Typography type="xxLarge" fontWeight="bold" color={theme.colors.white}>
          Hi there 👋~ Nice to meet ya!
        </Typography>
      </TitleContainer>
      <Description animated={isIntersecting}>
        <Typography type="medium" color={theme.colors.white}>
          I'm from Ho Chi Minh city Vietnam. After a college life 2 years ago,
          I've become a fulltime developers. Since that day, I have done remote
          work for agencies and collaborated with talented people to create
          digital products for both business and consumer use. I build mobile
          and web app with{" "}
          <Typography
            color={theme.colors.white}
            textDecoration="underline"
            textDecorationColor={theme.colors.primary}
          >
            passion
          </Typography>
          ,{" "}
          <Typography
            color={theme.colors.white}
            textDecoration="underline"
            textDecorationColor={theme.colors.primary}
          >
            dedication
          </Typography>{" "}
          and{" "}
          <Typography
            color={theme.colors.white}
            textDecoration="underline"
            textDecorationColor={theme.colors.primary}
          >
            precision.
          </Typography>
        </Typography>
      </Description>
    </DescriptionContainer>
  );
};

export default WelcomeSection;
