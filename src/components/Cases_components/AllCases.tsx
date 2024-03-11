import { useEffect, useRef } from "react";
import "../../styles/Cases.scss";
import { handleFade, handleSlideSmallLeftCase, handleSlideSmallRightCase } from "../../services/titleAnimationService";
import { casesData, companiesLogo } from "../../services/casesDataService";

const AllCases = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const bigCaseRef = useRef<HTMLHeadingElement | null>(null);
  const smallCaseRightRef = useRef<HTMLHeadingElement | null>(null);
  const smallCaseLeftRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const handleScrollEvent = () => {
      handleFade(titleRef);
      handleFade(bigCaseRef);
      handleSlideSmallRightCase(smallCaseRightRef);
      handleSlideSmallLeftCase(smallCaseLeftRef);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div className="AllCases">
      <h1 className="AllCases_title" ref={titleRef}>
        Сучасні кейси
      </h1>
      <div className="Main_Case" ref={bigCaseRef}>
        <div className="Main_Case_left">
          <div className="Main_Case_left_projects">
            <h1>350+</h1>
            <span></span>
            <h4>реалізованих проєктів у IT</h4>
          </div>
          <span className="Main_Case_underline"></span>
          <p className="Main_Case_left_about">
            Протягом 22 років ми набули крутого досвіду й краще за інших знаємо, на чому фокусуватися, як не допустити
            фатальних помилок та як визначити маршрут та інструменти для руху вперед.
          </p>
          <span className="Main_Case_underline"></span>
          <button className="Main_Case_left_btn --shine">
            Про нашу компанію{" "}
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/05010d/sort-right.png"
              alt="sort-right"
            />
          </button>
        </div>
        <div className="Main_Case_right">
          <div className="Main_Case_right_header">
            <div className="Main_Case_right_header_left">
              <div className="Main_Case_right_header_circle"></div>
              <h3 className="Main_Case_right_header_title">Наш підхід</h3>
            </div>
            <div className="Main_Case_right_header_right">
              <p>
                Ми будемо з вами на кожному етапі розробки, починаючи з першої консультації і закінчуючи релізом
                проєкту. Крім того, ми забезпечимо подальшу підтримку.
              </p>
            </div>
          </div>
          <div className="Main_Case_right_body">
            <div className="Main_Case_right_data">
              <h1 className="Main_Case_right_body_count">8</h1>
              <span></span>
              <p className="Main_Case_right_body_text">кроків для втілення ваших ідей у реальність</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Small_Cases">
        <div className="Small_Case_right" ref={smallCaseRightRef}>
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
        <div className="Small_Case_left" ref={smallCaseLeftRef}>
          <h1 className="Small_Case_left_title">Наші клієнти</h1>
          <div className="Small_Case_left_slider">
            <div className="Small_Case_left_slide_track">
              {companiesLogo.map((item, index) => (
                <div className="Small_Case_left_slide" key={index}>
                  <img src={item.url} alt="" />
                </div>
              ))}
              {companiesLogo.map((item, index) => (
                <div className="Small_Case_left_slide" key={index}>
                  <img src={item.url} alt="" />
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
