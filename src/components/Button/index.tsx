import React, { useRef } from 'react';
import { Wrapper, Inner, Front, Back, Audio, Image } from './styles';

interface Props {
  index: number,
  value: string,
  level: number,
  selectItem: (index: number) => void,
  highlighted: boolean,
  visible: boolean,
  soundOn: boolean
}

const Button: React.FC<Props> = ({ index, value, level, selectItem, highlighted, visible, soundOn }) => {
  const sound = level === 0 ? require(`../../sound/${value}.mp3`) : null;
  const pic = require('../../gb.jpeg');
  let audioRef = useRef<HTMLAudioElement>(null);

  function click() {
    if (!visible) selectItem(index);
    if (soundOn && sound && audioRef.current) audioRef.current.play();
  }

  return (
    <React.Fragment>
      <Wrapper onClick={click} visible={visible}>
        <Inner visible={visible}>
          <Front />
          <Back highlighted={highlighted}>{value === 'gb' ? <Image src={pic} alt="GREEEN BEEANS" /> : value}</Back>
        </Inner>
      </Wrapper>
      {sound && <Audio ref={audioRef} src={sound} />}
    </React.Fragment>
  );
}

export default Button;
