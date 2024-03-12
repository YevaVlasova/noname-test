import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";
import Cases from "./components/Cases";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import "./styles/App.scss";
import "./styles/Adaptation.scss";
import "./styles/AdaptForMobile.scss";
import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      <Background></Background>
      <Header></Header>
      <Main></Main>
      <About></About>
      <Cases></Cases>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  );
}

export default App;
