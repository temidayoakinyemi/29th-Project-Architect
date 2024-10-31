import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import LatestWork from "./Components/LatestWork/LatestWork";
import Footer from "./Components/Footer/Footer";
import OurWorkflow from "./Components/OurWorkflow/OurWorkflow";
import OurServices from "./Components/OurServices/OurServices";

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
