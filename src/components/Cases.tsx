import CasesSlider from "./Cases_components/Cases_slider";
import Layout from "./Layout";
import AllCases from "./Cases_components/AllCases";
import "../styles/CasesCarousel.scss";
import "../styles/Adaptation.scss";

const Cases = () => {
  const height = 2600;
  return (
    <div className="Cases" id="cases">
      <Layout height={height}>
        <div className="Cases_body">
          <CasesSlider></CasesSlider>
          <AllCases></AllCases>
        </div>
      </Layout>
    </div>
  );
};

export default Cases;
