import React from 'react';
import './App.css';
import Counter from './Counter'


function App() {/* App komponent funkcyjny */
  return (
    <div className="App">
      <header className="App-header">
        <h1>Licznik w ReactJS</h1>
      </header>
      <Counter initValue={108} /> {/* Wstaw to co jest w renderze clasy counter. tworzenie instancje classy */}
      <Counter initValue={10} />
      {/* initValue - atrybut stwrzony przez nas */}


    </div>
  );
}

export default App;
