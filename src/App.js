import React, { useState } from 'react';
import useInterval from './hooks/useInterval';
import Button from './components/Button';
import './App.css';

function App() {
  const items = ['🥕', '🍅', '🥔', '🌶️', '🥬', '🥦', '🍄', 'gb'];
  const [itemOrder, setItemOrder] = useState([]);
  const [allItemsVisible, toggleAllItemsVisible] = useState(false);
  const [solved, setSolved] = useState([]);
  const [currentPair, setCurrentPair] = useState([]);
  const [playing, togglePlaying] = useState(false);
  const [time, setTime] = useState(-1);

  function startGame() {
    setItemOrder([...items, ...items].sort(() => Math.random() - 0.5));
    toggleAllItemsVisible(true);
    togglePlaying(true);
  }

  function selectItem(index) {
    if (currentPair.length <= 1) {
      setCurrentPair([...currentPair, index]);
      if (itemOrder[currentPair[0]] === itemOrder[index]) {
        setSolved([...solved, currentPair[0], index]);
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

  useInterval(
    () => {
      setTime(time + 1);
    },
    playing ? 1000 : null
  );

  return (
    <React.Fragment>
      <div className="controls">
        <button className="play-button" onClick={startGame}>
          Play
        </button>
        {time >= 0 && (
          <span>
            {Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60)}:
            {time % 60 < 10 ? `0${time % 60}` : time % 60}
          </span>
        )}
      </div>
      <div className="grid">
        {itemOrder.map((item, index) => (
          <Button
            key={index}
            index={index}
            value={item}
            selectItem={selectItem}
            content={allItemsVisible || currentPair.includes(index) || solved.includes(index) ? item : ''}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
