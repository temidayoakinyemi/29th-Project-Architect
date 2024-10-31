import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import OurServices from "./Components/Our Services/OurServices";
import LatestWork from "./Components/LatestWork/LatestWork";
import Footer from "./Components/Footer/Footer";
import OurWorkflow from "./Components/OurWorkflow/OurWorkflow";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurServices />
      <OurWorkflow />
      <LatestWork />
      <Footer />
    </div>
  );
};

export default App;
