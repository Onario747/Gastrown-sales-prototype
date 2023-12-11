import jingle_balls_img from "../images/jingle balls.png";
import santas_hand_img from "../images/santas hand.png"
import mission_pictogram_img from "../images/mission-pictogram.png";
import "../scss/layout/_mission.scss";

const MissionComp = () => {
  return (
    <div className="MissionComp-container">
      <div className="mission-container">
        <div className="top-jingle-img">
          <img src={jingle_balls_img} alt="jingle_balls_img" />
        </div>
        <div className="santas-hand-img">
          <img src={santas_hand_img} alt="" />
        </div>

        <div className="missions">
          <div className="mission-header">
            <h1>Our Unique Approach</h1>
            <p>
              With Many years of experience delivering modern websites with the
              latest technologies, we have come a long way in how we approach
              the design and development of any website. The key is to
              understand our client&lsquo;s needs and proffer the best strategy
              and technology for their businesses.
            </p>
          </div>
          <div className="mission-pictogram">
            <img src={mission_pictogram_img} alt="mission_pictogram_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionComp;
