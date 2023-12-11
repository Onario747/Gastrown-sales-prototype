import logoImg from "../images/image 8.png";
import top_bar_buttonImg from "../images/top_bar_buttonImg.png";
import "../scss/layout/_Navbar.scss";

const NavbarComp = () => {
  return (
    <div className="NavbarComp-Container">
      <div className="top-bar">
        <div className="logo">
          <img src={logoImg} alt="Gastrown Logo" />
        </div>
        <div className="top-bar-left">
          <div className="nav-links">
            <a href="">Home</a>
            <a href="">Offers</a>
            <a href="">Pricing</a>
            <a href="">Our Approach</a>
            <a href="">Portfolio</a>
            <a href="">Contact Us</a>
          </div>
          <div className="top-bar-button">
            <a>Talk to us</a>
            <div className="top-bar-button-icon">
              <img src={top_bar_buttonImg} alt="top_bar_buttonImg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComp;
