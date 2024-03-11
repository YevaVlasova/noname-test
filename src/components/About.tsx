import Layout from "./Layout";
import "../styles/About.scss";
import AboutTechnologies from "./About_components/AboutTechnologies";
import AboutData from "./About_components/AboutData";
import { useEffect, useRef } from "react";
import { handleSlide } from "../services/titleAnimationService";

const About = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const height = 1400;

  useEffect(() => {
    const handleScrollEvent = () => handleSlide(titleRef);
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

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
