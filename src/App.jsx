import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import Carousel from "./components/Carousel";



export default function App() {
  return (
    <div>
    
      <Navbar/>
      <Carousel/>
      <Questions/>
     

    </div>
  );
}