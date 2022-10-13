import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />

    </div>
  );
}

export default App;
