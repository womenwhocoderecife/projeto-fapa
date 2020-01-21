import React from "react";

import "./Acoes.css";
import list from "../../datas/principais_acoes.json";
function Acoes() {
  const cards_line1 = [];
  const cards_line2 = [];
  list.map((item, index) => {
    const image = require("../../assets/nossas-acoes/" + item.icon);
    if (index <= 3) {
      return cards_line1.push(
        <div className="square">
          <img className="image-square" src={image} alt="acoes"></img>
          <span className="image-title"> {item.titulo} </span>
        </div>
      );
    } else {
      return cards_line2.push(
        <div className="square">
          <img className="image-square" src={image} alt="acoes"></img>
          <span className="image-title"> {item.titulo} </span>
        </div>
      );
    }
  });

  return (
    <div>
      <div className="cards-view"> {cards_line1} </div>
      <div className="cards-view"> {cards_line2} </div>
    </div>
  );
}

export default Acoes;
