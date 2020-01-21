import React from "react";
import "./Home.css";
import AcoesPessoas from "../../componentes/AcoesPessoas/AcoesPessoas";
import MissaoVisao from "../../componentes/MissaoVisao/MissaoVisao";
import Header from "../../componentes/Header/Header";
import NavBarHome from "../../componentes/NavBar/NavBarHome/Nav";
import Depoimentos from "../../componentes/Depoimentos/Depoimentos";
import Footer from "../../componentes/Footer/Footer";
function Home() {
  return (
    <div className="Home">
      <NavBarHome></NavBarHome>
      <Header></Header>
      <MissaoVisao></MissaoVisao>
      <AcoesPessoas></AcoesPessoas>
      <Depoimentos></Depoimentos>
      <Footer></Footer>
    </div>
  );
}

export default Home;
