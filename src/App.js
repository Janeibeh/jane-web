import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import './App.css';
  
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


