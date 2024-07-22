import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import MissionSection from "./components/Mission";
import VisionSection from "./components/Vision";
import ServicesSection from "./components/Services";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Slider */}
        <Slider />
      {/* About */}
      <About />
      <MissionSection />
      <VisionSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default App;
