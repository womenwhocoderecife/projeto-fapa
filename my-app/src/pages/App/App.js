import React from 'react';
import './App.css';
import Numero from '../../componentes/Numeros/Numeros';
import EllenEGaby from '../EllenEGaby/EllenEGaby';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TESTE</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <EllenEGaby/>
      </header>
       <div className = "container-fluid">
          <div className = "container">
            <Numero />
          </div>
        </div>
        <br/>
        <br/>
        <br/>
    </div>
  );
}

export default App;
