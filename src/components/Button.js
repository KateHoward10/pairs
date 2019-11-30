import React from 'react';

function Button({ index, value, selectItem, content }) {
  const sound = require(`../sound/${value}.mp3`);
  let _audio = HTMLAudioElement;

  function click() {
    selectItem(index);
    _audio.play();
  }

  return (
    <React.Fragment>
      <button className="item" onClick={click}>
        {content}
      </button>
      <audio ref={c => (_audio = c)} src={sound} />
    </React.Fragment>
  );
}

export default Button;
