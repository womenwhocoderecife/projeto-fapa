import React from "react";
import "./SobreNos.css";

import NavBar from "../../componentes/NavBar";
import NossaHistoria from "../../componentes/NossaHistoria/NossaHistoria";
import Footer from "../../componentes/Footer/Footer";


function SobreNos() {
  return (
    <div className="SobreNos">
      <NavBar></NavBar>
      <NossaHistoria></NossaHistoria>
      <Footer></Footer>
    </div>
  );
}

export default SobreNos;
