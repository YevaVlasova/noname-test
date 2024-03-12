import Layout from "./Layout";
import "../styles/About.scss";
import AboutTechnologies from "./About_components/AboutTechnologies";
import AboutData from "./About_components/AboutData";
import { useEffect, useRef, useState } from "react";
import { handleSlide } from "../services/titleAnimationService";

const About = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(1400);

  useEffect(() => {
    const handleScrollEvent = () => handleSlide(titleRef);
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (windowWidth < 575) {
      setHeight(2000);
    }
    if (windowWidth < 1246 && windowWidth > 575) {
      setHeight(1800);
    }
    if (windowWidth > 1246) {
      setHeight(1400);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="About" id="about">
      <Layout height={height}>
        <div className="About_page">
          <h1 className="About_title" ref={titleRef}>
            Our Services
          </h1>
          <div className="About_body">
            <AboutData></AboutData>
            <AboutTechnologies></AboutTechnologies>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
