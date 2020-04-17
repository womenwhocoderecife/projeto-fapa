import React from "react";
import "./JunteSe.css";
import Button from "react-bootstrap/Button";
function JunteSe() {
  return (
    <div className="JunteSe">
        <div className="bg-laranja">
          <h3 className="titulo">Você também pode fazer algo por alguém.</h3>
          <Button variant="outline-light" className="junte-se-button" href="/junte-se">
              Junte-se
          </Button>
      </div>
    </div>
  );
}

export default JunteSe;
