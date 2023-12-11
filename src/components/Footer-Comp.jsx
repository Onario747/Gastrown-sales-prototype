import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import logo from "../images/image 8.png";
import "../scss/layout/_footer.scss";

const FooterComp = () => {
  return (
    <div className="FooterComp-container">
      <div className="inner-footer-rectangle">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="line"></div>
        <div className="links">
          <div className="address-sec">
            <span>Visit Us:</span>
            <p>
              No. 5 Engr. Maxwell Adoki Street, off Peter Odili Road, Port
              Harcourt, Rivers State.
            </p>
          </div>
          <div className="contact-sec">
            <span>Contact Us:</span>
            <div className="cont-profile">
              <div className="cont">
                <IoCallSharp className="icon" />
                <span>(+234) 916 919 9000</span>
              </div>
              <div className="cont">
                <MdEmail className="icon" />
                <span>info@gastrown.ng</span>
              </div>
            </div>
          </div>
          <div className="social-links">
            <span>Follow Us:</span>
            <div className="social-icons">
              <FaInstagramSquare />
              <FaFacebook />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright&copy; 2023 Gastrown.ng</span>
      </div>
    </div>
  );
};

export default FooterComp;
