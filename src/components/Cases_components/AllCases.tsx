import { useEffect, useRef } from "react";
import "../../styles/Cases.scss";
import "../../styles/Adaptation.scss";
import { handleAnimation } from "../../services/titleAnimationService";
import { casesData, companiesLogo } from "../../services/casesDataService";

const AllCases = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const bigCaseRef = useRef<HTMLHeadingElement | null>(null);
  const smallCaseRightRef = useRef<HTMLHeadingElement | null>(null);
  const smallCaseLeftRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const handleScrollEvent = () => {
      handleAnimation(titleRef);
      handleAnimation(bigCaseRef);
      handleAnimation(smallCaseRightRef);
      handleAnimation(smallCaseLeftRef);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div className="AllCases">
      <h1 className="AllCases_title" ref={titleRef}>
        Modern cases
      </h1>
      <div className="Main_Case" ref={bigCaseRef}>
        <div className="Main_Case_left">
          <div className="Main_Case_left_projects">
            <h1>350+</h1>
            <span></span>
            <h4>implemented projects in IT</h4>
          </div>
          <span className="Main_Case_underline"></span>
          <p className="Main_Case_left_about">
            Over the course of 22 years, we have gained a lot of experience and know better than anyone else what to
            focus on, how to avoid fatal mistakes and how to determine the route and tools to move forward.
          </p>
          <span className="Main_Case_underline"></span>
          <button className="Main_Case_left_btn --shine">
            About our company{" "}
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/05010d/sort-right.png"
              alt="sort-right"
              loading="lazy"
            />
          </button>
        </div>
        <div className="Main_Case_right">
          <div className="Main_Case_right_header">
            <div className="Main_Case_right_header_left">
              <div className="Main_Case_right_header_circle"></div>
              <h3 className="Main_Case_right_header_title">Our approach</h3>
            </div>
            <div className="Main_Case_right_header_right">
              <p>
                We will be with you at every stage of development, from the first consultation to the release of the of
                the project. We'll also provide ongoing support.
              </p>
            </div>
          </div>
          <div className="Main_Case_right_body">
            <div className="Main_Case_right_data">
              <h1 className="Main_Case_right_body_count">8</h1>
              <span></span>
              <p className="Main_Case_right_body_text">steps to turn your ideas into reality</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Small_Cases">
        <div className="Small_Case_right" ref={smallCaseRightRef}>
          <div className="Small_Case_scroll">
            {casesData.map((item, index) => (
              <div className="Small_Case_right_item" key={index}>
                <div
                  className="Small_Case_right_img"
                  style={{
                    backgroundImage: `${item.image}`,
                  }}
                >
                  <div className="Small_Case_right_img_type">{item.type}</div>
                </div>
                <div className="Small_Case_right_text">
                  <h1>{item.title}</h1>
                  <h5>{item.text}</h5>
                  {item.id !== 5 ? <span></span> : <div></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="Small_Case_left" ref={smallCaseLeftRef}>
          <h1 className="Small_Case_left_title">Our clients</h1>
          <div className="Small_Case_left_slider">
            <div className="Small_Case_left_slide_track">
              {companiesLogo.map((item, index) => (
                <div className="Small_Case_left_slide" key={index}>
                  <img src={item.url} alt="" loading="lazy" />
                </div>
              ))}
              {companiesLogo.map((item, index) => (
                <div className="Small_Case_left_slide" key={index}>
                  <img src={item.url} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCases;
