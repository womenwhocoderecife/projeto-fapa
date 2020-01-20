import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";
import logo from "../../../assets/logo-provisoria2.svg";

import Button from 'react-bootstrap/Button'
function NavBarHome() {
  return (
    <Navbar className="nav-container nav_color p-0"  expand="lg">
    <div className="nav-container-fluid " >
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

    </div>
    <div className='color-NavButton'>
   <Button variant="outline-light" className = "colaborar-button">Colabore Conosco</Button>
   </div>

</Navbar>
  );
}

export default NavBarHome;
