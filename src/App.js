import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
// import React,{ useContext} from 'react'
// import StoreProvider, {MyContext } from './context/StoreProvider';
import React from 'react'
import LandingPage from './components/LandingPage';
import About from './components/about/About';
import Hero from './components/home-component/Hero';
import Project from './components/project-component/Project';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={ <LandingPage/>}>
          <Route index element={<Hero/>}/>
          <Route path="about" element={<About/>}/>       
          <Route path='project' element={<Project/>}/>      
      </Route>
    </>
    )
  );
  
function App() {
  

  return (
    <>
      {/* <StoreProvider> */}
        <RouterProvider router={router} />
      {/* </StoreProvider> */}
    </>
  );

}

export default App;
