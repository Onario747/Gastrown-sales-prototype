import "../scss/layout/_testimonial.scss";
import quote_img from "../images/entypo_quote.png";
import rating_img from "../images/Group 111.png";
import usersPic from "../images/users-pic.png";

const TestimonialsComp = () => {
  return (
    <div className="TestimonialsComp-container">
      <div className="testimonial-header">
        <h1>Testimonials</h1>
        <p>
          With Many years of experience delivering modern websites with the
          latest technologies, we have come a long way in how we approach
        </p>
      </div>
      <div className="testimonial-box-container">
        <div className="testimonial-box">
          <div className="testimony">
            <div className="quote-img">
              <img src={quote_img} alt="" />
            </div>
            <p>
              With Many years of experience delivering modern websites with the
              latest technologies, we have come a long way in how we approach
            </p>
            <div className="rating-img">
              <img src={rating_img} alt="" />
            </div>
          </div>
          <div className="user-profile">
            <div className="user-img">
              <img src={usersPic} alt="" />
            </div>
            <h1>Sham W. Pawel</h1>
            <span>Founder Xpeedstudio</span>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="testimony">
            <div className="quote-img">
              <img src={quote_img} alt="" />
            </div>
            <p>
              With Many years of experience delivering modern websites with the
              latest technologies, we have come a long way in how we approach
            </p>
            <div className="rating-img">
              <img src={rating_img} alt="" />
            </div>
          </div>
          <div className="user-profile">
            <div className="user-img">
              <img src={usersPic} alt="" />
            </div>
            <h1>Sham W. Pawel</h1>
            <span>Founder Xpeedstudio</span>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="testimony">
            <div className="quote-img">
              <img src={quote_img} alt="" />
            </div>
            <p>
              With Many years of experience delivering modern websites with the
              latest technologies, we have come a long way in how we approach
            </p>
            <div className="rating-img">
              <img src={rating_img} alt="" />
            </div>
          </div>
          <div className="user-profile">
            <div className="user-img">
              <img src={usersPic} alt="" />
            </div>
            <h1>Sham W. Pawel</h1>
            <span>Founder Xpeedstudio</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComp;
