import React from 'react';
import './Numeros.css';

function Numeros() {
  return (
    <div className="Numeros container">
        <div className="row secao1">
            <h2 className = "redColor"  >40</h2>
            <a href="/sobre" >VOLTAR PARA HOME</a>
            <h3>100</h3>
            <button type="button" class="btn btn-outline-primary">Primary</button>
        </div>
        <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
        </div>
    </div>
  );
}

export default Numeros;