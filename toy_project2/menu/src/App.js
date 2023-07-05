import Home from "./pages/Home"
import About from "./pages/About"
import React from "react";
import {Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to ='/'>Home</Link> / 
        <Link to ='/about'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
