import React from 'react';
import './App.css';

function App() {
  const items = ['🥕', '🍅', '🥔', '🥑', '🌽', '🥦', '🍄', '🍆'];

  return (
    <div className="grid">
      {[...items, ...items]
        .sort(() => Math.random() - 0.5)
        .map((item, index) => (
          <button key={index} className="item">
            {item}
          </button>
        ))}
    </div>
  );
}

export default App;
