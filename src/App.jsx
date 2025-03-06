import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage"; // Adjust the path if necessary
import Privatecomponent from "./Pages/Privatecomponent";
import Profile from "./Pages/Profile";
import SecondPage from "./Pages/SecondPage";
import PublicRoutes from "./Pages/PublicRoutes";
import Home from "./Pages/Home";
import ThirdPage from "./Pages/ThirdPage";
import FourthPage from "./Pages/FourthPage";
import FifthPage from "./Pages/FifthPage";

const App = () => {
  return (
    <>
      <div className="main-container w-full min-h-screen h-auto">
        <Router>
          <Routes>
            <Route element={<Privatecomponent />}>
              <Route path="/Home" element={<Home />} />
              <Route path="/secondPage" element={<SecondPage />} />
              <Route path="/thirdPage" element={<ThirdPage />} />
              <Route path="/fourthPage" element={<FourthPage />} />
              <Route path="/fifthPage" element={<FifthPage/>} />
              <Route path="/Profile" element={<Profile />} />
            </Route>
            <Route element={<PublicRoutes />}>
              <Route path="/LoginPage" element={<LoginPage />} />
              <Route path="/" element={<LoginPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
