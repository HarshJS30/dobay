import React from "react";
import { Hero } from "./Components/HeroPage";
import ExpandablePanels from "./Components/Solution";
import { WhyPage } from "./Components/WhyPage";
import { Us } from "./Components/UsPage";
function App(){
  return(
    <>
      <Hero />
      <ExpandablePanels />
      <WhyPage />
      <Us />
    </>
  )
}
export default App;