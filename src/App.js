import React, { useState } from 'react';
import useInterval from './hooks/useInterval';
import './App.css';

function App() {
  const items = ['🥕', '🍅', '🥔', '🥑', '🌽', '🥦', '🍄', '🍆'];
  const [itemsVisible, toggleItemsVisible] = useState(false);

  function startGame() {
    toggleItemsVisible(true);
  }

  useInterval(
    () => {
      toggleItemsVisible(false);
    },
    itemsVisible ? 1000 : null
  );

  return (
    <React.Fragment>
      <button onClick={startGame}>Play</button>
      <div className="grid">
        {[...items, ...items]
          .sort(() => Math.random() - 0.5)
          .map((item, index) => (
            <button key={index} value={item} className="item">
              {itemsVisible ? item : ''}
            </button>
          ))}
      </div>
    </React.Fragment>
  );
}

export default App;
