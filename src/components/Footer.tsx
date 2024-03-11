import Layout from "./Layout";
import "../styles/Footer.scss";
import { useEffect, useRef } from "react";
import { handleFade } from "../services/titleAnimationService";

const Footer = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const height = 600;

  useEffect(() => {
    const handleScrollEvent = () => {
      handleFade(titleRef);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div className="Footer" id="footer">
      <Layout height={height}>
        <div className="Footer_body">
          <h1 className="Footer_body_title" ref={titleRef}>
            Трансформуємо ваш бізнес!
          </h1>
          <div className="Footer_promo">
            <div className="Footer_promo_circle"></div>
            <h1 className="Footer_promo_text">Отримайте детальну та зрозумілу комерційну пропозицію</h1>
          </div>
          <div className="Footer_feedback">
            <div className="Footer_input_body">
              <div className="Footer_input_section">
                <input type="text" placeholder="Як вас звати?" />
                <input type="text" placeholder="Ваш E-mail" />
              </div>
              <div className="Footer_input_section">
                <input type="text" placeholder="Номер телефону" />
                <input type="text" placeholder="Компанія" />
              </div>
              <input type="text" placeholder="Розкажіть про проєкт" />
              <div className="Footer_data_btn_section">
                <button className="Footer_data_btn --shine">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/external-others-zufarizal-robiyanto/64/05010d/external-attachment-mutuline-stationary-others-zufarizal-robiyanto.png"
                    alt=""
                  />
                </button>
                <p>Прикріпити файл</p>
              </div>
              <div className="Footer_data_send">
                <div className="Footer_data_btn_send --shine">Обговорити проєкт</div>
              </div>
            </div>
            <div className="Footer_data_table">
              <div className="Footer_data_location">
                {" "}
                <img width="30" height="30" src="https://img.icons8.com/ios/50/ffffff/globe--v1.png" alt="globe--v1" />
                <p>Київ, Україна</p>
              </div>
              <p className="Footer_curr_loc">м. Київ, вул. Андрія Верхогляда, 2а, оф. 440 (секція 2, поверх 23)</p>
              <div className="Footer_phone">
                <h1>0 800 566 117</h1>
                <h2>Безкоштовно по Україні</h2>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
