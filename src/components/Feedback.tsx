import CompaniesFeedback from "./Feedback_components/CompaniesFeedback";
import YourFeedback from "./Feedback_components/YourFeedback";
import Layout from "./Layout";

const Feedback = () => {
  const height = 1400;
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
