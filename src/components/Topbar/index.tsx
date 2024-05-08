import { useEffect, useState } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";

import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "@constants/route";

import { Image, Link } from "..";
import myapplogo from "../../../public/myweblogo.png";

const StyledTopbar = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "isScrolled",
})<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  height: 64px;
  padding: 20px 40px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 10px 40px -25px rgba(100, 100, 100, 0.5)" : "0"};
  background-color: ${({ isScrolled }) =>
    isScrolled ? "#fff" : "transparent"};
  transition: all 0.5s ease;
`;

const StyledAppLogoContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
`;

const StyledNav = styled.div`
  display: flex;
  box-sizing: border-box;
  gap: 1rem;
  align-items: center;
`;

const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const isScrolling = window.scrollY > 0;
      setScrolled(isScrolling);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(ROUTE_PATHS.HOME);
  };

  return (
    <StyledTopbar isScrolled={scrolled}>
      <StyledAppLogoContainer>
        <Image link={myapplogo} width={50} onClick={navigateToHome} />
      </StyledAppLogoContainer>
      <StyledNav>
        <Link url={ROUTE_PATHS.HOME}>Home</Link>
        <Link url={ROUTE_PATHS.HOME}>About Me</Link>
        <Link url={ROUTE_PATHS.HOME}>Specs & Gears</Link>
      </StyledNav>
    </StyledTopbar>
  );
};

export default Topbar;
