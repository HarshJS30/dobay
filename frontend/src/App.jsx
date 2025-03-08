import React from "react";
import { Hero } from "./Components/HeroPage";
import ExpandablePanels from "./Components/Solution";
import { WhyPage } from "./Components/WhyPage";
import { Us } from "./Components/UsPage";
import Testimonials from "./Components/Testimonials";
import { Contact } from "./Components/Contact";
function App(){
  return(
    <>
      <Hero />
      <ExpandablePanels />
      <WhyPage />
      <Us />
      <Testimonials />
      <Contact />
    </>
  )
}
export default App;