import React, { useState } from 'react';
import useInterval from './hooks/useInterval';
import './App.css';

function App() {
  const items = ['🥕', '🍅', '🥔', '🥑', '🌽', '🥦', '🍄', '🍆'];
  const [itemOrder, setItemOrder] = useState([]);
  const [allItemsVisible, toggleAllItemsVisible] = useState(false);
  const [currentPair, setCurrentPair] = useState([]);

  function startGame() {
    setItemOrder([...items, ...items].sort(() => Math.random() - 0.5));
    toggleAllItemsVisible(true);
  }

  function selectItem(index) {
    if (currentPair.length <= 1) {
      setCurrentPair([...currentPair, index]);
      if (itemOrder[currentPair[0]] === itemOrder[index]) {
        alert(`That's a pair! ${itemOrder[index]}`);
      }
    } else {
      setCurrentPair([index]);
    }
  }

  useInterval(
    () => {
      toggleAllItemsVisible(false);
    },
    allItemsVisible ? 1000 : null
  );

  return (
    <React.Fragment>
      <button onClick={startGame}>Play</button>
      <div className="grid">
        {itemOrder.map((item, index) => (
          <button key={index} value={item} onClick={() => selectItem(index)} className="item">
            {allItemsVisible || currentPair.includes(index) ? item : ''}
          </button>
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
