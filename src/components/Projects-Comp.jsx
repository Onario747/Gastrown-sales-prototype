import "../scss/layout/_projects.scss";

import project_1_img from "../images/project-1.png"
import project_2_img from "../images/project-2.png"
import project_3_img from "../images/project-3.png"

const ProjectsComp = () => {
  return (
    <div className="ProjectsComp-container">
      <div className="project-header">
        <h1>A Peak At Our Portfolio</h1>
        <p>
          We combine various web strategies, design principles, and technologies
          to create unique projects for clients across all industries and
          verticals.
        </p>
      </div>
      <div className="project-img-container">
        <div className="project-1 project">
          <img src={project_1_img} alt="project-1" />
        </div>
        <div className="project-2 project">
          <img src={project_2_img} alt="project-2" />
        </div>
        <div className="project-3 project">
          <img src={project_3_img} alt="project-3" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsComp;
