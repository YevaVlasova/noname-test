import { useEffect, useRef, useState } from "react";
import "../styles/Main.scss";
import Layout from "./Layout";
import { handleMainSlide } from "../services/titleAnimationService";

const Main = () => {
  const mainImageRef = useRef<HTMLImageElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(1300);
  useEffect(() => {
    const handleScrollEvent = () => {
      handleMainSlide(mainImageRef);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    handleMainSlide(mainImageRef);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (windowWidth < 750) {
      setHeight(1000);
    }
    if (windowWidth > 750) {
      setHeight(1300);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="Main" id="home">
      <Layout height={height}>
        <div className="Main_images">
          <img src="../lights.png" alt="" className="Main_lights" loading="lazy" />
          <div className="Main_circle"></div>
          <img src="../image 1.png" alt="" className="Main_code_image" ref={mainImageRef} loading="lazy" />
          <div className="Main_text">
            <h1 className="Main_colored_title">Digital</h1>
            <h1 className="Main_title">Development</h1>
            <p className="Main_about">
              Our journey began with a passion for visual storytelling and a commitment to turning ideas into impactful
              designs. With a team of dedicated professionals, we've honed our skills to deliver exceptional results for
              our clients.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Main;
