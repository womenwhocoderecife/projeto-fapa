import React from "react";

import "./Acoes.css";
import list from "../../datas/principais_acoes.json";
function Acoes() {
  const cards_line1 = [];
  const cards_line2 = [];
  list.map((item, index) => {
    const image = require("../../assets/nossas-acoes/" + item.icon);
    if (index <= 6) {
      return cards_line1.push(
        <div className="square" key={"cards-acoes" + item.id}>
          <img className="image-square" src={image} alt="acoes"></img>
          <span className="image-title"> {item.titulo} </span>
          <span className="image-agenda"> {item.agenda} </span>
        </div>
      );
    }
    else {
      return cards_line2.push(
        <div className="square" key={"cards-acoes" + item.id}>
          <img className="image-square" src={image} alt="acoes"></img>
          <span className="image-title"> {item.titulo} </span>
          <span className="image-agenda"> {item.agenda} </span>
        </div>
      );
    }
  });
  return (
    <div className = "calendario">
      <div className="cards-view"> {cards_line1} </div>
      <div className="cards-view"> {cards_line2} </div>
    </div>
  );
}

export default Acoes;
