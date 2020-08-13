import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/projects" component={Projects} exact />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
