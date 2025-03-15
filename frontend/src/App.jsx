import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Components/HeroPage";
import ExpandablePanels from "./Components/Solution";
import WhyPage from "./Components/WhyPage";
import Us from "./Components/UsPage";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import ContactForm from "./Components/Form"; // Import your ContactForm

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ExpandablePanels />
              <WhyPage />
              <Us />
              <Testimonials />
              <Contact />
            </>
          }
        />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;