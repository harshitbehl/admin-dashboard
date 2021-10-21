import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__container">
        <Sidebar />
        <div className="other">
          
        </div>
      </div>
    </div>
  );
}

export default App;
