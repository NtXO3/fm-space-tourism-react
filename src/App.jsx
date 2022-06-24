import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import data from './data.json'
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  console.log(data)
  const image = require('./assets/home/background-home-desktop.jpg')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
