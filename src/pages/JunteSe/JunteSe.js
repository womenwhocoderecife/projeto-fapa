import React from "react";
import "./JunteSe.css";

import NavBar from "../../componentes/NavBar";
import Inscricoes from "../../componentes/Inscricoes/Inscricoes";
import Footer from "../../componentes/Footer/Footer";


function JunteSe() {
  return (
    <div className="Junte-se">
      <NavBar></NavBar>
      <Inscricoes></Inscricoes>
      <Footer></Footer>
    </div>
  );
}

export default JunteSe;
