import { useState } from "react";
import Snowfall from "react-snowfall";
import "./scss/index.scss";

import FooterComp from "./components/Footer-Comp";
import FormBoxComp from "./components/Form-Box-Comp";
import HeroComp from "./components/Hero-Comp";
import MissionComp from "./components/Mission-Comp";
import NavbarComp from "./components/Navbar-Comp";
import ProjectsComp from "./components/Projects-Comp";
import SpecialServicesComp from "./components/Special-Services-Comp";
import TestimonialsComp from "./components/Testimonials-Comp";

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="Main-App-Container">
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: "900",
        }}
      />

      <div className="aligned-main-container">
        <NavbarComp
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
          toggleMobileNav={toggleMobileNav}
        />
        <HeroComp isMobileNavOpen={isMobileNavOpen} />
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
