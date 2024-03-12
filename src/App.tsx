import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";
import Cases from "./components/Cases";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { generateStars } from "./services/starService";
import "./styles/App.scss";
import "./styles/Adaptation.scss";
import "./styles/AdaptForMobile.scss";

function App() {
  useEffect(() => {
    generateStars();
  });

  return (
    <div className="App">
      <div className="sky"></div>
      <Header></Header>
      <Main></Main>
      <About></About>
      <Cases></Cases>
      {/* <Feedback></Feedback> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
