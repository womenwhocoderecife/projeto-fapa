import React from 'react';
import './App.css';
import LuanaCamila from '../LuanaCamila/LuanaCamila'
import IlzaKarol from '../IlzaKarol/IlzaKarol';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste</h1>
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
        <LuanaCamila></LuanaCamila>
        <IlzaKarol/>
      </header>
    </div>
  );
}

export default App;
