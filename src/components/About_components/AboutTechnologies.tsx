import { useEffect, useState } from "react";
import { getUrls } from "../../services/AboutDataService";
import { Url } from "../../interfaces/Url-interface";

const AboutTechnologies = () => {
  const [url, setUrl] = useState<Url | null>(null);
  const [activeButton, setActiveButton] = useState(0);
  const [currTechnology, setCurrTechnology] = useState("Web технології");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSelect, setIsSelect] = useState(false);
  // const [select, setSelect] = useState(false);

  function getCurrUrls(id: number) {
    setUrl(getUrls(id));
    if (url) setCurrTechnology(url.technology);
  }
  useEffect(() => {
    getCurrUrls(activeButton);
  });
  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (windowWidth < 950) {
      setIsSelect(true);
    } else {
      if (isSelect) {
        setIsSelect(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, isSelect]);

  const showSelect = () => {
    const caret = document.querySelector(".About_caret");
    const menu = document.querySelector(".About_menu");
    if (caret && menu) {
      caret.classList.toggle("caret-rotate");
      menu.classList.toggle("menu-open");
    }
  };

  return (
    <div>
      <div className="About_technologies">
        <div className="About_technologies_left">
          <div className="About_technologies_left_title">
            <div className="About_technologies_circle"></div>
            <h3 className="About_technologies_title_text">Tech stack</h3>
          </div>
          <p className="About_technologies_text">
            We provide technological competencies and practical experience to develop effective software solutions that
            that meet the requirements and goals of your business.
          </p>
          <button className="About_technologies_button --shine">
            All technologies{" "}
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/fluency-systems-filled/48/05010d/decentralized-network.png"
              alt="decentralized-network"
              loading="lazy"
            />
          </button>
        </div>
        <div className="About_technologies_right">
          {isSelect ? (
            <div className="About_container">
              <div className="About_dropdown">
                <div className="About_label">Choose option</div>
                <div className="About_select" onClick={showSelect}>
                  <div className="About_selected placeholder"> Choose technology</div>
                  <div className="About_caret"></div>
                </div>
                <ul className="About_menu" onClick={showSelect}>
                  <li onClick={() => handleButtonClick(0)}>Web development</li>
                  <li onClick={() => handleButtonClick(1)}>Mobile development</li>
                  <li onClick={() => handleButtonClick(2)}>CRM development</li>
                  <li onClick={() => handleButtonClick(3)}>Software development</li>
                  <li onClick={() => handleButtonClick(4)}>DevOps development</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="About_technologies_right_header">
              <button
                className={`About_technologies_right_btn ${activeButton === 0 ? "active" : ""}`}
                onClick={() => handleButtonClick(0)}
              >
                Web development
              </button>
              <button
                className={`About_technologies_right_btn ${activeButton === 1 ? "active" : ""}`}
                onClick={() => handleButtonClick(1)}
              >
                Mobile development
              </button>
              <button
                className={`About_technologies_right_btn ${activeButton === 2 ? "active" : ""}`}
                onClick={() => handleButtonClick(2)}
              >
                CRM development
              </button>
              <button
                className={`About_technologies_right_btn ${activeButton === 3 ? "active" : ""}`}
                onClick={() => handleButtonClick(3)}
              >
                Software development
              </button>
              <button
                className={`About_technologies_right_btn ${activeButton === 4 ? "active" : ""}`}
                onClick={() => handleButtonClick(4)}
              >
                DevOps development
              </button>
            </div>
          )}

          <div className="About_technologies_right_content">
            <h2
              className="About_technologies_right_title"
              onClick={() => {
                console.log(url);
              }}
            >
              {currTechnology}
            </h2>
            <div className="About_technologies_right_data">
              {url &&
                url.urls.map((item, index) => (
                  <div key={index} className="About_technologies_right_data_item">
                    <img width="30" height="30" src={item} alt={`icon-${index} `} loading="lazy" />
                    <p>{url.names[index]}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTechnologies;
