import React from "react";
import { About, Main, Navbar, Portfolio, Skills, Footer } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
       <Main/>
       <About/>
       <Skills/>
       <Portfolio/>
       <Footer/>
    </div>
  );
};

export default App;
