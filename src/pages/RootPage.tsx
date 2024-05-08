import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "@components/Footer";
import Topbar from "@components/Topbar";

const RootPageContainer = styled.div`
  width: 100%;
`;

const PageContainer = styled.div`
  margin: 0 auto;
`;

const RootPage = () => {
  return (
    <RootPageContainer>
      <Topbar />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </RootPageContainer>
  );
};

export default RootPage;
