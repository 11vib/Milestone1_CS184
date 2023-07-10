import React from "react";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Courses from "./Components/Courses.js";
import Navbar from "./Components/Navbar.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App (){
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/courses" element = {<Courses/>}></Route>
      <Route path="/about" element = {<About />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App