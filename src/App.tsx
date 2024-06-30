import React from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Button>
        <Button.Label>TextTextTextTextTextTextTextTextText</Button.Label>
        <Button.Counter>
          <Counter count={0} />
        </Button.Counter>
      </Button>
    </div>
  );
}

export default App;