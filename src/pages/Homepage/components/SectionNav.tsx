import styled from "styled-components";
import { useHomeContext } from "../HomeContext";

const SectionButtonContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  right: 2%;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
`;

const StyledSectionButton = styled.a`
  width: 10px;
  height: 10px;
  background-color: #000;
  transform: rotate(45deg);
  cursor: pointer;
  transition: all 0.7s ease;
  border: 1px solid #000;


  &.active {
    transition: all 0.7s ease;
    background-color: #f3f3f3;
    transform: rotate(0); 
    transform: scale(1.3);
`;

type btnType = {
  id: string;
  onClick: () => void;
  checkActive: boolean;
};

const SectionButton = ({ id, onClick, checkActive = false }: btnType) => {
  return (
    <StyledSectionButton
      className={checkActive ? "active" : ""}
      href={`#${id}`}
      onClick={onClick}
    />
  );
};

const SectionNav = () => {
  const { currentSection, setSection } = useHomeContext();

  return (
    <SectionButtonContainer>
      <SectionButton
        id="open"
        onClick={() => setSection("open")}
        checkActive={currentSection === "open"}
      />
      <SectionButton
        id="welcome"
        onClick={() => setSection("welcome")}
        checkActive={currentSection === "welcome"}
      />
      <SectionButton
        id="tech"
        onClick={() => setSection("tech")}
        checkActive={currentSection === "tech"}
      />
    </SectionButtonContainer>
  );
};

export default SectionNav;
