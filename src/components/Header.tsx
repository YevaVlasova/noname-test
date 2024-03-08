import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header_logo_section">
        <img src="../noname-logo.png" alt="" className="Header_logo" />
        <h1 className="Header_logo_title">Name</h1>
      </div>
      <div className="Header_nav_section">
        <div className="Header_nav">
          <div className="Header_nav_item">Послуги</div>
          <div className="Header_nav_item">Кейси</div>
          <div className="Header_nav_item">Компанія</div>
          <div className="Header_nav_item">Блог</div>
          <div className="Header_nav_item">Контакти</div>
        </div>
      </div>
      <div className="Header_contacts_section">
        <div className="Header_contacts">
          <button className="Header_feedback --shine">Зв'язатися з нами</button>
          <div className="Header_language">
            <p>Eng</p>
            <img src="../arrow-down.png" alt="" className="Header_language_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
