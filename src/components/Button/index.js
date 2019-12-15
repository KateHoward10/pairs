import React from 'react';
import { Wrapper, Inner, Front, Back, Audio, Image } from './styles';

function Button({ index, value, level, selectItem, highlighted, visible }) {
  const sound = level === 0 ? require(`../../sound/${value}.mp3`) : null;
  const pic = require('../../gb.jpeg');
  let _audio = HTMLAudioElement;

  function click() {
    selectItem(index);
    if (sound) _audio.play();
  }

  return (
    <React.Fragment>
      <Wrapper onClick={click} visible={visible}>
        <Inner visible={visible}>
          <Front />
          <Back highlighted={highlighted}>{value === 'gb' ? <Image src={pic} alt="GREEEN BEEANS" /> : value}</Back>
        </Inner>
      </Wrapper>
      {sound && <Audio ref={c => (_audio = c)} src={sound} />}
    </React.Fragment>
  );
}

export default Button;
