import React from 'react'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Skills from '../Skills/Skills'
import { useRef } from 'react';
const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  return (
    <>
      <Navbar />
      <div className='main-section'>
        <section ref={heroRef} id='hero'>
          <Hero/>
        </section>
        <section ref={aboutRef} id='about'>
          <About/>
        </section>
        <section ref={skillRef} id='skills'>
          <Skills/>
        </section>
      </div>
    </>
  );
}

export default Home