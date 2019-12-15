import styled from 'styled-components';

const Grid = styled.div(
  ({ size }) => `
  display: grid;
  grid-template-columns: repeat(${size}, ${80 / size}vw);
  grid-template-rows: repeat(${size}, ${80 / size}vw);
  border: 1px solid grey;
  @media screen and (min-width: 700px) {
    grid-template-rows: repeat(${size}, ${500 / size}px);
    grid-template-columns: repeat(${size}, ${500 / size}px);
  }
`
);

export default Grid;
