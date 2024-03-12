import CasesSlider from "./Cases_components/Cases_slider";
import Layout from "./Layout";
import AllCases from "./Cases_components/AllCases";
import "../styles/CasesCarousel.scss";
import "../styles/Adaptation.scss";
import { useEffect, useState } from "react";

const Cases = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(2600);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (windowWidth < 950) {
      setHeight(2700);
    }
    if (windowWidth < 1246 && windowWidth > 950) {
      setHeight(2900);
    }
    if (windowWidth > 1246) {
      setHeight(2600);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="Cases" id="cases">
      <Layout height={height}>
        <div className="Cases_body">
          <CasesSlider></CasesSlider>
          <AllCases></AllCases>
        </div>
      </Layout>
    </div>
  );
};

export default Cases;
