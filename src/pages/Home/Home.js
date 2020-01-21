import React from "react";
import "./Home.css";
import AcoesPessoas from "../../componentes/AcoesPessoas/AcoesPessoas";
import MissaoVisao from "../../componentes/MissaoVisao/MissaoVisao";
import Header from "../../componentes/Header/Header";
import NavBarHome from "../../componentes/NavBar/NavBarHome/Nav";
import Depoimentos from "../../componentes/Depoimentos/Depoimentos";
import JunteSe from "../../componentes/JunteSe/JunteSe";
import Footer from "../../componentes/Footer/Footer";
function Home() {
  return (
    <div className="Home">
      <NavBarHome></NavBarHome>
      <Header></Header>
      <MissaoVisao></MissaoVisao>
      <AcoesPessoas></AcoesPessoas>
      <Depoimentos></Depoimentos>
      <JunteSe></JunteSe>
      <Footer></Footer>
    </div>
  );
}

export default Home;
