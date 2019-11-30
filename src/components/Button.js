import React from 'react';

function Button({ index, value, selectItem, content }) {
  const sound = require(`../sound/${value}.mp3`);
  const pic = require('../gb.jpeg');
  let _audio = HTMLAudioElement;

  function click() {
    selectItem(index);
    _audio.play();
  }

  return (
    <React.Fragment>
      <button className="item" onClick={click}>
        {content === 'gb' ? <img src={pic} alt="GREEEN BEEANS" /> : content}
      </button>
      <audio ref={c => (_audio = c)} src={sound} />
    </React.Fragment>
  );
}

export default Button;
