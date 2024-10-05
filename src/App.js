import React from "react";
import { About, Main, Navbar, Portfolio, Skills, Footer } from "./components";

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
