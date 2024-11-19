import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "../components/Header2";
import Content from "../components/Content";
import "./AboutUsPage.css";

const AboutUsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNavigationLinksContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onNavigationLinksContainerClick1 = useCallback(() => {
    navigate("/about-us-page");
  }, [navigate]);

  return (
    <div className="about-us-page">
      {/* <Header2 /> */}
      <Content />
    </div>
  );
};

export default AboutUsPage;
