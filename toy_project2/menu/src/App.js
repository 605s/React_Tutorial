import Home from "./pages/Home"
import About from "./pages/About"
import Count from "./pages/Count"
import Input from "./pages/Input"
import Input2 from "./pages/Input2"
import List from "./pages/List"
import React from "react";
import {Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to ='/'>Home</Link> / <Link to ='/about'>About</Link> / <Link to ='/count'>Count</Link> / <Link to ='/input'>Input</Link> / <Link to ='/input2'>Input2</Link> / <Link to ='/list'>List</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/count' element={<Count />}></Route>
        <Route path='/input' element={<Input />}></Route>
        <Route path='/input2' element={<Input2 />}></Route>
        <Route path='/list' element={<List />}></Route>
      </Routes>
    </div>
  );
}

export default App;
