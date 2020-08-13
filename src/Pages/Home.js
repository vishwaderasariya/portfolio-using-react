import React, { Component } from "react";
import "./css/Home.css";
import Hero from "../Components/Home/Hero";
import Feature from "../Components/Home/Feature";
import Navbar from "../Components/Navbar";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Feature />
      </div>
    );
  }
}

export default Home;
