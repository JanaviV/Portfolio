import React from "react";
import "../styles/Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h2>Welcome to My Portfolio</h2>
                <p>Information Science Engineer | Web Developer</p>
                <a href="#contact" className="cta-button">Get in Touch</a>
            </div>
        </section>
    );
};

export default Hero;
