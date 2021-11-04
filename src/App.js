import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom"


import Contacto from './components/Contacto';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import User from './components/User';




function App() {
  return (
    <div className="container">
      <h1>React-Router </h1>
  <BrowserRouter>
  <Link to="/" className="btn btn-dark" >Inicio</Link>
  <NavLink to="/nosotros" className="btn btn-dark mx-3" >Nosotros</NavLink>
  <NavLink to="/contacto" className="btn btn-dark" >Contacto</NavLink>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/nosotros" element={<Nosotros/>}></Route>
      <Route path="/nosotros/:id" element={<User/>}></Route>
      <Route path="/contacto" element={<Contacto/>}></Route>
    </Routes>
  </BrowserRouter>,
      
    </div>
  );
}

export default App;
