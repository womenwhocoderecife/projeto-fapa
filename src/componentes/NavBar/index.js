import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";
import logo1 from "../../assets/logo-colorida.svg";
import logo2 from "../../assets/logo-provisoria2.svg";

import Button from 'react-bootstrap/Button'
function NavBar(props) {
  return (
    <Navbar className="nav-container gray-light-color p-0"
    id={
      props.isHome ? "nav-home" : "nav-common"
    }
    expand="lg">
    <div className="nav-container-fluid" >
      <Navbar.Toggle/>
      <Navbar.Brand href="/">
        <img src={props.isHome ? logo2 : logo1} className={props.isHome ? "logo-white" : "logo-colorfull"} alt="logo" />
      </Navbar.Brand>
      <Navbar.Collapse id={props.isHome ? "basic-navbar-nav-home" : "basic-navbar-nav"}>
        <Nav className="mr-auto">
          <Nav.Link className = "nav-bar-item " href="/sobre-nos">Sobre Nós</Nav.Link>
          <Nav.Link className = "nav-bar-item " href="/nossas-acoes">Nossas Ações</Nav.Link>
          <Nav.Link className = "nav-bar-item" href="/junte-se">Junte-se</Nav.Link>
        </Nav>
      </Navbar.Collapse>
     <a id="help-button" href='/junte-se'>
       <Button variant="outline-light" className = "colaborar-button">Colabore Conosco</Button>
     </a>
    </div>
  </Navbar>
  );
}

export default NavBar;
