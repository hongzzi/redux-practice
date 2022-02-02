import React from 'react';
import Counter from './components/Counter'
import Pokemon from './components/Api/Pokemon';
import Item from './components/Api/Item';

function App() {
  return (
    <div className="App">
      <Counter />
      <Pokemon />
      <Item />
    </div>
  );
}

export default App;
