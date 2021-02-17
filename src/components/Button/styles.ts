import styled, { css } from 'styled-components';

interface Props {
  visible: boolean
}

interface BackProps {
  highlighted: boolean
}

export const Wrapper = styled.button<Props>`
  background: grey;
  perspective: 1000px;
  outline: none;
  border: 1px solid grey;
  padding: 0;
  ${props =>
    props.visible &&
    css`
      transform: rotateY(180deg);
    `};
`;

export const Inner = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  ${props =>
    props.visible &&
    css`
      transform: rotateY(180deg);
    `};
`;

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: lightgrey;
  backface-visibility: hidden;
`;

export const Back = styled.div<BackProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  backface-visibility: hidden;
  font-size: 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  ${props =>
    props.highlighted &&
    css`
      box-shadow: inset 0 0 5px gold;
    `};
`;

export const Audio = styled.audio`
  display: none;
`;

export const Image = styled.img`
  width: 5vw;
  height: 5vw;
`;
