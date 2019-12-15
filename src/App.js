import React, { useState, useEffect } from 'react';
import useInterval from './hooks/useInterval';
import Button from './components/Button';
import Grid from './components/Grid';
import { levels } from './levels';
import './App.css';

function App() {
  const [itemOrder, setItemOrder] = useState([]);
  const [allItemsVisible, toggleAllItemsVisible] = useState(false);
  const [solved, setSolved] = useState([]);
  const [currentPair, setCurrentPair] = useState([]);
  const [status, setStatus] = useState(null);
  const [time, setTime] = useState(-1);
  const [level, setLevel] = useState(0);
  const [levelSelecter, toggleLevelSelecter] = useState(true);

  function startGame() {
    toggleLevelSelecter(false);
    const items = levels[level];
    setItemOrder([...items, ...items].sort(() => Math.random() - 0.5));
    setSolved([]);
    setCurrentPair([]);
    setTime(-1);
    toggleAllItemsVisible(true);
    setStatus('playing');
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

  // Show items for one second when game begins
  useInterval(() => toggleAllItemsVisible(false), allItemsVisible ? 1000 : null);

  // Increment time
  useInterval(() => setTime(time + 1), status === 'playing' ? 1000 : null);

  useInterval(() => setCurrentPair([]), currentPair.length === 2 && currentPair[0] !== currentPair[1] ? 1000 : null);

  // Check if all solved
  useEffect(() => {
    if (status === 'playing' && solved.length === itemOrder.length) {
      setStatus('solved');
    }
  }, [status, solved, itemOrder]);

  return (
    <React.Fragment>
      <div className="controls">
        <button className="play-button" onClick={() => toggleLevelSelecter(true)}>
          {status === 'playing' ? 'Restart' : status === 'solved' ? 'Play again' : 'Play'}
        </button>
        {time > 0 && (
          <span style={{ color: status === 'solved' ? 'lime' : 'black' }}>
            {Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60)}:
            {time % 60 < 10 ? `0${time % 60}` : time % 60}
          </span>
        )}
        {levelSelecter && (
          <div className="selecter-background">
            <div className="level-selecter">
              <div className="instructions">
                <span>🥕 + 🥕 ✔️</span>
                <span>🥕 + 🥦 ❌</span>
              </div>
              <h3>Match the pairs as fast as you can!</h3>
              <span>First, pick a level:</span>
              <select onChange={e => setLevel(e.target.value)}>
                {levels.map((level, index) => (
                  <option key={index} value={index}>
                    Level {index + 1}
                  </option>
                ))}
              </select>
              <button className="play-button" onClick={startGame}>
                Start
              </button>
            </div>
          </div>
        )}
      </div>
      <Grid size={level * 2 + 4}>
        {itemOrder.map((item, index) => (
          <Button
            key={index}
            index={index}
            value={item}
            level={level}
            selectItem={selectItem}
            highlighted={currentPair.includes(index)}
            visible={allItemsVisible || currentPair.includes(index) || solved.includes(index)}
          />
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default App;
