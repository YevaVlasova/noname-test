import { useEffect, useRef } from "react";
import "../../styles/Feedback.scss";
import { handleAnimation } from "../../services/titleAnimationService";

const YourFeedback = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const handleScrollEvent = () => {
      handleAnimation(titleRef);
      handleAnimation(bodyRef);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);
  return (
    <div className="YourFeedback">
      <h1 className="YourFeedback_title" ref={titleRef}>
        Обговоримо Ваш проєкт
      </h1>
      <div className="YourFeedback_body" ref={bodyRef}>
        <div className="YourFeedback_body_form">
          <div className="YourFeedback_body_form_left">
            <h1 className="YourFeedback_body_title">
              Звертайтеся до нас за безкоштовною консультацією, це можливість обговорити свої ідеї з експертами з
              діджиталізації. Залиште свій номер, ми передзвонимо!
            </h1>
            <div className="YourFeedback_body_data">
              <input type="text" placeholder="Номер телефону" />
              <input type="text" placeholder="Ваш E-mail" />
              <button className="YourFeedback_body_data_btn --shine">
                Відправити
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/metro/52/05010d/external-link.png"
                  alt="external-link"
                />
              </button>
            </div>
          </div>
          <span></span>
          <div className="YourFeedback_body_form_right">
            <div className="YourFeedback_body_form_image">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&amp;h=720&amp;q=80"
                alt=""
              />
            </div>
            <div className="YourFeedback_body_form_data">
              <h1 className="YourFeedback_body_form_text">
                Допомагаю своїм клієнтам вирішувати складні бізнес-завдання за допомогою кастомних IT-рішень
              </h1>
              <div className="YourFeedback_body_form_details">
                <p>CEO & Project Manager</p>
                <div className="YourFeedback_body_form_details_experience">
                  <div className="Experience_years">
                    <h1>7+</h1>
                    <p>років у компанії</p>
                  </div>
                  <div className="Experience_count">
                    <h1>160+</h1>
                    <p>успішних проєктів</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourFeedback;
