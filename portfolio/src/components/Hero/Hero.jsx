import React,{useState,useEffect} from 'react';
import './Hero.css';
const roles = ["Web Developer", "Android Developer", "Designer", "Problem Solver"];

const HeroSection = () => {
  
  const [currentRole, setCurrentRole] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); 
      setTimeout(() => {
        setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        setIsFading(false); 
      }, 500); 
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">Crafting Digital Experiences</h1>
        <p className='hero-p'>Hi, I'm Lakshya, a <p className={`hero-p ${isFading ? "fade-out" : "fade-in"}`}>{roles[currentRole]}.</p></p><br /><br />
        <div className="hero-buttons">
          <button className="hero-btn primary">View Portfolio</button>
          <button className="hero-btn secondary">Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
