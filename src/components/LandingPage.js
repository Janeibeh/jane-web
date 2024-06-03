import React from 'react';
import Header from './headerComponent/Header';

import About from './about/About';
import Project from './project-component/Project';
import Hero from './home-component/Hero';
import Contact from './footer/Contact';


const LandingPage = () => {
  return (
    <>
        <div className='mx-auto'>
            <Hero/> 
            <About/>
            <Project />
            <Contact />
        </div>

    </>
  )
}

export default LandingPage




 