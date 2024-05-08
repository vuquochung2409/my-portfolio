import styled, { css, keyframes } from "styled-components";

import Image from "@components/Image";
import Typography from "@components/Typography";
import { theme } from "@styles/theme";
import myAvatar from "@assets/images/appleavatar.png";

import SpotifyModal from "./SpotifyModal";
import useIsInViewport from "@utils/hooks/useItInViewport";
import { useHomeContext } from "../HomeContext";
import { useEffect } from "react";
import { Facebook, GithubIcon2, GmailIcon2, LinkedinIcon2 } from "@icons/index";

const CaroSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
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

const backInLeft = keyframes`
    0% {
      transform: translateX(-2000px) scale(0.7);
      opacity: 0.7;
    }

    80% {
      transform: translateX(0px) scale(0.7);
      opacity: 0.7;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
    `;

const backInRight = keyframes`
    0% {
      transform: translateX(3000px) scale(0.7);
      opacity: 0.7;
    }

    80% {
      transform: translateX(0px) scale(0.7);
      opacity: 0.7;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
`;

const animateBackInLeft = css`
  animation: ${backInLeft} 1.5s;
`;

const animateBackInRight = css`
  animation: ${backInRight} 1.5s;
`;

const InformationZone = styled("div").withConfig({
  shouldForwardProp: (props) => props !== "animated",
})<{ animated: boolean }>`
  display: flex;
  align-items: center;
  ${({ animated }) => animated && animateBackInLeft};
`;

const SpotifyContainer = styled("div").withConfig({
  shouldForwardProp: (props) => props !== "animated",
})<{ animated: boolean }>`
  ${({ animated }) => animated && animateBackInRight};
`;

const NameZone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MouseContainer = styled.div`
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
`;

const mouseScrollAnimation = keyframes`
  100% {
    opacity: 0;
    top: 27px;
  }
`;

const Mouse = styled.div`
  position: relative;
  width: 25px;
  height: 40px;
  border-radius: 60px;
  overflow: hidden;
  border: 2px solid #334155;

  &::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #334155;
    opacity: 1;
    animation: ${mouseScrollAnimation} 1.3s infinite;
  }
`;

const ContactZone = styled.div`
  position: absolute;
  left: 2%;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
`;

const ContactContainer = styled.a`
  padding: 10px;
  height: 50px;
  border-radius: 8px;
  transition: all 0.5 ease;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.5);
    transition: all 0.3s ease;
  }
  cursor: pointer;
`;

const OpenSection = () => {
  const [isIntersecting, currentElement] = useIsInViewport();
  const { setSection } = useHomeContext();

  useEffect(() => {
    if (isIntersecting) setSection("open");
  }, [isIntersecting, setSection]);

  return (
    <CaroSection id="open" ref={currentElement}>
      <ContactZone>
        <ContactContainer href="https://www.facebook.com/quochung.vu.752/">
          <Facebook width={30} height={30} />
        </ContactContainer>
        <ContactContainer href="https://www.linkedin.com/in/quoc-hung-vu-8125612a1/">
          <LinkedinIcon2 width={30} height={30} />
        </ContactContainer>
        <ContactContainer href="https://www.github.com/vuquochung2409">
          <GithubIcon2 width={30} height={30} />
        </ContactContainer>
        <ContactContainer href="mailto:vuquochung2409@gmail.com">
          <GmailIcon2 width={30} height={30} />
        </ContactContainer>
      </ContactZone>
      <InformationZone animated={isIntersecting}>
        <Image link={myAvatar} width={250} height={200} />
        <NameZone>
          <Typography type="xxxLarge" color={theme.colors.black}>
            Vu Quoc Hung
          </Typography>
          <Typography type="large" color={theme.colors.grey}>
            ♂ | 23
          </Typography>
          <Typography type="large" color={theme.colors.grey}>
            👨‍💻 Mobile/Web Frontend Developer 👨‍💻
          </Typography>
        </NameZone>
      </InformationZone>
      <SpotifyContainer animated={isIntersecting}>
        <SpotifyModal />
      </SpotifyContainer>
      <MouseContainer>
        <Mouse />
      </MouseContainer>
    </CaroSection>
  );
};

export default OpenSection;
