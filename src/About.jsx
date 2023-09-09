import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { GlobalContext } from "./context";

const About = () => {
  const { updateAboutPage} = GlobalContext();

  useEffect(() => {
    updateAboutPage() ;
  }, []);

  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default About;
