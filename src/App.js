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





function App() {
  return (
    <div className="container">
      <h1>React-Router </h1>
  <BrowserRouter>
  <Link to="/" className="btn btn-dark" >Inicio</Link>
  <NavLink to="/nosotros" className="btn btn-dark mx-3" activeClassName="active-link">Nosotros</NavLink>
  <NavLink to="/contacto" className="btn btn-dark" activeClassName="selected">Contacto</NavLink>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/nosotros" element={<Nosotros/>}></Route>
      <Route path="/contacto" element={<Contacto/>}></Route>
    </Routes>
  </BrowserRouter>,
      
    </div>
  );
}

export default App;
