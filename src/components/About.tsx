import Layout from "./Layout";
import "../styles/About.scss";
import AboutTechnologies from "./About_components/AboutTechnologies";
import AboutData from "./About_components/AboutData";

const About = () => {
  const height = 1400;

  return (
    <div className="About">
      <Layout height={height}>
        <div className="About_body">
          <div className="About_header">
            <h1 className="About_title">Про нас</h1>
            <button className="About_title_btn">
              Усі послуги{" "}
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-rounded/24/ffffff/plus--v1.png"
                alt="plus--v1"
              />
            </button>
          </div>
          <AboutData></AboutData>
          <AboutTechnologies></AboutTechnologies>
        </div>
      </Layout>
    </div>
  );
};

export default About;
