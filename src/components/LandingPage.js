import React from 'react';
import Header from './headerComponent/Header';

import About from './about/About';
import Project from './project-component/Project';
import Footer from './footer/Footer';
import Hero from './home-component/Hero';


const LandingPage = () => {
  return (
    <>
        <div className='mx-auto'>
            <Header/>
            <Hero/> 
            <About/>
            <Project/>
            <Footer/>
        </div>

    </>
  )
}

export default LandingPage




 