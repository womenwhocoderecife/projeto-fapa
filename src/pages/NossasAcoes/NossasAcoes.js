import React from "react";
import "./NossasAcoes.css";
import NavBar from "../../componentes/NavBar";
import TodasAcoes from "../../componentes/TodasAcoes/TodasAcoes";

import Footer from "../../componentes/Footer/Footer";


function NossasAcoes() {
  return (
    <div className="NossasAcoes">
      <div>
        <NavBar isHome={false}></NavBar>
        <TodasAcoes></TodasAcoes>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default NossasAcoes;
