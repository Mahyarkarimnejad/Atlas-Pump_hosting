import React from "react";
// Import Components
import TopBar from "./Mini Components/TopBar/TopBar";
import TopNavBar from "./Mini Components/TopNavBar/TopNavBar";
import Particles from "./Mini Components/ParticlesBar/ParticlesUse";
// Import Components
// =======================
// Import Custom Style
import './Style/Usermain.css'
import PumpSrcollImg from './Mini Components/PumpMontaj/PumpSrcollImg';
// Import Custom Style
// =======================
// Import Icons & Fonts
// Import Icons & Fonts
// =======================
// Import Logo & Images
// Import Logo & Images
// =======================
function Usermain() {
  return (
    <div>
      <div className="container-sty">
        <TopBar />
      </div>
      <TopNavBar />
      <div className="particles-sty">
        <Particles />
      </div>
      <div className="pump-scroll-frame">
        <PumpSrcollImg />
      </div>
    </div>

  );
}

export default Usermain;
