import { useEffect, useState } from "react";
import "../styles/Main.scss";
import Layout from "./Layout";

const Main = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const offset = scrollPosition / 5;
  const height = 1100;

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Main">
      <Layout height={height}>
        <div className="Main_images">
          <img src="../lights.png" alt="" className="Main_lights" />
          <div className="Main_circle"></div>
          <img src="../image 1.png" alt="" className="Main_code_image" />
          <div className="Main_text">
            <h1
              className="Main_colored_title"
              style={{ transform: `translateX(${offset}px)`, opacity: 1 - offset / 100 }}
            >
              Digital
            </h1>
            <h1 className="Main_title" style={{ transform: `translateX(${offset}px)`, opacity: 1 - offset / 100 }}>
              Development
            </h1>
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
