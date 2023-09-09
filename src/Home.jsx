import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { GlobalContext } from "./context";
import Services from './Services'
import Contact from './Contact'
import About from "./About";

const Home = () => {
  const { updateHomePage } = GlobalContext();

  useEffect(() => {
    updateHomePage();
  }, []);

  return (
    <div>
      <HeroSection />
      <Services/>
      <About/>
      <Contact/>
      
    </div>
  );
};

export default Home;
