import React from "react";
import "./JunteSe.css";
import Button from "react-bootstrap/Button";
function JunteSe() {
  return (
    <div className="JunteSe">
      <div className="container-fluid p-0 ">
        <div className="container">
          <div className="row justify-content-center d-flex">
            <h3 className="titulo">Você também pode fazer algo por alguém.</h3>
          </div>
          <div className="row justify-content-center d-flex ">
            <Button
              variant="outline-light"
              className="junte-se-button"
              href="/junte-se"
            >
              Junte-se
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JunteSe;
