import React from "react";

import "./DetalhesAcoes.css";
import list from "../../datas/nossas_acoes.json";
import Card from "react-bootstrap/Card";

function DetalhesAcoes() {
  const cards = [];

  list.map(item => {
    const image = require("../../assets/nossas-acoes/" + item.image);

    return cards.push(
      <div className="col-md-4" key={"cards-details" + item.id}>
        <Card className="card-detalhes">
          <Card.Img className="image_length" variant="top" src={image} alt="detalhes" />
          <Card.Body className="card-body-detalhes">
            <Card.Title>{item.titulo}</Card.Title>
            <Card.Text>{item.resumo}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (

      <div className="row d-flex p-0 m-0"> {cards} </div>

  );
}

export default DetalhesAcoes;
