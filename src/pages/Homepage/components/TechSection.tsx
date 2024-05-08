import styled, { css, keyframes } from "styled-components";
import Typography from "@components/Typography";
import {
  Angular,
  AntDesign,
  Css3,
  Flutter,
  Html1,
  Js,
  React,
  StyledComponents,
  Tailwind,
  Ts,
  Vitejs,
  WebpackIcon,
} from "@icons/index";
import { theme } from "@styles/theme";
import useIsInViewport from "@utils/hooks/useItInViewport";
import { useHomeContext } from "../HomeContext";
import { useEffect } from "react";

const ZoomIn = keyframes`
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
    }
  `;

const animatedZoomIn = css`
  animation: ${ZoomIn} 1.5s;
`;

const CaroSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  align-items: center;
  justify-content: center;
  gap: 2rem;
  --color: #e1e1e1;
  background-color: #f3f3f3;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      var(--color) 25%,
      var(--color) 26%,
      transparent 27%,
      transparent 74%,
      var(--color) 75%,
      var(--color) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      var(--color) 25%,
      var(--color) 26%,
      transparent 27%,
      transparent 74%,
      var(--color) 75%,
      var(--color) 76%,
      transparent 77%,
      transparent
    );
  background-size: 55px 55px;
`;

const ToolingSection = styled("div").withConfig({
  shouldForwardProp: (props) => props !== "animated",
})<{ animated: boolean }>`
  background-color: ${theme.colors.white};
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2.5rem;
  ${({ animated }) => animated && animatedZoomIn};
`;

const ToolingRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const ToolingItem = styled.div`
  display: flex;
  gap: 8px;
  min-width: 180px;
  align-items: center;
  justify-content: center;
`;

const TechSection = () => {
  const [isIntersecting, currentElement] = useIsInViewport();
  const { setSection } = useHomeContext();

  useEffect(() => {
    if (isIntersecting) setSection("tech");
  }, [isIntersecting, setSection]);

  return (
    <CaroSection id="tech" ref={currentElement}>
      <ToolingSection animated={isIntersecting}>
        <Typography type="xxLarge">Tooling</Typography>
        <ToolingRow>
          <ToolingItem>
            <React width={25} height={25} />
            <Typography>React</Typography>
          </ToolingItem>
          <ToolingItem>
            <Js width={25} height={25} />
            <Typography>Javascript</Typography>
          </ToolingItem>
          <ToolingItem>
            <Ts width={25} height={25} />
            <Typography>Typescript</Typography>
          </ToolingItem>
          <ToolingItem>
            <Angular width={25} height={25} />
            <Typography>Angular</Typography>
          </ToolingItem>
          <ToolingItem>
            <Flutter width={25} height={25} />
            <Typography>Flutter</Typography>
          </ToolingItem>
        </ToolingRow>
        <ToolingRow>
          <ToolingItem>
            <Html1 width={25} height={25} />
            <Typography>HTML</Typography>
          </ToolingItem>
          <ToolingItem>
            <Css3 width={25} height={25} />
            <Typography>CSS</Typography>
          </ToolingItem>
          <ToolingItem>
            <StyledComponents width={25} height={25} />
            <Typography>styled-components</Typography>
          </ToolingItem>
          <ToolingItem>
            <Tailwind width={25} height={25} />
            <Typography>TailwindCSS</Typography>
          </ToolingItem>
        </ToolingRow>
        <ToolingRow>
          <ToolingItem>
            <AntDesign width={25} height={25} />
            <Typography>Ant Design</Typography>
          </ToolingItem>
          <ToolingItem>
            <WebpackIcon width={25} height={25} />
            <Typography>Webpack</Typography>
          </ToolingItem>
          <ToolingItem>
            <Vitejs width={25} height={25} />
            <Typography>Vite</Typography>
          </ToolingItem>
        </ToolingRow>
      </ToolingSection>
    </CaroSection>
  );
};

export default TechSection;
