import "./scss/index.scss";
import Snowfall from "react-snowfall";

import NavbarComp from "./components/Navbar-Comp";
import HeroComp from "./components/Hero-Comp";
import SpecialServicesComp from "./components/Special-Services-Comp";
import ProjectsComp from "./components/Projects-Comp";
import MissionComp from "./components/Mission-Comp";
import TestimonialsComp from "./components/Testimonials-Comp";
import FormBoxComp from "./components/Form-Box-Comp";
import FooterComp from "./components/Footer-Comp";


function App() {
  return (
    <div className="Main-App-Container">
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: "900"
        }}
      />

      <div className="aligned-main-container">
        <NavbarComp />
        <HeroComp />
        <SpecialServicesComp />
        <ProjectsComp />
        <MissionComp />
        <TestimonialsComp />
        <FormBoxComp />
        <FooterComp />
      </div>
    </div>
  );
}

export default App;
