import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h4>El placer de conducir</h4>
        <h3>BMW VISION NEUE KLASSE</h3>
        <div className="hero-x">
          <h1><span>X</span></h1>
          <h2>LA NUEVA ERA «X».</h2>
        </div>
        <a href="#" className="cta-button">Más información</a>
      </div>
    </section>
  );
};

export default Hero;