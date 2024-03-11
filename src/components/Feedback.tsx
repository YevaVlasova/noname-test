import { useEffect, useState } from "react";
import CompaniesFeedback from "./Feedback_components/CompaniesFeedback";
import YourFeedback from "./Feedback_components/YourFeedback";
import Layout from "./Layout";

const Feedback = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(1400);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (windowWidth < 1246) {
      setHeight(2500);
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
    <div className="Feedback" id="feedback">
      <Layout height={height}>
        <div className="Feedback_body" style={{ height: height }}>
          <CompaniesFeedback></CompaniesFeedback>
          <YourFeedback></YourFeedback>
        </div>
      </Layout>
    </div>
  );
};

export default Feedback;
