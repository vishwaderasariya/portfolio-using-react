import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';
import Navbar  from './Components/Navbar';
import Layout from './Layout/index';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <div>
      <Navbar />
      <Home />
      </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
