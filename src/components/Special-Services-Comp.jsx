import special_services_image from "../images/special-services.png";
import special_services_gift from "../images/tabler_gift.png";
import christmas_tree from "../images/christmas-tree.png"

import "../scss/layout/_special-services.scss";

const SpecialServicesComp = () => {
  return (
    <div className="SpecialServicesComp-container">
      <div className="grid_special-services">
        <div className="grid_special-services__img">
          <img src={special_services_image} alt="special_services_image" />
        </div>
        <div className="grid_special-services__txt">
          <div className="grid_special-services__header">
            <h1>What&lsquo;s in for you this Christmas?</h1>
            <p>
              Our expert will create a modern and brand-focused design that
              provides a fantastic customer experience that converts.
            </p>
          </div>
          <div className="grid_special-services__btns">
            <div className="grid_special-services-btn">
              <div className="special-services-gift-img">
                <img src={special_services_gift} alt="special_services_gift" />
              </div>
              <span>SSl Certificate</span>
            </div>
            <div className="grid_special-services-btn">
              <div className="special-services-gift-img">
                <img src={special_services_gift} alt="special_services_gift" />
              </div>
              <span>ENGAGING CONTENT</span>
            </div>
            <div className="grid_special-services-btn">
              <div className="special-services-gift-img">
                <img src={special_services_gift} alt="special_services_gift" />
              </div>
              <span>CUSTOMIZED SERVICE</span>
            </div>
            <div className="grid_special-services-btn">
              <div className="special-services-gift-img">
                <img src={special_services_gift} alt="special_services_gift" />
              </div>
              <span>USER-FRIENDLY WEBSITE</span>
            </div>
            <div className="grid_special-services-btn">
              <div className="special-services-gift-img">
                <img src={special_services_gift} alt="special_services_gift" />
              </div>
              <span>SEARCH ENGINE OPTIMIZATION</span>
            </div>
            <div className="grid_special-services-btn">
              <div className="special-services-gift-img">
                <img src={special_services_gift} alt="special_services_gift" />
              </div>
              <span>PERFORMANCE OPTIMIZATION</span>
            </div>
          </div>
        </div>
      </div>
      <div className="christmas_tree">
        <img src={christmas_tree} alt="christmas-tree" />
      </div>
    </div>
  );
};

export default SpecialServicesComp;
