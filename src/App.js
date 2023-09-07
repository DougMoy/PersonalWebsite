import React, { useRef } from "react";
import "./App.css";
import "./global.css";
import Header from "./components/header";
import Section from "./components/section";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Footer from "./components/footer";

function App() {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const sectionTop = section.offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />

      <Section id="section1" pageComponent={Page1} ref={sectionRefs.section1} />
      <Section id="section2" pageComponent={Page2} ref={sectionRefs.section2} />
      <Section id="section3" pageComponent={Page3} ref={sectionRefs.section3} />
      <Section id="section4" pageComponent={Page4} ref={sectionRefs.section4} />
      <Section id="section5" pageComponent={Page5} ref={sectionRefs.section5} />
      <Footer />
    </div>
  );
}

export default App;
