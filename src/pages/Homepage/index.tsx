import styled from "styled-components";
import OpenSection from "./components/OpenSection";
import WelcomeSection from "./components/WelcomeSection";
import TechSection from "./components/TechSection";
import { HomeProvider } from "./HomeContext";
import SectionNav from "./components/SectionNav";

const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Homepage = () => {
  return (
    <HomeProvider>
      <HomePageContainer>
        <OpenSection />
        <WelcomeSection />
        <TechSection />
        <SectionNav />
      </HomePageContainer>
    </HomeProvider>
  );
};

export default Homepage;
