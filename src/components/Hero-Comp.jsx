import hero_bell_icon from "../images/bell.png";
import hero_grid_img from "../images/christmas pack.png";
import hero_frost_icon from "../images/frost.png";
import hero_chat_icon from "../images/santa-clause-chat-icon.png";
import hero_btn_icon from "../images/santa-clause.png";

import "../scss/layout/_hero.scss";

const HeroComp = () => {
  return (
    <div className="HeroComp-container">
      <div className="grid">
        <div className="grid__text">
          <h1>
            Gastrown <span>60%</span> Jingle Discount!
          </h1>
          <p className="hero-pg">
            <span>
              Grab the chance to bring your business alive this holiday
            </span>
            , we are offering a massive <span>60% Jingle discount</span> on
            professional website implementation, that showcases your brand
            products and services no matter what industry you operate in.
          </p>
          <div className="hero-spaced-btm-text">
            <span>Hurry now to get the perfect discount for the holidays!</span>
          </div>
          <div className="hero-btn">
            <a>Get Discount</a>
            <div className="hero-icon">
              <img src={hero_btn_icon} alt="hero_btn_icon" />
            </div>
          </div>
        </div>
        <div className="grid__img">
          <img src={hero_grid_img} alt="" />
        </div>
      </div>
      <div className="frost-icon">
        <img src={hero_frost_icon} alt="hero-frost-icon" />
      </div>
      <div className="hero-positioned-element">
        <div className="line"></div>
        <div className="bell-icon">
          <img src={hero_bell_icon} alt="hero_bell_icon" />
        </div>
      </div>
      <div className="chat-icon">
        <div className="chat-rectangle"></div>
        <div className="chat-img">
          <img src={hero_chat_icon} alt="hero_chat_icon" />
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
