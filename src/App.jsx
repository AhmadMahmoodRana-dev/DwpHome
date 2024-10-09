import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage'; // Adjust the path if necessary
import Home from './Pages/Home';

import Privatecomponent from './Pages/Privatecomponent';
import Profile from './Pages/Profile';

const App = () => {
    return (
     <>
   <div className='main-container w-full min-h-screen h-auto'>
        <Router>
            <Routes>
            <Route  element={<Privatecomponent/>} >
                
                <Route path="/home" element={<Home/>} />
             
                <Route path="/Profile" element={<Profile />} />
              </Route>  

              <Route path="/LoginPage" element={<LoginPage />} />
              <Route path="/" element={<LoginPage />} />
            </Routes>
        </Router>
        </div>
        </>
    );
};

export default App;
