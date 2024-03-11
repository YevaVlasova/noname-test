import Layout from "./Layout";
import "../styles/Footer.scss";
import { useEffect, useRef, useState } from "react";
import { handleAnimation } from "../services/titleAnimationService";

const Footer = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(600);

  useEffect(() => {
    const handleScrollEvent = () => {
      handleAnimation(titleRef);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (windowWidth < 1246) {
      setHeight(900);
    }
    if (windowWidth > 1246) {
      setHeight(600);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="Footer" id="footer">
      <Layout height={height}>
        <div className="Footer_body">
          <h1 className="Footer_body_title" ref={titleRef}>
            We transform your business!
          </h1>
          <div className="Footer_promo">
            <div className="Footer_promo_circle"></div>
            <h1 className="Footer_promo_text">Get a detailed and clear commercial offer</h1>
          </div>
          <div className="Footer_feedback">
            <div className="Footer_input_body">
              <div className="Footer_input_section">
                <input type="text" placeholder="What is your name?" />
                <input type="text" placeholder="Your E-mail" />
              </div>
              <div className="Footer_input_section">
                <input type="text" placeholder="Phone number" />
                <input type="text" placeholder="Company" />
              </div>
              <input type="text" placeholder="Tell us about the project" />
              <div className="Footer_data_btn_section">
                <button className="Footer_data_btn --shine">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/external-others-zufarizal-robiyanto/64/05010d/external-attachment-mutuline-stationary-others-zufarizal-robiyanto.png"
                    alt=""
                    loading="lazy"
                  />
                </button>
                <p>Attach a file</p>
              </div>
              <div className="Footer_data_send">
                <div className="Footer_data_btn_send --shine">Discuss the project</div>
              </div>
            </div>
            <div className="Footer_data_table">
              <div className="Footer_data_location">
                {" "}
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios/50/ffffff/globe--v1.png"
                  alt="globe--v1"
                  loading="lazy"
                />
                <p>Kyiv, Ukraine</p>
              </div>
              <p className="Footer_curr_loc">м. 2a Andriy Verkhoglyad Str., office 440 (section 2, floor 23), Kyiv</p>
              <div className="Footer_phone">
                <h1>0 800 566 117</h1>
                <h2>Free of charge in Ukraine</h2>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
