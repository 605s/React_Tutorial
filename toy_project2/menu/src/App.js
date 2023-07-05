import Home from "./pages/Home"
import About from "./pages/About"
import Count from "./pages/Count"
import Input from "./pages/Input"
import React from "react";
import {Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to ='/'>Home</Link> / <Link to ='/about'>About</Link> / <Link to ='/count'>Count</Link> / <Link to ='/input'>Input</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/count' element={<Count />}></Route>
        <Route path='/input' element={<Input />}></Route>
      </Routes>
    </div>
  );
}

export default App;
