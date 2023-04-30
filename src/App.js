import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="app_root">
      <Navbar />
      <Home/>
    </div>
  );
};

export default App;
