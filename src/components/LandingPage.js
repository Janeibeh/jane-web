import React from 'react';
import Header from './headerComponent/Header';
import Home from './Home';
import About from './about/About';
import Project from './project-component/Project';
import Footer from './footer/Footer';


const LandingPage = () => {
  return (
    <>
        <div className='mx-auto'>
            <Header/>
            <Home/>
            <About/>
            <Project/>
            <Footer/>
        </div>

    </>
  )
}

export default LandingPage




 