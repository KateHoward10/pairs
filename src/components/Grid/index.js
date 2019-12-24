import styled from 'styled-components';

const Grid = styled.div(
  ({ size }) => `
  display: grid;
  grid-template-columns: repeat(${size}, ${90 / size}vw);
  grid-template-rows: repeat(${size}, ${90 / size}vw);
  border: 1px solid grey;
  @media screen and (min-width: 600px) {
    grid-template-rows: repeat(${size}, ${540 / size}px);
    grid-template-columns: repeat(${size}, ${540 / size}px);
  }
`
);

export default Grid;
