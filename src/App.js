import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TestScrollImg from "./Components/User Components/TestScrollImg";
// Import User Components
import Usermain from "./Components/User Components/Usermain";
// Import User Components
// =======================
// Import Admin Components
// Import Admin Components
// =======================
// Import Custom Style
// Import Custom Style
// =======================
// Import Icons & Fonts
// Import Icons & Fonts
// =======================
// Import Logo & Images
// Import Logo & Images
// =======================
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Usermain />} />
        {/* <Route path="/test" element={<TestScrollImg />} /> */}
        <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
