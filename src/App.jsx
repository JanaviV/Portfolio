import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/global.css";

const App = () => {
    return (
        <div className="portfolio-container">
            <Header />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
