
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Hero from "../components/home-component/Hero";

import LandingPage from "../components/LandingPage";
import About from "../components/about/About";
import Project from "../components/project-component/Project";
import Cv from "../components/resume/Cv";
import Contact from "../components/footer/Contact";
import Root from '../router/Root';
// import React,{ useContext} from 'react'
// import StoreProvider, {MyContext } from './context/StoreProvider';


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>  
        <Route index element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Project />} />
        <Route path="resume" element={<Cv />} />
        <Route path="contact" element={<Contact />} />
    </Route>
  )
);
  