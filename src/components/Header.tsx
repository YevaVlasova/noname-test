import "../styles/Header.scss";

const Header = () => {
  const scrollToHome = () => {
    const homeElement = document.getElementById("home") as HTMLElement;
    homeElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about") as HTMLElement;
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCases = () => {
    const casesElement = document.getElementById("cases") as HTMLElement;
    casesElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFeedback = () => {
    const feedbackElement = document.getElementById("feedback") as HTMLElement;
    feedbackElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer") as HTMLElement;
    footerElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Header">
      <div className="Header_logo_section">
        <img src="../noname-logo.png" alt="" className="Header_logo" loading="lazy" />
        <h1 className="Header_logo_title">Name</h1>
      </div>
      <div className="Header_nav_section">
        <div className="Header_nav">
          <div className="Header_nav_item" onClick={scrollToHome}>
            Home
          </div>
          <div className="Header_nav_item" onClick={scrollToAbout}>
            Services
          </div>
          <div className="Header_nav_item" onClick={scrollToCases}>
            Cases
          </div>
          <div className="Header_nav_item" onClick={scrollToFeedback}>
            Feedback
          </div>
          <div className="Header_nav_item" onClick={scrollToFooter}>
            Contacts
          </div>
        </div>
      </div>
      <div className="Header_contacts_section">
        <div className="Header_contacts">
          <button className="Header_feedback --shine">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
