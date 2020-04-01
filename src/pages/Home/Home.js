import React from "react";
import "./Home.css";
import AcoesPessoas from "../../componentes/AcoesPessoas/AcoesPessoas";
import MissaoVisao from "../../componentes/MissaoVisao/MissaoVisao";
import Header from "../../componentes/Header/Header";
import NavBar from "../../componentes/NavBar/index";
import Depoimentos from "../../componentes/Depoimentos/Depoimentos";
import JunteSe from "../../componentes/JunteSe/JunteSe";
import Footer from "../../componentes/Footer/Footer";
function Home() {
  return (
    <div className="Home">
      <div>
        <NavBar isHome={true}></NavBar>
        <Header></Header>
        <MissaoVisao></MissaoVisao>
        <AcoesPessoas></AcoesPessoas>
        <Depoimentos></Depoimentos>
        <JunteSe></JunteSe>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
