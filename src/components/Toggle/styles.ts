import styled from "styled-components";

interface Props {
  soundOn: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const StyledLabel = styled.label<Props>`
  width: 40px;
  height: 24px;
  border-radius: 12px;
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
  box-shadow: inset 0 0 5px grey;
  justify-content: ${props => (props.soundOn ? "flex-start" : "flex-end")};
`

export const Hidden = styled.input`
  display: none;
`

export const Slider = styled.div<Props>`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 3px;
  box-shadow: 0 0 5px grey;
  background-color: ${props => (props.soundOn ? "deepskyblue" : "lightblue")};
`