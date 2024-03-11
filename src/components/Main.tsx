import { useEffect, useRef } from "react";
import "../styles/Main.scss";
import Layout from "./Layout";
import { handleMainSlide } from "../services/titleAnimationService";

const Main = () => {
  const mainImageRef = useRef<HTMLImageElement | null>(null);
  const height = 1300;
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

  return (
    <div className="Main">
      <Layout height={height}>
        <div className="Main_images">
          <img src="../lights.png" alt="" className="Main_lights" />
          <div className="Main_circle"></div>
          <img src="../image 1.png" alt="" className="Main_code_image" ref={mainImageRef} />
          <div className="Main_text">
            <h1 className="Main_colored_title">Digital</h1>
            <h1 className="Main_title">Development</h1>
            <p className="Main_about">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos magni, sed quam nam consequuntur
              impedit vero quo. Labore blanditiis incidunt perferendis. Ipsum, nihil provident facilis dolorum impedit
              voluptates! Tenetur, dolore!
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Main;
