import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";
import logo from "../../../assets/logo-provisoria.png";

import Button from 'react-bootstrap/Button'
function NavBarHome() {
  return (
    <Navbar className="nav-container gray-light-color p-0"  expand="lg">
    <div className="nav-container-fluid white-color" >
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
   
    <Navbar.Brand href="/">
        <img src={logo} className="App-logo" alt="logo" />
    </Navbar.Brand>
  
    <Navbar.Collapse id="basic-navbar-nav ">
      <Nav className="mr-auto">
       <Nav.Link className = "nav-bar-item " href="/sobre-nos">Sobre Nós</Nav.Link>
       <Nav.Link className = "nav-bar-item " href="/nossas-acoes">Nossas Ações</Nav.Link>
       <Nav.Link className = "nav-bar-item" href="/junte-se">Junte-se</Nav.Link>
     </Nav>
   </Navbar.Collapse>
    
    <div className='color-NavButton'>
   <Button variant="outline-light" className = "colaborar-button">Colabore Conosco</Button>
   </div>
    </div>
  
</Navbar>
  );
}

export default NavBarHome;
