import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Specialists from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
// import FooterChecked from "./components/FooterChecked";

const App = () => {
  
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  
  return(
    <>
    <Header />
    <Hero />
    {/* <Skills/> */}
    <Skills/>
    {/* <Skill2/> */}
    <About/>
    <Specialists/>
    {/* <Projects/> */}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
