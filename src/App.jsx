import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import OurServices from "./Components/Our Services/OurServices";
import OurWorkflow from "./Components/Our Workflow/ourWorkflow";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurServices />
      <OurWorkflow />
      <div className="container">
      </div>
    </div>
  );
};

export default App;
