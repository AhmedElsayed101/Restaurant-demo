import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from "./components/MenuListComponent";
import './App.css';

function App() {
  return (
    <div >
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href= "/" >Restaurant Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu></Menu>
    </div>
  );
}

export default App;
