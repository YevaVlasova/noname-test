import { useState } from "react";

const AboutData = () => {
  const technologies = [
    "https://i.postimg.cc/pT7FyD5X/web.jpg",
    "https://i.postimg.cc/85rdS1tY/mobile.jpg",
    "https://i.postimg.cc/4NF3zzJz/crm.png",
    "https://i.postimg.cc/9f0Ky7Qq/soft.png",
    "https://i.postimg.cc/6QKT3BWS/devops.png",
  ];

  const [currTechnology, setCurrTechnology] = useState(technologies[0]);
  function changeTechnology(id: number) {
    setCurrTechnology(technologies[id]);
  }
  return (
    <div>
      <div className="About_data">
        <div className="About_data_left">
          <div className="About_data_img">
            <img src={currTechnology} alt="" />
          </div>
        </div>
        <div className="About_data_right">
          <button className="About_data_feature" onMouseEnter={() => changeTechnology(0)}>
            Web development
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/66636a/sort-right.png"
              alt="sort-right"
            />
          </button>
          <button className="About_data_feature" onMouseEnter={() => changeTechnology(1)}>
            Mobile development
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/66636a/sort-right.png"
              alt="sort-right"
            />
          </button>
          <button className="About_data_feature" onMouseEnter={() => changeTechnology(2)}>
            CRM development
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/66636a/sort-right.png"
              alt="sort-right"
            />
          </button>
          <button className="About_data_feature" onMouseEnter={() => changeTechnology(3)}>
            Software development
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/66636a/sort-right.png"
              alt="sort-right"
            />
          </button>
          <button className="About_data_feature" onMouseEnter={() => changeTechnology(4)}>
            DevOps development
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/66636a/sort-right.png"
              alt="sort-right"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutData;
