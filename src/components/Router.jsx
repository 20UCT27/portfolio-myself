import React from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import EMSscreen from "./EMSscreen";
import EcommerceScreen from "./EcommerceScreen";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" Component={Header}/>
          <Route path="/" Component={Home}/>
          <Route path="/About" Component={About}/>
          <Route path="/Contact" Component={Contact}/>
          <Route path="/Projects" Component={Projects}/>
          <Route path="/EMSscreen" Component={EMSscreen}/>
          <Route path="/EcommerceScreen" Component={EcommerceScreen}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;