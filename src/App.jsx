import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
